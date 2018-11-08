let loadJavascriptForHomeView = function(){
    /** declarations of variables */
    let slideIndex = 1;
    let prev=document.getElementsByClassName("prev");
    let next=document.getElementsByClassName("next");
    let dot=document.getElementsByClassName("dot");
    
    /** All the carousel stuff */
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }
    
    prev.onclick = function() {
        console.log("j");
        plusSlides(-1);
    }
    next.onclick = function() {
        console.log("j");
        plusSlides(1);
    }
    dot.onclick = function(id) {
        currentSlide(id);
    }

    function showSlides(n) {
        try{
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1} 
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"; 
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block"; 
            dots[slideIndex-1].className += " active";
        }catch(err){

        }
    
    }
    /** In order to get the event onclick from a dynamic button I needed to do this
     * way because conventional ways didn't work
     */
    document.addEventListener('click',function(e){
        if(e.target && e.target.className== 'next'){
            next.onclick();
        }else if(e.target && e.target.className== 'prev'){
            prev.onclick();
        }else if(e.target && e.target.className== 'dot'){
            dot.onclick(e.target.id);
        }
    
    })

    function carousel() {
        let i;
        let x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1} 
        x[slideIndex-1].style.display = "block"; 
        setTimeout(carousel, 4000); // Change image every 4 seconds
    }
    carousel();
}
export {loadJavascriptForHomeView};