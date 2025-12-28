const imgLamp = document.getElementById("img-lamp");
const btnLamp = document.getElementById("btn-lamp");

var turnOn = false;

btnLamp.addEventListener("click", function(){
    if (turnOn) {
        imgLamp.src = './img/white_lamp.png';
        btnLamp.textContent = 'Accendi';
        turnOn = false;
    } else {
        imgLamp.src = './img/yellow_lamp.png';
        btnLamp.textContent = 'Spegni';
        turnOn = true;
    }

});