Handlebars.registerHelper('isIndex', function(index, targetIndex, options) {
    if (index === targetIndex) {
        return options.fn(this);//implementation to code that exist in the HTML that be within javaScript code 

    } else {
        return options.inverse(this);
    }
});

$(document).ready(function(){
    $.ajax(({
        method:"GET",
        url: "JSON/handling.json",
        
        success: function(data,status,xhrResponse){
            let charContent = $("#charTemplate").html();
            let compilerSection = Handlebars.compile(charContent);
            $(".chars-container").html(compilerSection({characters : data}));
        },

        error : function(xhr,status,error){
            console.log(error)
        }
    }))
});
