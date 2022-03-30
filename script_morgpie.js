window.onload=load;

function load(){
    document.getElementById("cambio").onclick = changeVideo2;
    document.getElementById("vote").onclick = submitVote;
}
function changeVideo1(){
    document.getElementById("video").src = "https://dood.so/e/j9opw62dzkxr";
    document.getElementById("cambio").onclick = changeVideo2;
    document.getElementById("cambio").innerHTML="Secondo video";
}
function changeVideo2(){
    document.getElementById("video").src = "https://dood.so/e/1v5i7coot67l";
    document.getElementById("cambio").onclick = changeVideo1;
    document.getElementById("cambio").innerHTML="Primo video";
}
