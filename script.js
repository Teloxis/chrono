 var span, boutonStart, boutouStop, t, msec, sec, min, h;

 window.onload = function(){
    span = document.getElementsByTagName('span');
    boutonStart = document.getElementById('debut');
    boutouStop = document.getElementById('stop');
    t;
    msec = 0, sec = 0; min = 0, h = 0;
 }

 function chronometre(){
    msec+=1;
    if (msec==10) {
        msec=1;
        sec+=1;
    }
    if (sec==60) {
        sec=0;
        min+=1;
    }
    if (min==60) {
        min=0;
        h+=1;
    }

    span[0].innerHTML = h + " h" ;
    span[1].innerHTML = min + " min" ;
    span[2].innerHTML = sec + " s" ;
    span[3].innerHTML = msec + " ms";
 }

function debut(){
    t =setInterval(chronometre,100);
    boutonStart.disabled = true
}

function enregistrement() {
    if (msec === 0) return;
    boutonStart.disabled = true;
    const date = document.querySelector('.temps');
    document.getElementById("save").innerHTML += date.innerHTML+"<br>";
    
}

function stop(){
    clearInterval(t);
    boutonStart.disabled = false
}

function reinitialisation(){
    clearInterval(t);
    boutonStart.disabled = false;
    msec=0, sec=0 , min=0, h=0;

    span[0].innerHTML = h + " h" ;
    span[1].innerHTML = min + " min" ;
    span[2].innerHTML = sec + " s" ;
    span[3].innerHTML = msec + " ms";
    
    document.getElementById("save").innerHTML= " ";
}


s
