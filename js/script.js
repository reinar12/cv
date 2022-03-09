function realtimeClock() {

    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    //Adiciona AM PM

    var amPm = (hours < 12 ) ? "AM" : "PM";
    
    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML =
        hours + "  :  " + minutes + "  :  " + seconds + " " + amPm;
    var t = setTimeout(realtimeClock, 500);
}

  const text = document.querySelector('.text');
            text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
        
            const letters = document.querySelectorAll('span');
            for (let i=0; i<letters.length; i++){
                letters[i].addEventListener("mouseover", function(){
                    letters[i].classList.add('active')
                })
            }
