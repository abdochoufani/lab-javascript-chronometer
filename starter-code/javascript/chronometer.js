
// Constructor
 function Chronometer() {
     this.seconds=0;
     this.minutes=0;
     this.milliseconds=0;
     this.start=undefined;
     this.stop=false;
     
 }
 
 Chronometer.prototype = {

    changeElements : function(elementTocChange , value) {
        value = value <10 ? "0" + value : value;
        document.getElementById(elementTocChange).innerHTML=value;
    },
    conuntingMilliseconds : function(){
        var that=this;
        this.start=setTimeout(function(){
            that.conuntingMilliseconds()
        },1);

        if(this.milliseconds <900) {
            this.milliseconds +=1;
        } else {
            this.milliseconds=0;
            if(this.seconds <60) {
                this.seconds += 1;
                this.changeElements("secUni",this.seconds);
            } else {
                this.seconds =0;
                this.minutes +=1;
                this.changeElements("minUni", this.minutes);
            }
        }
        this.changeElements("milUni", this.milliseconds);
    },
    reset : function() {
        if(!chronometer.stop){
        chronometer.milliseconds=0;
        chronometer.seconds=0;
        chronometer.milliseconds=0;
        chronometer.changeElements("milUni",0);
        chronometer.changeElements("secUni",0);
        chronometer.changeElements("minUni",0);
        } else {
            chronometer.split();
        }
    },
    resume : function(){
        if(!chronometer.stop){
            chronometer.stop=true;
            chronometer.conuntingMilliseconds();
        } else {
            chronometer.stopBtn();
        }
        chronometer.changeIconsForStart();
    },
    stopBtn : function() {
        clearTimeout(this.start);
        this.stop=false;
    },

    changeIconsForStart: function() {
        if(this.stop) {
            btnLeft.classList.remove("start");
            btnLeft.classList.add("stop");
            btnLeft.innerHTML="STOP";
            btnRight.classList.remove("reset");
            btnRight.classList.add("split");
            btnRight.innerHTML="SPLIT";
        } else {
            btnLeft.classList.remove("stop");
            btnLeft.classList.add("start");
            btnLeft.innerHTML="START";
            btnRight.classList.remove("split");
            btnRight.classList.add("reset");
            btnRight.innerHTML="RESET";          
        }
    },
    split : function() {
        var splitTime=[],
             splitList=document.getElementById("splits"),
            listItem=document.createElement("li");
        splitTime.push([chronometer.milliseconds,chronometer.seconds,chronometer.minutes]);
        listItem.innerHTML=`${splitTime[0][2]} : ${splitTime[0][1]} : ${splitTime[0][0]} `;
        splitList.append(listItem);
        splitTime=[];
    }
 }

var chronometer = new Chronometer();
var btnLeft   = document.getElementById('btnLeft');
var btnRight  = document.getElementById('btnRight');
btnLeft.addEventListener("click",chronometer.resume)
btnRight.addEventListener("click",chronometer.reset);

 
