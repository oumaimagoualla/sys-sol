function show(x) {
        document.getElementById(x).style.visibility="visible";
}
function hide(x) {
        document.getElementById(x).style.visibility="hidden";
}
function dwreplace(n,x) {
        imgarray=["https://upload.wikimedia.org/wikipedia/commons/e/ef/Pluto_in_True_Color_-_High-Res.jpg", "https://upload.wikimedia.org/wikipedia/commons/5/58/Ceres_-_RC3_-_Haulani_Crater_%2822381131691%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/5/5b/Eris_and_dysnomia2.jpg", "https://upload.wikimedia.org/wikipedia/commons/2/2b/Haumea_Hubble.png", "https://upload.wikimedia.org/wikipedia/commons/2/29/Makemake_and_its_moon.jpg"];
        document.getElementById(x).src=imgarray[n];
        setTimeout(show, 300, x);
}