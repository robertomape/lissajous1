var canvas = document.querySelector('canvas');
canvas.width = 800;
canvas.height = 800;
canvas.tabindex = 0;
canvas.style = "position:absolute; left: 50%; width: 400px; margin-left: -200px;";

var c = canvas.getContext('2d');



var a = 0.9;
var b = 0.6;
var basex = canvas.width / 2;
var basey = canvas.height / 2;
var A = 100;
var B = 100;
var gr = Math.PI / 2;

function animate2() {
    requestAnimationFrame(animate2);
    c.beginPath();
    c.strokeStyle = 'black';
    c.fillStyle = 'black';

    for (j = 0; j <= 40; j += 0.01) {
        var x = A * Math.sin(a * j);
        var y = B * Math.sin((b * j) + gr);
        if (j == 0) {
            c.moveTo(basex + x, basey + y);
        }
        c.lineTo(basex + x, basey + y);

    }
    c.stroke();


}


function asiganarvalores(ap, bp, rad1, rad2) {
    var correct;
    a = ap;
    b = bp;
    if (rad1 > 400 || rad2 > 400) {
        correct = 0;
    } else {
        A = rad1;
        B = rad2;
        correct = 1;
    }
    return correct;

}

function verifyorder() {
    var ap = document.getElementById('a').value;
    var bp = document.getElementById('b').value;
    var rad2 = document.getElementById('rad1').value;
    var rad1 = document.getElementById('rad2').value;

    c.clearRect(0, 0, canvas.width, canvas.height);

    asiganarvalores(ap, bp, rad1, rad2);
    if (asiganarvalores(ap, bp, rad1, rad2) == 0) {
        alert("Wrong numbers");
    } else {
        animate2();
    }
}