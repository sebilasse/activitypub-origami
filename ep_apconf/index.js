var eejs = require('ep_etherpad-lite/node/eejs/');
var Changeset = require("ep_etherpad-lite/static/js/Changeset");
var Security = require('ep_etherpad-lite/static/js/security');

exports.eejsBlock_editbarMenuLeft = function (hook_name, args, cb) {
  args.content = args.content +
    eejs.require("ep_apconf/templates/editbarButtons.ejs") +
    eejs.require("ep_apconf/templates/colorButtons.ejs");
  return cb();
}
exports.eejsBlock_dd_format = function(hook_name, args, cb){
  args.content = args.content + eejs.require("ep_font_color/templates/fileMenu.ejs");
  return cb();
}

// Define the styles so they are consistant between client and server
var style = "@font-face {font-family: 'activitypub';src: url('./fonts/activitypub.eot?#iefix') format('embedded-opentype'), url('./fonts/activitypub.woff2?xxltkt') format('woff2'), url('./fonts/activitypub.woff?xxltkt') format('woff'), url('./fonts/activitypub.ttf?xxltkt') format('truetype'), url('./fonts/activitypub.svg?xxltkt#activitypub') format('svg');font-weight: normal;font-style: normal;} \
  h1{font-size: 2.0em;line-height: 120%;} \
  h2{font-size: 1.5em;line-height: 120%;} \
  h3{font-size: 1.17em;line-height: 120%;} \
  h4{line-height: 120%;} \
  h5{font-size: 0.83em;line-height: 120%;} \
  h6{font-size: 0.75em;line-height: 120%;} \
  output{font-family: 'activitypub' !important;speak: none;font-size: 64px;font-style: normal;font-weight: normal;font-variant: normal;text-transform: none;line-height: 1;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;} \
  code{font-family: monospace;}";

// Include CSS for HTML export
exports.stylesForExport = function(hook, padId, cb){
  cb(style);
};

// line, apool,attribLine,text
exports.getLineHTMLForExport = function (hook, context) {
  var header = _analyzeLine(context.attribLine, context.apool);
//console.log(header);
  if (header) {
    context.lineContent = "<" + header + ">" + Security.escapeHTML(context.text.substring(1)) + "</" + header + ">";
    return "<" + header + ">" + Security.escapeHTML(context.text.substring(1)) + "</" + header + ">";
  }
}

function _analyzeLine(alineAttrs, apool) {
  var header = null;
  if (alineAttrs) {
    var opIter = Changeset.opIterator(alineAttrs);
    if (opIter.hasNext()) {
      var op = opIter.next();
      header = Changeset.opAttributeValue(op, 'heading', apool);
    }
  }
  return header;
}
