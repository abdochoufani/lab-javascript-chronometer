
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

        if(this.milliseconds <100) {
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
        debugger
        this.milliseconds=0;
        this.seconds=0;
        this.milliseconds=0;
        this.changeElements("milUni",0);
        this.changeElements("secUni",0);
        this.changeElements("minUni",0);
    }.bind(this),


    resume : function(){
        debugger
        if(!this.stop){
            this.stop=true;
            this.conuntingMilliseconds();
        } else {
            this.stopBtn();
        }
    },

    stopBtn : function() {
        debugger
        clearTimeout(this.start);
        this.stop=false;
    }





 }


 var chronometer = new Chronometer();
var btnLeft   = document.getElementById('btnLeft');
var btnRight  = document.getElementById('btnRight');




btnLeft.addEventListener("click",chronometer.resume)
btnRight.addEventListener("click",chronometer.reset);

 
