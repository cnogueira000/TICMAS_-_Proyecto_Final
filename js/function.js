
document.getElementById("btn-on-actual").style.display = "none";
document.getElementById("btn-on-previa").style.display = "none";

document.getElementById("btn-off-actual").addEventListener("click", function(){
    document.getElementById("exp-actual").style.display = "none";
    document.getElementById("btn-off-actual").style.display = "none";
    document.getElementById("btn-on-actual").style.display = "inline";
});

document.getElementById("btn-on-actual").addEventListener("click", function(){
    document.getElementById("exp-actual").style.display = "block";
    document.getElementById("btn-off-actual").style.display = "inline";
    document.getElementById("btn-on-actual").style.display = "none";
});

document.getElementById("btn-off-previa").addEventListener("click", function(){
    document.getElementById("exp-previa").style.display = "none";
    document.getElementById("btn-off-previa").style.display = "none";
    document.getElementById("btn-on-previa").style.display = "inline";
});

document.getElementById("btn-on-previa").addEventListener("click", function(){
    document.getElementById("exp-previa").style.display = "block";
    document.getElementById("btn-off-previa").style.display = "inline";
    document.getElementById("btn-on-previa").style.display = "none";
});