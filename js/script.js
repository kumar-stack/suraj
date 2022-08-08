const slides = document.querySelector('.slides') ;
const slide = slides.querySelector('.slide') ;
const time = '3000';
setTimeout('hide()',time) ;

console.log(slide)

const hide = function(){
    if(slide.length > 1) {
        slide.classList.remove('active')
        slide.classList.add('hidden')
        slides.append(item[0])
        slide.classList.remove('hidden')
        slide.classList.add('active')
        
        
    }
}