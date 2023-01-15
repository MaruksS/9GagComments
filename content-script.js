// document.addEventListener("click", function() {
//     if (!scrolled){
//         if (document.activeElement.hasAttribute('data-evt')){
//             if (document.activeElement.getAttribute('data-evt').includes("PostTitle") || document.activeElement.getAttribute('data-evt').includes("PostImage")){
//                 href = document.activeElement['href']
//                 if(href.startsWith("https://9gag.com/gag/")){
//                     if(href.indexOf("#comment") == -1 && href.indexOf("#related")== -1){
//                         document.activeElement['href']=document.activeElement['href']+"#comment"
//                     }
//                 }
//             }
//         }
//     }
// }, false);

addEventListener("scroll", (event) => {
    var aTags = document.getElementsByClassName('badge-track');
    for (const tag of aTags) {
        if (tag.hasAttribute('data-evt')){
            if (tag.getAttribute('data-evt').includes("PostTitle") || tag.getAttribute('data-evt').includes("PostImage")){
                href = tag['href']
                if(href.startsWith("https://9gag.com/gag/")){
                    if(href.indexOf("#comment") == -1 && href.indexOf("#related")== -1){
                        tag['href']=tag['href']+"#comment"
                    }
                }
            }
        }
        else if(tag.hasAttribute('data-track')){
            if (tag.getAttribute('data-track').includes("post")){
                href = tag['href']
                if(href.startsWith("https://9gag.com/gag/")){
                    if(href.indexOf("#comment") == -1 && href.indexOf("#related")== -1){
                        tag['href']=tag['href']+"#comment"
                    }
                }
            }
        }
    }
});

