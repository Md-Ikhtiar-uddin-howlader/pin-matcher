document.getElementById("generatePin").addEventListener("click",function pinGenerate(){

    let pin = Math.random() * 10000;

    pin = Math.round(pin); 

    if(pin>=1000 && pin<= 9999){

        document.getElementById("pinShow").value = pin;
    }
    else{
        pinGenerate();
    }
})
 typePin("one");
 typePin("two");
 typePin("three");
 typePin("four");
 typePin("five");
 typePin("six");
 typePin("seven");
 typePin("eight");
 typePin("nine");
 typePin("zero");


function typePin(id){

    document.getElementById(id).addEventListener("click",function(){

        let value = document.getElementById(id).innerText;
           value = parseInt(value);
        

        let previousValue = document.getElementById("writePin").value;

      let finalPin = document.getElementById("writePin").value = previousValue + value;
      })

}

document.getElementById("submit").addEventListener("click",function(){

    let givenPin = document.getElementById("pinShow").value;
         givenPin = parseInt(givenPin);

    let writenPin = document.getElementById("writePin").value;
        writenPin = parseInt(writenPin);

        if(givenPin === writenPin){

            document.getElementById("successful").style.display = "block";

            document.getElementById("unsuccessful").style.display = "none";

        }
        else{
            document.getElementById("unsuccessful").style.display = "block";

            document.getElementById("successful").style.display = "none";

            let remainingTry = document.getElementById("try").innerText;
            remainingTry = parseInt(remainingTry);
            remainingTry = document.getElementById("try").innerText = remainingTry - 1;

            if(remainingTry == 0){
                alert("This s your last chance.")
            }
            else if(remainingTry<0){
                document.getElementById("finishTry").innerText = "please try later";
            }
        }

})

document.getElementById("slice").addEventListener("click",function(){

   let writenPin = document.getElementById("writePin").value;

   let modifiedPin =   writenPin.slice(0,-1);

   document.getElementById("writePin").value = modifiedPin;

})

document.getElementById("clear").addEventListener("click",function(){

    document.getElementById("writePin").value = "";

})