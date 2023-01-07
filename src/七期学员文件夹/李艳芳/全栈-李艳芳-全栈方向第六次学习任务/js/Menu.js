function showHid(part){
    let showhide = document.getElementById(part);
    if(showhide.style.display == "none"){
        part1.style.display = "none";
        part2.style.display = "none";
        part3.style.display = "none";
        part4.style.display = "none";
        part5.style.display = "none";
        showhide.style.display = "block";
    }
    else{
        showhide.style.display = "none";
    }
}
