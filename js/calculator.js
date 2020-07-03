var budget=0;

document.getElementById("submit-calculator").addEventListener("click", function(event){
 event.preventDefault();
 
 
 var weightUnit=document.getElementById('weight-unit').value;
 var weight=document.getElementById('weight').value;
 var parkingCalc=document.getElementById('parking-calculator').value;
 var lightingCalc=document.getElementById('lighting-calculator').value;

 
 
 document.getElementById('span').innerHTML=`parking ${perTime0}`;

 switch(weightUnit) {
   case "kgs":
     weight=weight/1000;
     break;
  
     case "lbs":
     weight=weight/2204.62
     break;

     default: weight=weight
                 // code block
 }

 var currency1;

 switch(currency0) {
   case "Fee in EUR":
     currency1="EUR";
     break;
        
     default: currency1="USD";
                 // code block
 }
 

 budget=(weight*250) +  landingCalc0 + parkingcalc0 *parkingCalc + lightingCalc0*lightingCalc + approachcalc0

})

