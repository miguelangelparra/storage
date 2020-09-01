
//*************** */
//LOCALSTORAGE
//*************** */

document.getElementById("btnEnviarLocal").addEventListener("click",(e)=>enviarLocal(e))
let nombreLocal = document.getElementById("nombreLocal")
let displayNombreLocal= document.getElementById("displayNombreLocal")

function enviarLocal (e) {
  e.preventDefault();
  console.log("Ejecutando enviarLocal");
  console.log(nombreLocal.value)
  localStorage.setItem("nombreLocal", nombreLocal.value)
}

function getNombreLocal(){
    console.log("Ejecutando getNombreLocal")
    displayNombreLocal.innerText=  localStorage.getItem("nombreLocal")
}

function deleteNombreLocal(){
    localStorage.removeItem("nombreLocal")
}

//*************** */
// SESSIONSTORAGE
//*************** */
document.getElementById("btnEnviarSession").addEventListener("click",(e)=>enviarSession(e))
let nombreSession = document.getElementById("nombreSession")
let displayNombreSession= document.getElementById("displayNombreSession")

function enviarSession (e) {
  e.preventDefault();
  console.log("Ejecuntando EnviarSession");
  console.log(nombreSession.value)
  sessionStorage.setItem("nombreSession", nombreSession.value)
}

function getNombreSession(){
    console.log("Ejecutando getNombreSession")
    displayNombreSession.innerText=  sessionStorage.getItem("nombreSession")
}

function deleteNombreSession(){
    sessionStorage.removeItem("nombreSession")
}






