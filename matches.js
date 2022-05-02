// write js code here corresponding to matches.html
var Matchdata=JSON.parse(localStorage.getItem("schedule"))



display(Matchdata);



function display(Matchdata){   


   
Matchdata.forEach(function(elem) {
   

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
td6.innerText="Add as Favourites"
td6.style.color="green"
td6.addEventListener("click",myfun(elem))


tr.append(td1,td2,td3,td4,td5,td6)


var tbd=document.getElementById("tbody")
tbd.append(tr)

});
}




function myfun(elem){var favArr=[]||JSON.parse(localStorage.getItem("favourites"));
favArr.push(elem)
    localStorage.setItem("favourites",JSON.stringify(favArr))

}




document.getElementById("filterVenue").addEventListener("change",function(){
var filterVenue=document.querySelector("#filterVenue").value


var filter=Matchdata.filter(function(elem){
    return elem.venue===filterVenue

   
});
display(filter);

});