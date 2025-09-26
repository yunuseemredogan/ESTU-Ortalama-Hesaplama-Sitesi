function sıfırla1(){
    var seçim = document.getElementById("input");
    seçim.selectedIndex = 0;

    showElements();

    for (var i = 1; i <= 12; i++) {
        var selectKredi = document.getElementById("harf"+i);
        selectKredi.selectedIndex = 0;
    }
    for (var i = 1; i <= 12; i++) {
        var selectHarf = document.getElementById("kredi"+i);
        selectHarf.selectedIndex = 0;
    }
    for (var i = 1; i <= 12; i++) {
        var selectHarf = document.getElementById("ders"+i);
        selectHarf.value = "";
    }

    document.getElementById("dönemsonuç").innerHTML = ""
}

function sıfırla2(){
    document.getElementById("öncekiKredi").value = 0;
    document.getElementById("genelOrtalama").value = 0;
    document.getElementById("sonrakiKredi").value = 0;
    document.getElementById("dönemOrtalama").value = 0;
    document.getElementById("genelsonuç").innerHTML = "";
}

function hesapla1(){
    let toplampuan = 0;
    let toplamkredi = 0;

    for (var i = 1; i <= 12; i++) {
        if(document.getElementById("harf"+i).style.display == "block" && document.getElementById("kredi"+i).style.display == "block"){
            toplampuan += (document.getElementById("harf"+i).value)*(document.getElementById("kredi"+i).value);
        }
    }
    for (var i = 1; i <= 12; i++) {
        if(document.getElementById("harf"+i).style.display == "block" && document.getElementById("kredi"+i).style.display == "block"){
            toplamkredi += parseFloat(document.getElementById("kredi"+i).value);
        }
    }
    
    document.getElementById("dönemsonuç").innerHTML = parseFloat((toplampuan/toplamkredi).toFixed(2));
}

function hesapla2(){
    var öncekiKredi = document.getElementById("öncekiKredi");
    var genelOrtalama = document.getElementById("genelOrtalama");
    var sonrakiKredi = document.getElementById("sonrakiKredi");
    var dönemOrtalama = document.getElementById("dönemOrtalama");

    var x = parseFloat(öncekiKredi.value);
    var a = parseFloat(genelOrtalama.value);
    var y = parseFloat(sonrakiKredi.value);
    var b = parseFloat(dönemOrtalama.value);

    var sonuç = ((x*a+y*b)/(x+y));
    
    document.getElementById("genelsonuç").innerHTML = parseFloat(sonuç.toFixed(2));
}

function showElements() {
    var selectValue = parseInt(document.getElementById("input").value);

    for (var i = 1; i <= 12; i++) {
        var selectElement = document.getElementById("harf" + i);
        if (i <= selectValue) {
            selectElement.style.display = "block";
        } else {
            selectElement.style.display = "none";
            selectElement.selectedIndex = 0;
        }
    }
    for (var i = 1; i <= 12; i++) {
        var selectElement = document.getElementById("kredi" + i);
        if (i <= selectValue) {
            selectElement.style.display = "block";
        } else {
            selectElement.style.display = "none";
            selectElement.selectedIndex = 0;
        }
    }
    for (var i = 1; i <= 12; i++) {
        var selectElement = document.getElementById("ders" + i);
        if (i <= selectValue) {
            selectElement.style.display = "block";
        } else {
            selectElement.style.display = "none";
            selectElement.value = "";
        }
    }
}


