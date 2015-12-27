
(function ($) {
    "use strict";
    $(document).ready(function(){
        hljs.initHighlightingOnLoad();
    });
}(jQuery));

Handlebars.registerHelper('trimString', function(passedString, startstring, endstring) {
   var theString = passedString.substring( startstring, endstring );
   return new Handlebars.SafeString(theString)
});
