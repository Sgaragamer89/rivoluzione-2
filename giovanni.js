 // Funzione per riprodurre il suono
 function playSound() {
    var audio = document.getElementById("myAudio");
    audio.play();
}

// Attiva la funzione playSound quando il documento è pronto
document.addEventListener("DOMContentLoaded", function(event) { 
    playSound();
});