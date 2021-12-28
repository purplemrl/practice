function show() {
    document.getElementById('img1').style.display = 'inline-block';
    document.getElementById('img2').style.display = 'inline-block';
}

function hide() {
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
}

function mouseover1() {
    document.getElementById('img1').style.transform = 'rotate(180deg)';
}

function mouseover2() {
    document.getElementById('img2').style.opacity = '100%';
}

function mouseout1() {
    document.getElementById('img1').style.transform = 'rotate(360deg)';
}

function mouseout2() {
    document.getElementById('img2').style.opacity = '50%';
}

function make() {
    document.getElementById("name").innerHTML = fname.value + " " + lname.value;

}

