var time = null;
function start(){
    document.getElementById("set").setAttribute('disabled', true);
    document.getElementById("countdown").setAttribute('disabled', true);
    document.getElementById("start").setAttribute('disabled', true);
    time = setInterval(function(){
        let hour = parseInt(document.getElementById("hour").value);
        let min = parseInt(document.getElementById("min").value);
        let sec = parseInt(document.getElementById("sec").value);
        let msec = parseInt(document.getElementById("msec").value);
        i = msec + 1;
        n = sec;
        x = min;
        a = hour; 
        document.getElementById("msec").value = i;
        
        if(i.toString().length == "1"){
            j = "0" + i.toString();
            document.getElementById("msec").value = j;
        }else{
            document.getElementById("msec").value = i;
        }
        if(msec == 99){
            document.getElementById("msec").value = "00";
            n = sec + 1;   
        }

        if(n.toString().length == "1"){
            m = "0" + n.toString();
            document.getElementById("sec").value = m;
        }else{
            document.getElementById("sec").value = n;
        }

        if(sec == 59){
            document.getElementById("sec").value = "00";
            x = min + 1;   
        }
        if(x.toString().length == "1"){
            y = "0" + x.toString();
            document.getElementById("min").value = y;
        }else{
            document.getElementById("min").value = x;
        }

        if(min == 59){
            document.getElementById("min").value = "00";
            a = hour + 1;
        }
        if(a.toString().length == "1"){
            b = "0" + a.toString();
            document.getElementById("hour").value = b;
        }else{
            document.getElementById("hour").value = a;
        }
    }, 6)
};
function stop(){
    clearInterval(time);
    document.getElementById("countdown").removeAttribute('disabled');
    document.getElementById("start").removeAttribute('disabled');
    document.getElementById("set").removeAttribute('disabled');
};
function reset(){
    document.getElementById("hour").value = "00";
    document.getElementById("min").value = "00";
    document.getElementById("sec").value = "00";
    document.getElementById("msec").value = "00";
};
function set(){
    document.getElementById("hour").removeAttribute('readonly');
    document.getElementById("min").removeAttribute('readonly');
    document.getElementById("sec").removeAttribute('readonly');
    document.getElementById("msec").removeAttribute('readonly');
    document.getElementById("edit").style.display = "block";
    document.getElementById("save").style.display = "block";
    document.getElementById("set").style.display = "none";
    document.getElementById("countdown").setAttribute('disabled', true);
    document.getElementById("start").setAttribute('disabled', true);
    document.getElementById("stop").setAttribute('disabled', true);
    document.getElementById("record").setAttribute('disabled', true);    
};
function countdown(){
    document.getElementById("start").setAttribute('disabled', true);
    document.getElementById("set").setAttribute('disabled', true);
    time = setInterval(function(){
        let hour = parseInt(document.getElementById("hour").value);
        let min = parseInt(document.getElementById("min").value);
        let sec = parseInt(document.getElementById("sec").value);
        let msec = parseInt(document.getElementById("msec").value);
        if(hour == 0 && min == 0 && sec == 0 && msec == 0){
            clearInterval(time);
            document.getElementById("start").removeAttribute('disabled');
            document.getElementById("set").removeAttribute('disabled');
            document.getElementById("countdown").removeAttribute('disabled');
        }else{
            document.getElementById("countdown").setAttribute('disabled', true);
            i = msec - 1;
            n = sec;
            x = min;
            a = hour; 
            document.getElementById("msec").value = i;
                
            if(i.toString().length == "1"){
                j = "0" + i.toString();
                document.getElementById("msec").value = j;
            }else{
                document.getElementById("msec").value = i;
            }
            
            if(msec == 0 && (sec > 0 || min > 0 || hour > 0)){
                document.getElementById("msec").value = "99";
                n = sec - 1;   
            }

            if(n.toString().length == "1"){
                m = "0" + n.toString();
                document.getElementById("sec").value = m;
            }else{
                document.getElementById("sec").value = n;
            }

            if(sec == 0 && (min > 0 || hour > 0)){
                document.getElementById("sec").value = "59";
                x = min - 1;   
            }
            if(x.toString().length == "1"){
                y = "0" + x.toString();
                document.getElementById("min").value = y;
            }else{
                document.getElementById("min").value = x;
            }

            if(min == 0 && hour > 0){
                document.getElementById("min").value = "59";
                a = hour - 1;
            }
            if(a.toString().length == "1"){
                b = "0" + a.toString();
                document.getElementById("hour").value = b;
            }else{
                document.getElementById("hour").value = a;
            }
                    
            if(hour + 1 == 0){
                document.getElementById("hour").value = "00";
            }
            if(min + 1 == 0){
                document.getElementById("min").value = "00";
            }
            if(sec + 1 == 0){
                document.getElementById("sec").value = "00";
            }

            if(sec == 3 && msec == 0 && hour == 0 && min == 0){
                let beep = new Audio("./assets/audio/mixkit-start-match-countdown-1954.mp3");
                beep.play();
            }
        }
    }, 6);
};
function save(){
    let hour = parseInt(document.getElementById("hour").value);
    let min = parseInt(document.getElementById("min").value);
    let sec = parseInt(document.getElementById("sec").value);
    let msec = parseInt(document.getElementById("msec").value);
    if(hour < 0 || min < 0 || sec < 0 || msec < 0){
        document.getElementById("negative").style.display = "block";
        document.getElementById("max").style.display = "none";
        document.getElementById("edit").style.display = "none";
    }else if(min > 60 || sec > 60 || msec > 100){
        document.getElementById("max").style.display = "block";
        document.getElementById("negative").style.display = "none";
        document.getElementById("edit").style.display = "none";
    }else{
        document.getElementById("negative").style.display = "none";
        document.getElementById("edit").style.display = "none";
        document.getElementById("max").style.display = "none";
        document.getElementById("hour").setAttribute('readonly', true);
        document.getElementById("min").setAttribute('readonly', true);
        document.getElementById("sec").setAttribute('readonly', true);
        document.getElementById("msec").setAttribute('readonly', true);
        document.getElementById("save").style.display = "none";
        document.getElementById("set").style.display = "block";
        document.getElementById("countdown").removeAttribute('disabled');
        document.getElementById("start").removeAttribute('disabled');
        document.getElementById("record").removeAttribute('disabled');
        document.getElementById("stop").removeAttribute('disabled');
    }
};
function record(){
    let hour = document.getElementById("hour").value;
    let min = document.getElementById("min").value;
    let sec = document.getElementById("sec").value;
    let msec = document.getElementById("msec").value;
    document.getElementById("records").style.visibility = "visible";
    let div = document.createElement("div");
    let content = document.createTextNode(hour + " : " + min + " : " + sec + " : " + msec);
    div.appendChild(content);
    document.getElementById("input").appendChild(div);
    document.getElementById("input").lastChild.scrollIntoView(true);
    document.getElementById("timer").lastChild.scrollIntoView(true);
};
function clear(){
    console.log("hello");
    document.getElementById("input").innerHTML = "";
    document.getElementById("records").style.visibility = "hidden";
};

document.getElementById("start").addEventListener('click', function(){
    start();
});
document.getElementById("stop").addEventListener('click', function(){
    stop();
});
document.getElementById("reset").addEventListener('click', function(){
    reset();
});
document.getElementById("set").addEventListener('click', function(){
    set();
});
document.getElementById("save").addEventListener('click', function(){
    save();
});
document.getElementById("countdown").addEventListener('click', function(){
    countdown();
});
document.getElementById("record").addEventListener('click', function(){
    record();
});
document.getElementById("clear").addEventListener('click', function(){
    clear();
});