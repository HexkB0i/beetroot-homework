
// Hiding the chapter list and add top margin
let chapterList = document.querySelector('.chapter-list');
let textBody = document.querySelector('.doc-text')

function removeChapterList(){
    if(vw < 780){
        chapterList.remove();
        textBody.style.maxWidth = '100%';
        document.querySelector('.container-main').style.marginTop = '100px';
        
        var elems = textBody.querySelectorAll('*');
        /// stolen code vvvv
        for (var i=elems.length; i--;) {
            var f_size = getComputedStyle(elems[i]).fontSize;
            var numb   = f_size.replace(/\D/g,''); // the number
            var val    = f_size.replace(/\d/g,''); // px

            elems[i].style.fontSize = (+numb / 1.4) + val;    
        }
        /// stolen code ^^^^
    }else{};
};

removeChapterList();

// tests
console.log(chapterList);