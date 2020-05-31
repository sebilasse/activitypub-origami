var _, $, jQuery;

var $ = require('ep_etherpad-lite/static/js/rjquery').$;
var _ = require('ep_etherpad-lite/static/js/underscore');
var headingClass = 'heading';
var cssFiles = ['ep_apconf/static/css/editor.css'];

// All our tags and colors are block elements, so we just return them.
var tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'output', 'code'];
var colors = ['black','multi','grey','pink','lightblue','blue','lightgreen','green','red','orange','yellow'];
exports.aceRegisterBlockElements = function(){
  return tags;
}

// Bind the event handler to the toolbar buttons
exports.postAceInit = function(hook, context){
  var hs = $('#heading-selection');
  hs.on('change', function(){
    var value = $(this).val();
    var intValue = parseInt(value,10);
    if(!_.isNaN(intValue)){
      context.ace.callWithAce(function(ace){
        ace.ace_doInsertHeading(intValue);
      },'insertheading' , true);
      hs.val("dummy");
    }
  })

  var cs = $('.color-selection');
  cs.on('change', function(){
    var value = $(this).val();
    var intValue = parseInt(value,10);
    if(!_.isNaN(intValue)){
      context.ace.callWithAce(function(ace){
        ace.ace_doInsertColors(intValue);
      },'insertColor' , true);
      cs.val("dummy");
    }
  })
  $('.font_color').hover(function(){
    $('.submenu > .color-selection').attr('size', 6);
  });
  $('.font-color-icon').click(function(){
    $('#font-color').toggle();
  });
};

// On caret position change show the current heading
exports.aceEditEvent = function(hook, call, cb){

  // If it's not a click or a key event and the text hasn't changed then do nothing
  var cs = call.callstack;
  if(!(cs.type == "handleClick") && !(cs.type == "handleKeyEvent") && !(cs.docTextChanged)){
    return false;
  }
  // If it's an initial setup event then do nothing..
  if(cs.type == "setBaseText" || cs.type == "setup") return false;

  // It looks like we should check to see if this section has this attribute
  setTimeout(function(){ // avoid race condition..
    var attributeManager = call.documentAttributeManager;
    var rep = call.rep;
    var firstLine, lastLine;
    var activeAttributes = {};
    $("#heading-selection").val(-2);

    firstLine = rep.selStart[0];
    lastLine = Math.max(firstLine, rep.selEnd[0] - ((rep.selEnd[1] === 0) ? 1 : 0));
    var totalNumberOfLines = 0;

    _(_.range(firstLine, lastLine + 1)).each(function(line){
      totalNumberOfLines++;
      var attr = attributeManager.getAttributeOnLine(line, "heading");
      if(!activeAttributes[attr]){
        activeAttributes[attr] = {};
        activeAttributes[attr].count = 1;
      }else{
        activeAttributes[attr].count++;
      }
    });

    $.each(activeAttributes, function(k, attr){
      if(attr.count === totalNumberOfLines){
        // show as active class
        var ind = tags.indexOf(k);
        $("#heading-selection").val(ind);
      }
    });

  },250);

}

// Our heading attribute will result in a heading:h1... :h6 class
exports.aceAttribsToClasses = function(hook, context){
  //console.log(context);
  if(context.key == 'heading'){
    return ['heading:' + context.value ];
  }
  if(context.key.indexOf("color:") !== -1){
    var color = /(?:^| )color:([A-Za-z0-9]*)/.exec(context.key);
    return ['color_' + color[1] ];
  }
  if(context.key == 'color'){
    return ['color_' + context.value ];
  }
}

// Here we convert the class heading:h1 into a tag
exports.aceDomLineProcessLineAttributes = function(name, context){
  var cls = context.cls;
  var domline = context.domline;
  var headingType = /(?:^| )heading:([A-Za-z0-9]*)/.exec(cls);
  var tagIndex;

  if (headingType) tagIndex = _.indexOf(tags, headingType[1]);

  if (tagIndex !== undefined && tagIndex >= 0){

    var tag = tags[tagIndex];
//console.log(tag)
    var modifier = {
      preHtml: '<' + tag + '>',
      postHtml: '</' + tag + '>',
      processedMarker: true
    };
    return [modifier];
  }
  return [];
};

// Find out which lines are selected and assign them the heading attribute.
// Passing a level >= 0 will set a heading on the selected lines, level < 0
// will remove it
function doInsertHeading(level){
  var rep = this.rep,
    documentAttributeManager = this.documentAttributeManager;
  if (!(rep.selStart && rep.selEnd) || (level >= 0 && tags[level] === undefined))
  {
    return;
  }

  var firstLine, lastLine;

  firstLine = rep.selStart[0];
  lastLine = Math.max(firstLine, rep.selEnd[0] - ((rep.selEnd[1] === 0) ? 1 : 0));
  _(_.range(firstLine, lastLine + 1)).each(function(i){
    if(level >= 0){
      documentAttributeManager.setAttributeOnLine(i, 'heading', tags[level]);
    }else{
      documentAttributeManager.removeAttributeOnLine(i, 'heading');
    }
  });
}
// Find out which lines are selected and assign them the color attribute.
// Passing a level >= 0 will set a colors on the selected lines, level < 0
// will remove it
function doInsertColors(level){
  var rep = this.rep,
    documentAttributeManager = this.documentAttributeManager;
  if (!(rep.selStart && rep.selEnd) || (level >= 0 && colors[level] === undefined)){
    return;
  }

  var new_color = ["color", ""];
  if(level >= 0) {
    new_color = ["color", colors[level]];
  }

  documentAttributeManager.setAttributesOnRange(rep.selStart, rep.selEnd, [new_color]);
}

exports.aceKeyEvent = function(hook_name, context) {
  console.log(context.textContent, context);
  /*
  var event = context.evt;
  if (event.shiftKey && enterPressed(event)) {
      event.preventDefault();
      if (event.type === "keyup") {
          insertLinebreak(context);
      }
      // From doc: "The return value should be true if you have handled the event."
      return true;
  }
  */
};
// Here we convert the class color:red into a tag
exports.aceCreateDomLine = function(name, context){
  var cls = context.cls;
  var domline = context.domline;
  var colorsType = /(?:^| )color:([A-Za-z0-9]*)/.exec(cls);

  var tagIndex;
  if (colorsType) tagIndex = _.indexOf(colors, colorsType[1]);


  if (tagIndex !== undefined && tagIndex >= 0){
    var tag = colors[tagIndex];
    var modifier = {
      extraOpenTags: '',
      extraCloseTags: '',
      cls: cls
    };
    return [modifier];
  }
  return [];
};


// Once ace is initialized, we set ace_doInsertHeading and bind it to the context
exports.aceInitialized = function(hook, context){
  var editorInfo = context.editorInfo;
  editorInfo.ace_doInsertHeading = _(doInsertHeading).bind(context);
  editorInfo.ace_doInsertColors = _(doInsertColors).bind(context);
}

exports.aceEditorCSS = function(){
  return cssFiles;
};
