window.onload=load;

function load(){
    document.getElementById("cambio").onclick = changeVideo2;
}
function changeVideo1(){
    document.getElementById("video").src = "https://mega.nz/embed/blwyzCZa#28yGESBKG37yW8dx-CsgJfKTleIYcZ1ToTred0_20og";
    document.getElementById("cambio").onclick = changeVideo2;
    document.getElementById("cambio").innerHTML="Secondo video";
}
function changeVideo2(){
    document.getElementById("video").src = "https://mega.nz/embed/Pt4VkTjC#PCADAXYBilm8y4DTlLLsOgTs50AdW8AUOjCA34eOOq4";
    document.getElementById("cambio").onclick = changeVideo1;
    document.getElementById("cambio").innerHTML="Primo video";
}
