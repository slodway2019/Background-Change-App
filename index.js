// we need to target 3 things here: button to click to get the color and body to show the color//

const change = document.getElementById('change');
const color = document.getElementById('color');
const body = document.body;

change.addEventListener('click', changeBG);

function changeBG(){
    const color1 = getRandomRGB();
    const color2 = getRandomRGB();
    const color3 = getRandomRGB();

    const colorString = `rgb(${color1}, ${color2}, ${color3})`;

    // console.log(colorString)

    body.style.background = colorString;

}

//Function that will give random value from 0 to 255 (Colors)
function getRandomRGB(){
    return Math.floor(Math.random() * 256);
}