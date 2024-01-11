document.querySelector("#form-data").addEventListener('submit', (event) => {
  event.preventDefault()
  let flag=true;
  let massegeerrror="";
 const{userName,pass}=event.target.elements;
if(userName.value===""){
flag=false; 
massegeerrror="please fill the field"
}
else if(pass.value===""){
  flag=false; 
  massegeerrror="please fill the field"
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

   