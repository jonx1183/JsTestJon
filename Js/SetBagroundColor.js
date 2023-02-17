console.log("SetBagroundColor")

const inp = document.querySelector(".inpColor")
console.log("inp")

const pbCol = document.querySelector(".pbSetColor")
console.log("pbCol")

const colPicker = document.querySelector(".colpicker")
console.log("colPicker")

function setBackGrColor(e){
    console.log("e")
    const bdy = document.querySelector("body")
    let col = inp.value
    console.log("col")
    bdy.style.backgroundColor = col;
}

function setBackGrColorPicker(e){
    const bdy = document.querySelector("body")
    let col = inp.value
    console.log("col")
    bdy.style.backgroundColor = col;
}

function setBackGrHexValue(){
    inp.value = colPicker.value
}

pbCol.addEventListener('click', setBackGrColor)
inp.addEventListener('keyup', setBackGrColor)
colPicker.addEventListener('input', setBackGrColorPicker)
colPicker.addEventListener('change', setBackGrHexValue)