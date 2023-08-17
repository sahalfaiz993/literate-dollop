const productImages = document.querySelectorAll('.product-images  img');
const productImageSlider = document.querySelector('.image-slider');

let activeImageSlide = 0;
productImages.forEach((item, i)=>{
    item.addEventListener('click',()=>{
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlider.style.background=`url('${item.src}')`;
        activeImageSlide= i;

    })
})


// check buttns
const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkbtn = 0;
sizeBtns.forEach((item, i)=>{
    item.addEventListener('click', () => {
        sizeBtns[checkbtn].classList.remove('check');
        item.classList.add('check');
        checkbtn  =i;
    })
})



