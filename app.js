const colorPicker = document.querySelector('#colorPicker');
const colorMode = document.querySelector('.colorMode');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');
const sizeValue = document.querySelector('.sizeValue');
const slider = document.querySelector('.slider');
const gridContainer = document.querySelector('.gridContainer');
const gridCollum = document.querySelector('.gridCollum');
const gridRow = document.querySelector('.gridRow');


// Update value whenever moving the slider
slider.addEventListener('input', function () {
    sizeValue.textContent = `${slider.value}x${slider.value}`;
    gridCollum.innerHTML = ` `;
});
const createRow = (e) => {
    let value = e * e;
    for (let i = value; i > 0; i--) {
        const newRow = document.createElement('div');
        newRow.classList.add('gridRow');
        gridCollum.append(newRow);
        newRow.style.width = `calc(100% / ${e})`;
        newRow.style.paddingBottom = `calc(100% / ${e})`;
        newRow.style.border = `1px black solid`
    }
};

slider.addEventListener('change', function () {
    let size = parseInt(slider.value);
    createRow(size);
});
//change grid color
colorMode.addEventListener('click', function () {
    colorMode.style.color = colorPicker.value;
    gridCollum.addEventListener('mouseover', function (e) {
        e.target.style.background = colorPicker.value;
    });
})
//Clear button
clear.addEventListener('click', function () {
    slider.value = 1;
    gridCollum.innerHTML = `<div class="gridRow" style="width: calc(100%); padding-bottom: calc(100%); border: 1px solid black"></div>`;
    sizeValue.textContent = '1 x 1';
    gridRow.style.border = `1px black solid`
    colorMode.style.color='rgb(231, 111, 81)'
});
//Eraser button

eraser.addEventListener('click', function () {
    gridCollum.addEventListener('mouseover', function (e) {
        e.target.style.background = ""
    });
});

gridCollum.innerHTML = `<div class="gridRow" style="width: calc(100%); padding-bottom: calc(100%); border: 1px solid black"></div>`;

