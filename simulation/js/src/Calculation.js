
var wghtofload, inclinationAngle, Force, speed, airpressure, FS, psi, requiredDiameter, exacrD;
var cnt = 0;
function calculateForce(){

  wghtofload = $("#load").val();
  inclinationAngle = $("#angleofinclination option:selected").val(); 
  
  if(wghtofload == "" || inclinationAngle == ""){
  alertify.alert("Please Enter Weight of Load and Angle of Inclination") 
  }else{
  Force = wghtofload * inclinationAngle;
  
  $("#calforce").val(Force.toFixed(1));
  
 // $("#CalculateFS").prop("disabled", false);  
  $("#speed").prop("disabled", false); 
  }
}

function calculateFS(){

  speed = $("#speed option:selected").val();
  if(speed == ""){
  alertify.alert("Please Enter Value of Speed") 
  }else{
  FS = Force * speed;
  
  $("#calfs").val(FS.toFixed(1));
  
  $("#CalculateCylinderArea").prop("disabled", false);  
  $("#airpressure").prop("disabled", false);}
  
}

function calculateCylinderArea(){

  airpressure = $("#airpressure").val();
  if(airpressure == ""){
  alertify.alert("Please Enter value of air Pressure");
  }else if(airpressure == 0){  
  alertify.alert("Value of Air Pressure is Greater than 0");  
  }else{
  psi = FS / airpressure;
  $("#calcylinderarea").val(psi.toFixed(1)); 
  $("#cylinderDiameter").prop("disabled", false);
  $("#submitdiameter").prop("disabled", false);
  }
  }
  



function submitDiameter(){

exactDiameter();

requiredDiameter = $("#cylinderDiameter").val();

if(requiredDiameter == exacrD){

        $("#submitdiameter").html("<span class='label'>Correct</span>");
				//setTimeout(onclickevent(), 2000);		

}else{
cnt++;
             if(cnt==3)
				{
					alertify.alert("Please verify your answer");
					alertify.alert("Correct Answer is "+ exacrD);
					cnt=0;
					$("#submitdiameter").html("<span class='label'>Submit</span>");
					$("#submitdiameter").html("<span class='label'>Correct</span>");
					//setTimeout(onclickevent(), 2000);
				}
			
			$("#submitdiameter").html("<span class='label'>Re-Calculate</span>");
			
			
				
				
}

}


function exactDiameter(){

if(psi <= 0.07){
exacrD = 0.3125;
}else if(psi <= 0.15){
exacrD = 0.4375;
}else if(psi <= 0.25){
exacrD = 0.5625;
}else if(psi <= 0.40){
exacrD =  0.75;
}else if(psi <= 0.60){
exacrD = 0.875;
}else if(psi <= 0.90){
exacrD = 1.0625;
}else if(psi <= 1.2){
exacrD = 1.25;
}else if( psi <= 1.7){
exacrD = 1.5;
}else if(psi <= 2.4){
exacrD = 1.75;
}else if( psi <= 3.1){
exacrD = 2;
}else if( psi <= 5){
exacrD = 2.5;
}else if(psi <= 7){
exacrD = 3;
}else if( psi <= 8.3){
exacrD = 3.25;
}else if( psi <= 12.5){
exacrD = 4;
}else if(psi <= 28.3){
exacrD = 6;
}else if(psi > 28.3){
exacrD = 6;
}
}
  
  
