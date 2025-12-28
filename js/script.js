const imgLamp = document.getElementById("img-lamp");
const btnLamp = document.getElementById("btn-lamp");

var turnOn = false;

btnLamp.addEventListener("click", function(){
    if (turnOn) {
        imgLamp.src = './img/white_lamp.png';
        imgLamp.alt = 'white lamp';
        btnLamp.textContent = 'Accendi';
        turnOn = false;
    } else {
        imgLamp.src = './img/yellow_lamp.png';
        imgLamp.alt = 'yellow lamp';
        btnLamp.textContent = 'Spegni';
        turnOn = true;
    }

});