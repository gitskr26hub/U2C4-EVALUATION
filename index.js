// write js code here corresponding to index.html
// You should add submit event on the form
var form=document.getElementById("masaiForm")


var Matchdata=[] || JSON.parse(localStorage.getItem("schedule"));

form.addEventListener("submit",function(){
  event.preventDefault()
  var obj={
matchNumber:document.getElementById("matchNum").value,
teamA:document.getElementById("teamA").value,
teamB:document.getElementById("teamB").value,
venue:document.getElementById("venue").value,
date:document.getElementById("date").value,
}

Matchdata.push(obj)
localStorage.setItem("schedule",JSON.stringify(Matchdata))
})
