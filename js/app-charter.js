var flightType
	var station 
	var currency
	var fuelStop
	var mtowUnit
  var mtow

  document.getElementById("result").style.display ="none";
   

  function back(){
    document.getElementById("back-charter").style.display ="";
    document.getElementById("booking").style.display ="";
    document.getElementById("exit1").style.display ="none";
    document.getElementById("margin-top-table").style.display ="none";
    document.getElementById("print").style.display ="none";
    document.getElementById("exit1").style.display ="none";
    document.getElementById("submit2").style.display ="none";
    document.getElementById("table").style.display ="none";

  }




  function printR(){
    //document.getElementById("table").style.border = " solid green";
    //document.getElementById("table-result").style.border = " solid green";
        
    document.getElementById("result").style.display ="";
    document.getElementById("reset").style.display ="none";
    document.getElementById("print-display").style.display ="none";
    document.getElementById("quote-display").style.display ="none";
    document.getElementById("booking2").style.display ="none";
    document.getElementById("h1-result-budget").style.display ="";
    
    
    window.print();
    document.getElementById("result").style.display ="";
    document.getElementById("reset").style.display ="";
    document.getElementById("print-display").style.display ="";
    document.getElementById("quote-display").style.display ="";
    document.getElementById("booking2").style.display ="";


    }
    

  function recalculate() {

    document.getElementById("table").style.display ="none";
    document.getElementById("result").style.display ="none";
    document.getElementById("table-result").style.display ="none";
    document.getElementById("reset").style.display ="none";
    document.getElementById("print-display").style.display ="none";
  
    /* vider les champs 
    document.getElementById("paxDest").value ="";
    document.getElementById("paxNbr").value ="";
    document.getElementById("parking-calculator").value ="";
    document.getElementById("lighting-calculator").value ="";
    */

  }
  
  function showQuote(){
    document.getElementById("table").style.display ="";
    document.getElementById("table-result").style.display ="";
    
  }
    
 function printQ(){
  document.getElementById("margin-top-table").style.display ="";
  document.getElementById("print").style.display ="none";
  document.getElementById("exit1").style.display ="none";
  document.getElementById("submit2").style.display ="none";
  window.print()
  document.getElementById("print").style.display ="";
  document.getElementById("submit2").style.display ="";
  document.getElementById("exit1").style.display ="";

  document.getElementById("margin-top-table").style.display ="none";
  }
  
  document.getElementById("print").style.display ="none";



 document.getElementById("submit").addEventListener("click", function(event){

  document.getElementById("back-charter").style.display ="none";

  document.getElementById("table").style.border = " solid #00004C";

  
  if (document.getElementById("station1").value==""){ return alert("Select AIRPORT");}
  if ( document.getElementById("mtow-unit").value==""){ return  alert("Select MTOW Unit")}
  if ( document.getElementById("mtow1").value=="" || document.getElementById("mtow1").value==0){ return alert("Put the MTOW (  > 0 ) ")}
  if ( document.getElementById("currency").value==""){ return alert("Select choosen currency for the Quote")}
 // if (document.getElementById("mtow1").value==0){ return alert("Select a MTOW greater tahn 0");}
  // document.getElementById("table").style.display ="none";
  // document.getElementById("table-result").style.display ="none";
  document.getElementById("result").style.display ="none";

  document.getElementById("print").style.display ="";
       event.preventDefault();
     
       mtowUnit=document.getElementById('mtow-unit').value;
       
       mtow=document.getElementById("mtow1").value;
      
       var Mtow= mtow;

       switch(mtowUnit) {
        case "Kgs":
          mtow=mtow/1000;
          break;
       
          case "Lbs":
          mtow=mtow/2204.62
          break;

          default: mtow=mtow
                      // code block
      }
     
          // Jetway check price

         if(mtow>0.5 && mtow<=20){jetwayPrice=147}
         if(mtow>20 && mtow<=60){jetwayPrice=420}
         if(mtow>60 && mtow<=180){jetwayPrice=806}
         if(mtow>180 && mtow<=300){jetwayPrice=1385}
         else if(mtow>300){jetwayPrice=2052}

                      // code block
     
     
      //console.log(jetway)
          //jetway --end
      station=document.getElementById("station1").value
      document.getElementById('table').style.display =""
      document.getElementById('submit2').style.display =""
      document.getElementById('exit1').style.display =""
      document.getElementById('booking').style.display ="none"
      document.getElementById('booking2').style.display ="none"
    

     
      document.getElementById("submit2").addEventListener("click", function(event){

        document.getElementById("week-end").style.display ="none"; 
        document.getElementById("overnight").style.display ="none";
        document.getElementById("extra").style.display ="none";

        document.getElementById("print").style.display ="none";
        event.preventDefault();
          

        document.getElementById("exit1").style.display ="none"
        document.getElementById("submit2").style.display ="none"

        document.getElementById('booking2').style.display =""
        document.getElementById('table').style.display ="none"
        
        document.getElementById('h1-result-budget').style.display ="none"
        document.getElementById('result').style.display ="none"

        var currency0=document.getElementById('table').rows[0].cells[2].innerHTML;    
        var landingCalc0=document.getElementById('table').rows[1].cells[2].innerHTML;
        var parkingcalc0=document.getElementById('table').rows[2].cells[2].innerHTML;
        var approachcalc0=document.getElementById('table').rows[3].cells[2].innerHTML;
        var lightingCalc0=document.getElementById('table').rows[4].cells[2].innerHTML;

        var perTime0=document.getElementById('table').rows[2].cells[1].innerHTML; 

        var paxEuCalc0=document.getElementById('table').rows[5].cells[2].innerHTML; 
        var paxUsCalc0=document.getElementById('table').rows[6].cells[2].innerHTML; 
        var securtaxCalc0=document.getElementById('table').rows[7].cells[2].innerHTML; 

       // document.getElementById('table').rows[2].cells[0].innerHTML= parkingFree
        
        landingCalc0= parseFloat(landingCalc0)
        parkingcalc0=parseFloat(parkingcalc0)
        approachcalc0=parseFloat(approachcalc0)
        lightingCalc0=parseFloat(lightingCalc0)
        paxEuCalc0= parseFloat(paxEuCalc0); 
        paxUsCalc0=parseFloat(paxUsCalc0); 
        securtaxCalc0=parseFloat(securtaxCalc0);
      
       
      //alert(perTime0)

      switch(perTime0) {
        case "per Hour":
          perTime0=" Hours of Parking";
          parkingFree="Parking (The 1st hour is free)";
          break;
       
          case "per Day":
            perTime0=" Days of Parking";
            parkingFree="Parking (The 1st day is free)"
          break;
     
      }

   

      document.getElementById('span').innerHTML=perTime0;
        var budget=0;

        document.getElementById("submit-calculator").addEventListener("click", function(event){

          document.getElementById("table").style.border = " solid green";
          document.getElementById("table-result").style.border = " solid green";

          if (document.getElementById("paxDest").value==""){ return alert("Select the PAX Destination")}
          if ( document.getElementById("paxNbr").value==""){ return alert("Introduce Number of PAX")}
          if ( document.getElementById("parking-calculator").value==""){ return alert("Introduce the parking duration")}
          if ( document.getElementById("lighting-calculator").value==""){ return alert("Select how much time the lighting is used")}
          if ( document.getElementById("jetway").value==""){ return alert("Select how much time the Jetway is used ?")}
        
         
          document.getElementById("table").style.display ="";

          document.getElementById('reset').style.display =""
          document.getElementById('quote-display').style.display =""
          document.getElementById('print-display').style.display =""
          //document.getElementById("table").style.display ="";
          document.getElementById("table-result").style.display ="";
          event.preventDefault();

       
         
     
         
         
         var paxDest=document.getElementById('paxDest').value;
         var paxNbr=document.getElementById('paxNbr').value;
         var parkingCalc=document.getElementById('parking-calculator').value;
         var lightingCalc=document.getElementById('lighting-calculator').value;
         var jetwayNbr=document.getElementById('jetway').value;
         
        var pax
         switch(paxDest) {
           case "Europe & Africa":
             if(station=="GMMN"){pax=182} else{pax=93};
             break;
          
             case "America & M.East":
              if(station=="GMMN"){pax=242} else{pax=137};
             break;
        
         }
        
         var cute= document.getElementById('table').rows[8].cells[2].innerHTML; 
         var taspt=document.getElementById('table').rows[9].cells[2].innerHTML; 

         cute=parseFloat(cute);
         taspt=parseFloat(taspt)

         var currency1;
        
         switch(currency0) {
           case "Fee in EUR":
             currency1="EUR";
             break;
                
             default: currency1="USD";
                         // code block
         }
         
         //alert(jetwayNbr*jetwayPrice)
         budget=(paxNbr*(pax+cute+taspt)) +  landingCalc0 + parkingcalc0 *(parkingCalc-1) + lightingCalc0*lightingCalc + approachcalc0+jetwayPrice*jetwayNbr
         //alert(budget)
         budget=budget.toFixed(2);
         document.getElementById('result').style.display =""
     
         document.getElementById('h1-result-budget').innerHTML=`<h2>The Airport Tax budget is :<b> ${budget} ${currency1}</b></h2>`;
         document.getElementById('h1-result-budget').style.display =""
        ///////////// end Modal
      
        document.getElementById('table-result').rows[1].cells[3].innerHTML=`${lightingCalc} times`; 
        document.getElementById('table-result').rows[1].cells[2].innerHTML=`${parkingCalc} ${perTime0}`; 
        document.getElementById('table-result').rows[1].cells[0].innerHTML=`${paxDest}`; 
        document.getElementById('table-result').rows[1].cells[1].innerHTML=`${paxNbr}`; 
        document.getElementById('table-result').rows[1].cells[4].innerHTML=`${jetwayNbr} times`; 
       
              
      })
        


      















          
       })
   
     



	
	  fetch("http://localhost:9000/quote", {
		method: 'POST',
		headers: {
		Accept: "application/json",
		},
		body: JSON.stringify({"M":mtow,"station":station})
		})
		.then(res=> res.json())
		.then(res => {res.data;
    
		console.log(res)
        var currency=document.getElementById('currency').value;
        
        
        var x=parseFloat(res.sellPriceEur.replace(',','.'))
        

        var y=parseFloat(res.sellPriceUsd.replace(',','.'))

        var z
       
        if(currency=="EUR"){z= "(01 "+currency+" = "+x+" MAD)"; jetwayPrice=jetwayPrice/x }
        if(currency=="USD"){z= "(01 "+currency+" = "+y+" MAD)"; jetwayPrice=jetwayPrice/y }
        else if(currency=="MAD"){z= "" }
       
       document.getElementById('quotation').innerHTML= "Quotation for aircraft with MTOW "+Mtow+" "+mtowUnit+" operating at "+res.Station+" airport "+z 
       // document.getElementById('quotation').innerHTML= `Quotation for aircraft with MTOW ${Mtow} ${mtowUnit} operating at ${res.Station} Qutation wordered in ${curency} currency`
    
    



       document.getElementById('table').rows[10].cells[2].innerHTML=jetwayPrice.toFixed(2);

    if ( res.Station==="GMMN"){

      var securTax = 48;


      
      console.log(res.Station)
        switch(currency){
          case "MAD" :
       
              document.getElementById('table').rows[0].cells[2].innerHTML=`Fee in ${currency}`;    
              document.getElementById('table').rows[1].cells[2].innerHTML=res.Landing.toFixed(2);
              document.getElementById('table').rows[2].cells[2].innerHTML=res.Parking.toFixed(2);
              document.getElementById('table').rows[3].cells[2].innerHTML=res.Approach.toFixed(2);
              document.getElementById('table').rows[4].cells[2].innerHTML=res.Lighting.toFixed(2);
              document.getElementById('table').rows[2].cells[1].innerHTML= "per Hour";
              document.getElementById('table').rows[5].cells[2].innerHTML= res.paxeu-48;
              document.getElementById('table').rows[6].cells[2].innerHTML= res.paxus-48;
              document.getElementById('table').rows[7].cells[2].innerHTML= securTax;
              document.getElementById('table').rows[2].cells[0].innerHTML= "Parking (Franchise duration fixed at 1 hour)";
              document.getElementById('table').rows[8].cells[2].innerHTML= (0.85*x).toFixed(2);
              document.getElementById('table').rows[9].cells[2].innerHTML= 100.00;
          break;

          case "EUR" : 
            document.getElementById('table').rows[0].cells[2].innerHTML=`Fee in ${currency}`;    
            document.getElementById('table').rows[1].cells[2].innerHTML=(res.Landing/x).toFixed(2);
            document.getElementById('table').rows[2].cells[2].innerHTML=(res.Parking/x).toFixed(2);
            document.getElementById('table').rows[3].cells[2].innerHTML=(res.Approach/x).toFixed(2);
            document.getElementById('table').rows[4].cells[2].innerHTML=(res.Lighting/x).toFixed(2);
            document.getElementById('table').rows[2].cells[1].innerHTML= "per Hour";
            document.getElementById('table').rows[5].cells[2].innerHTML= ((res.paxeu-48)/x).toFixed(2);
            document.getElementById('table').rows[6].cells[2].innerHTML= (res.paxus-48/x).toFixed(2);
            document.getElementById('table').rows[7].cells[2].innerHTML= (securTax/x).toFixed(2);
            document.getElementById('table').rows[2].cells[0].innerHTML= "Parking (Franchise duration fixed at 1 hour)";
            document.getElementById('table').rows[8].cells[0].innerHTML=0.85
            document.getElementById('table').rows[9].cells[2].innerHTML= (100/x).toFixed(2);
            
            break;

            case "USD" : 
            document.getElementById('table').rows[0].cells[2].innerHTML=`Fee in ${currency}`;    
            document.getElementById('table').rows[1].cells[2].innerHTML=(res.Landing/y).toFixed(2);
            document.getElementById('table').rows[2].cells[2].innerHTML=(res.Parking/y).toFixed(2);
            document.getElementById('table').rows[3].cells[2].innerHTML=(res.Approach/y).toFixed(2);
            document.getElementById('table').rows[4].cells[2].innerHTML=(res.Lighting/y).toFixed(2);
            document.getElementById('table').rows[2].cells[1].innerHTML= "per Hour"; 
            document.getElementById('table').rows[5].cells[2].innerHTML= ((res.paxeu-48)/y).toFixed(2);
            document.getElementById('table').rows[6].cells[2].innerHTML= ((res.paxus-48)/y).toFixed(2);
            document.getElementById('table').rows[7].cells[2].innerHTML=  (securTax/y).toFixed(2);
            document.getElementById('table').rows[2].cells[0].innerHTML= "Parking (Franchise duration fixed at 1 hour)";
            document.getElementById('table').rows[8].cells[2].innerHTML=(0.85*x/y).toFixed(2);
            document.getElementById('table').rows[9].cells[2].innerHTML= (100/y).toFixed(2);
            break;

       }

      } else {
         
        var securTax = 30;
        switch(currency){
          case "MAD" :
       
              document.getElementById('table').rows[0].cells[2].innerHTML=`Fee in ${currency}`;    
              document.getElementById('table').rows[1].cells[2].innerHTML=res.Landing.toFixed(2);
              document.getElementById('table').rows[2].cells[2].innerHTML=res.Parking.toFixed(2);
              document.getElementById('table').rows[3].cells[2].innerHTML=res.Approach.toFixed(2);
              document.getElementById('table').rows[4].cells[2].innerHTML=res.Lighting.toFixed(2);
              document.getElementById('table').rows[2].cells[1].innerHTML= "per Day";
              document.getElementById('table').rows[5].cells[2].innerHTML= res.paxeu-30;
              document.getElementById('table').rows[6].cells[2].innerHTML= res.paxus-30;
              document.getElementById('table').rows[7].cells[2].innerHTML= securTax;
              document.getElementById('table').rows[2].cells[0].innerHTML= "Parking (First three hours are free)";
              document.getElementById('table').rows[8].cells[2].innerHTML=(0.85*x).toFixed(2);
              document.getElementById('table').rows[9].cells[2].innerHTML= 100.00;
          break;

          case "EUR" : 
            document.getElementById('table').rows[0].cells[2].innerHTML=`Fee in ${currency}`;    
            document.getElementById('table').rows[1].cells[2].innerHTML=(res.Landing/x).toFixed(2);
            document.getElementById('table').rows[2].cells[2].innerHTML=(res.Parking/x).toFixed(2);
            document.getElementById('table').rows[3].cells[2].innerHTML=(res.Approach/x).toFixed(2);
            document.getElementById('table').rows[4].cells[2].innerHTML=(res.Lighting/x).toFixed(2);
            document.getElementById('table').rows[2].cells[1].innerHTML= "per Day";
            document.getElementById('table').rows[5].cells[2].innerHTML= ((res.paxeu-30)/x).toFixed(2);
            document.getElementById('table').rows[6].cells[2].innerHTML= ((res.paxus-30)/x).toFixed(2);
            document.getElementById('table').rows[7].cells[2].innerHTML=  (securTax/x).toFixed(2);
            document.getElementById('table').rows[2].cells[0].innerHTML= "Parking (First three hours are free)";
            document.getElementById('table').rows[8].cells[2].innerHTML=0.85;
            document.getElementById('table').rows[9].cells[2].innerHTML= (100/x).toFixed(2);
            break;

            case "USD" : 
            document.getElementById('table').rows[0].cells[2].innerHTML=`Fee in ${currency}`;    
            document.getElementById('table').rows[1].cells[2].innerHTML=(res.Landing/y).toFixed(2);
            document.getElementById('table').rows[2].cells[2].innerHTML=(res.Parking/y).toFixed(2);
            document.getElementById('table').rows[3].cells[2].innerHTML=(res.Approach/y).toFixed(2);
            document.getElementById('table').rows[4].cells[2].innerHTML=(res.Lighting/y).toFixed(2);
            document.getElementById('table').rows[2].cells[1].innerHTML= "per Day"; 
            document.getElementById('table').rows[5].cells[2].innerHTML= ((res.paxeu-30)/y).toFixed(2);
            document.getElementById('table').rows[6].cells[2].innerHTML= ((res.paxus-30)/y).toFixed(2);
            document.getElementById('table').rows[7].cells[2].innerHTML=  (securTax/y).toFixed(2);
            document.getElementById('table').rows[2].cells[0].innerHTML= "Parking (First three hours are free)";
            document.getElementById('table').rows[8].cells[2].innerHTML=(0.85*x/y).toFixed(2);
            document.getElementById('table').rows[9].cells[2].innerHTML= (100/y).toFixed(2);
            break;

       }


      }/// end if station = gmmn
       
     
     
     
      
		})
		.catch(err=>console.log(err));	
      

		
    
    })//// hadi hiya la parenthese que apres lamma;
    

  
