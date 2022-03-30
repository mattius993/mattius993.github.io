window.onload=load;

function load(){
    document.getElementById("cambio").onclick = changeVideo2;
}
function changeVideo1(){
    document.getElementById("video").src = "https://mega.nz/embed/vwkzBLAJ#FfnvNnu9Q3ugmcXBrQuJidHwoA70m3FkA4rtQfHHMIE";
    document.getElementById("cambio").onclick = changeVideo2;
    document.getElementById("cambio").innerHTML="Secondo video";
}
function changeVideo2(){
    document.getElementById("video").src = "https://mega.nz/embed/mpkhGKKa#xD8J-TbROjvqeqVk5IHzQBdNoZTEBl1_xkXfKDfhyz8";
    document.getElementById("cambio").onclick = changeVideo1;
    document.getElementById("cambio").innerHTML="Primo video";
}
