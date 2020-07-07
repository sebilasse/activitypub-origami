const path =require('path');
const packageJSON = require('./package.json');
const snarkdown = require('snarkdown');
const id ="abc";
const confirmBase = packageJSON.redaktor.confirmationEndpoint||'http://localhost/confirm';
const confirmLink = `${confirmBase}apconf--${id}`;
const text = `[${confirmLink}](${confirmLink})`;
const html = snarkdown(text.replace(/\n/g, '<br />'));
console.log(confirmBase, text, html)
