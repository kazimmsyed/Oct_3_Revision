console.log('lazy_loading conn');

bf_images=document.querySelectorAll('.blurryface img');

function loaded() {
    blurredImageDiv.classList.add("loaded");

}


bf_images.forEach((pic)=>{
    console.log('hello');
    function loaded(){
        pic.classList.add('loaded');
    }

    if(pic.complete){
        loaded();
    }
    else{
        
        pic.addEventListener("load",loaded);
    }
});



