const box = document.getElementById('box');

box.addEventListener("click", changeColor);

function changeColor() {
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)

    box.style.backgroundColor=`rgb(${r},${g},${b})`;
}

