const sizeInput = document.getElementById("size");
const colorInput = document.getElementById("color");
const fontInput = document.getElementById("select");
const text = document.getElementById("h1");
const fonts = [
    "Arial", "Verdana", "Tahoma", "Trebuchet MS", 
    "Times New Roman", "Georgia", "Courier New", "Comic Sans MS"
];
fonts.forEach(font => {
    const option = new Option(font,font);
    fontInput.add(option);
});

colorInput.addEventListener("input",() => {
    const selectedColor = colorInput.value;
    text.style.color = selectedColor;
});
fontInput.addEventListener("change",() =>{
    const fontType = fontInput.value;
    text.style.fontFamily = fontType; 
});
sizeInput.addEventListener("input", () =>{
    const fntSize = parseFloat(sizeInput.value);
    if (isNaN(fntSize) || fntSize <= 0 ){
        window.alert("invalid size");
        return ;
    }
    text.style.fontSize = `${fntSize}px`;

});