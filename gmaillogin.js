function checkgmail(){
    let gmail=document.getElementById("inputbox").value;
    
   if(gmail.endsWith("@gmail.com")){
    
     document.getElementById("error").style.visibility="collapse"; 
     document.getElementById("inputbox").style.outline="none";
     document.getElementById("errormsg").style.visibility="collapse";
     document.getElementById("succmsg").style.visibility="visible";
    
   } 
   else{
     document.getElementById("error").style.visibility="visible"; 
     document.getElementById("inputbox").style.outline="solid red";
     document.getElementById("errormsg").style.visibility="visible";
     document.getElementById("succmsg").style.visibility="collapse";
   }


}
inputbox=document.getElementById("inputbox");
inputbox.addEventListener("keypress",function(e){
  if(e.keyCode==13){
    checkgmail();

  }
},false);