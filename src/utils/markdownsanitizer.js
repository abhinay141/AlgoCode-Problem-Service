const marked = require('marked');//converts markdown to html
const sanitizeHtmlLibrary = require('sanitize-html');//removes all html tags from the html content to prevent xss attacks
const TurndownService = require('turndown');//converts html to markdown
function sanitizeMarkdownContent(markdownContent){

//1. convert markdown to html
const convertedHtml = marked.parse(markdownContent);

//2. remove all html tags from the html content
const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat([ 'img' ]), //allow img tags
    allowedAttributes: {}

  
    
});

const turndownService = new TurndownService(); //create an instance of turndown service
return turndownService.turndown(sanitizedHtml); //convert the sanitized html to markdown to store in the database

}

module.exports = sanitizeMarkdownContent;