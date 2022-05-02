// write js code here corresponding to favourites.html

var favouriteData=JSON.parse(localStorage.getItem("favourites"))||[];


abcd(favouriteData)


function abcd(favouriteData){ 
  
    favouriteData.forEach(function(elem,index) {


  var tr=document.createElement("tr");


  var td1=document.createElement("td");
td1.innerText=elem.matchNumber



  var td2=document.createElement("td");
td2.innerText=elem.teamA

  var td3=document.createElement("td");
td3.innerText=elem.teamB

  var td4=document.createElement("td");
td4.innerText=elem.date


var td5=document.createElement("td");
td5.innerText=elem.venue

var td6=document.createElement("td");
td6.innerText="Delete"
td6.style.color="red"
td6.addEventListener("click",myfun(elem,index))


tr.append(td1,td2,td3,td4,td5,td6)


var tbd=document.getElementById("tbody")
tbd.append(tr)

});}


 function myfun(elem,index){
    favouriteData.splice(index,1).value

    abcd(favouriteData)
 }