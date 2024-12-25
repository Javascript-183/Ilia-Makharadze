const image = document.getElementById("myPhoto");

const riseButton = document.getElementById("riseBotton");
const decreaseButton = document.getElementById("decreaseBotton");


riseButton.addEventListener('click', () => {
    let currentWidth = image.width; 
    image.width = currentWidth + 50; 
});


decreaseButton.addEventListener('click', () => {
    let currentWidth = image.width; 
    image.width = currentWidth - 50; 
});
