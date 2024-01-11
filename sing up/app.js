document.querySelector("#form-data").addEventListener('submit', (event) => {
  event.preventDefault()
  let flag=true;
  let massegeerrror="";
 const{userName,email,pass,passr,check}=event.target.elements;
if(userName.value===""){
flag=false; 
massegeerrror="please fill the field"
}
else if(email.value===""){
  flag=false; 
  massegeerrror="please fill the field"
}
else if(pass.value===""){
  flag=false; 
  massegeerrror="please fill the field"
}
else if(passr.value===""){
  flag=false; 
  massegeerrror="please fill the field"
}
else if(passr.value.length<=8){
  flag=false; 
  massegeerrror="Your password must be more than 8 characters"
}
else if(pass.value!=passr.value){
  flag=false; 
  massegeerrror="The password entered is not the same as the duplicate"
}
else if(check.value!=true){
  flag=false; 
  massegeerrror="You must accept privacy"
}
if(flag==false){
  Toastify({
      text:massegeerrror,
      className: "info",
      gravity: "top",
      position: "center",
      duration: 2000,
      style: {
        background: "linear-gradient(to right, ##8f1919, #96c93d)",
  
      }
    }).showToast();
}
console.log(flag);
})

function show(){
  
  document.getElementById("pass").type="text"
  
  document.getElementById("hide").style.display="none";
  document.getElementById("show").style.display="inline";
}
function hide(){
  

  document.getElementById("pass").type="password";
  document.getElementById("hide").style.display="inline";
  document.getElementById("show").style.display="none";
}
function show2(){
  
  document.getElementById("passr").type="text"
  
  document.getElementById("hide2").style.display="none";
  document.getElementById("show2").style.display="inline";
}
function hide2(){
  

  document.getElementById("passr").type="password";
  document.getElementById("hide2").style.display="inline";
  document.getElementById("show2").style.display="none";
}