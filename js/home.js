const slideMain = document.querySelector(".slide-main");
const slideItems = document.querySelectorAll(".image-control-slide");
const dotSlide = document.querySelectorAll(".dot");
const slideItemWidth = slideItems[0].offsetWidth;  // width of item in slide (width of image)
const slideLenght = slideItems.length; // length of slide (1,2,3,4,...)

const MainNewFood = document.querySelector(".slide-main-new-food");
const ItemsNewFood = document.querySelectorAll(".item-slide");
const NewFoodItemWidth = ItemsNewFood[0].offsetWidth;  // width of item in slide (width of image)
const NewFoodLenght = ItemsNewFood.length; // length of slide (1,2,3,4,...)

var translateX = 0;
var index = 0;
var translateX1 = 0;
var index1 = 0;

var width = screen.width;
var lenght;

// handle for control right slide
const next = ()=> {
    index++;
    if(index >= slideLenght) {
        index=0;
        translateX = 0;
    } else {
        translateX-=slideItemWidth;
    }
    slideMain.style = `transform: translateX(${translateX}px); transition: linear .4s`;
    [ ...dotSlide].forEach((element)=>element.classList.remove("active"));
    dotSlide[index].classList.add("active");
}
// handle for control left slide
const prev = ()=> {
    index--;
    if(index < 0) {
        index = slideLenght - 1;
        translateX=-(slideItemWidth*(index));
    } else {
        translateX+=slideItemWidth;
    }
    slideMain.style = `transform: translateX(${translateX}px); transition: linear .4s`;
    [ ...dotSlide].forEach((element)=>element.classList.remove("active"));
    dotSlide[index].classList.add("active");
}
// handle for dot slide
[ ...dotSlide].forEach((item)=>item.addEventListener("click", (e)=> {
    [ ...dotSlide].forEach((element)=>element.classList.remove("active"));
    e.target.classList.add("active");
    const slideIndex = parseInt(e.target.dataset.index);
    index = slideIndex;
    translateX = -1*index*slideItemWidth;
    slideMain.style = `transform: translateX(${translateX}px); transition: linear .4s`;
}));
// handle for control right slide new food
const nextProduct = ()=> {
    if ((width <= 992) && (width > 768)) {
        lenght = NewFoodLenght-2;
    } else if ((width <= 768) && (width > 480)) {
        lenght = NewFoodLenght-1;
    } else if (width <= 480) {
        lenght = NewFoodLenght;
    } else {
        lenght = NewFoodLenght-3;
    }
    index1++;
    if (index1 >= lenght) {
        index1 = 0;
        translateX1 = 0;
    } else {
        translateX1-=(NewFoodItemWidth+22); // 22 is space Between products
    }
    MainNewFood.style = `transform: translateX(${translateX1}px); transition: linear .4s`;
}
// handle for control left slide new food
const prevProduct = ()=> {
    if ((width <= 992) && (width > 768)) {
        lenght = NewFoodLenght-3;
    } else if ((width <= 768) && (width > 480)) {
        lenght = NewFoodLenght-2;
    } else if (width <= 480) {
        lenght = NewFoodLenght-1;
    } else {
        lenght = NewFoodLenght-4;
    }
    index1--;
    if(index1 < 0) {
        index1 = lenght;
        translateX1=-((NewFoodItemWidth+22)*(index1));
    } else {
        translateX1+=NewFoodItemWidth+22;
    }
    MainNewFood.style = `transform: translateX(${translateX1}px); transition: linear .4s`;
}

setInterval(() => {
    next();
    nextProduct();
}, 3000);