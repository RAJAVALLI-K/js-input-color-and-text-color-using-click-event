let heading = document.getElementById('coltext'),
    color = document.querySelector("#colorpicker"),
    btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    document.heading = document.querySelector("#colorpicker").value;
    let clr = document.querySelector("#colorpicker").value;
    document.getElementById('coltext').style.color = clr;
    console.log(document.getElementById('coltext').style.color = clr);
});