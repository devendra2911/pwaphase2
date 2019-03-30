var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para =query[i].split("=");
  paravalue=parseInt(para[1]);
}



var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;
if(!idb in window){
  console.log("indexedDB is not supported");
}
// indexedDBCreation
var request;
var store;
  var open=idb.open("storeData",1);
  console.log("indexedDB is created");
open.onupgradeneeded=function(e){
   request=e.target.result;
  store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("storeData is created");
}
open.onerror=function(error){
  console.log("error is occured");
}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  var info=store.get(paravalue);
  info.onsuccess=function(data){
   console.log(data);
   personalinfo(data.target.result);

  }
}
var left =document.querySelector(".left");
var right =document.querySelector(".right");
function personalinfo(pi) {
var image=document.createElement("img");
image.src="image/profile.jpg";
console.log(pi.name);
image.alt=pi.name;
left.append(image);

var hh=document.createElement("h2");
hh.textContent=pi.name;
left.append(hh);

var mn=document.createElement("h3");
 mn.textContent=pi.mobileno;
 left.append(mn);

 var em=document.createElement("h2");
 em.textContent=pi.email;
 left.append(em);

 var add=document.createElement("h3");
 add.textContent=pi.address;
 left.append(add);


  var inst=document.createElement("h3");
  inst.textContent="Education Details :";
  right.append(inst);


  var table=document.createElement("table");
  table.border="1";
  var tr1="<tr><th>institute</th><th>branch</th><th>CGPA</th><th>Year</th></tr>";
  var tr2="";
  for(var i in pi.education){
    tr2=tr2+"<tr><td>"+pi.education[i].institute+"</td><td>"+pi.education[i].branch+"</td><td>"+pi.education[i].cgpa+"</td><td>"+pi.education[i].yop+"</td></tr>";

  }
table.innerHTML=tr1+tr2;
right.append(table);


var h12=document.createElement("h2");
h12.textContent="career Objective";
right.append(h12);

var hr12=document.createElement("hr");
right.append(hr12);
var info1=document.createElement("h5");
info1.textContent=pi.career;
right.append(info1);




var h1=document.createElement("h2");
h1.textContent="skills";
right.append(h1);

var hr1=document.createElement("hr");
right.append(hr1);
var info=document.createElement("h5");
info.textContent=pi.skills;
right.append(info);
}
