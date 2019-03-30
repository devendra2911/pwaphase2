function submitData() {
  var career=document.querySelector("#Career").value;
  var name=document.querySelector("#name").value;
  var mobileno=document.querySelector("#mobileno").value;
  var email=document.querySelector("#email").value;
  var address=document.querySelector("#address").value;
  var ginstitute=document.querySelector("#institute").value;
  var gyop=document.querySelector("#yop").value;
  var gbranch=document.querySelector("#branch").value;

  var gcgpa=document.querySelector("#CGPA").value;
  var iinstitute=document.querySelector("#college").value;
  var iyop=document.querySelector("#yop").value;
  var ibranch=document.querySelector("#branch").value;
  var icgpa=document.querySelector("#percentage").value;
  var sinstitute=document.querySelector("#school").value;
  var syop=document.querySelector("#yop").value;
  var scgpa=document.querySelector("#CGPA").value;
  var skills=document.querySelector("#skills").value;

var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB ;
if(!idb in window){
  console.log("indexedDB is not supported");
}
// indexedDBCreation
  var open=idb.open("storeData",1);
  console.log("indexedDB is created");
open.onupgradeneeded=function(e){
  var request=e.target.result;
  request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
console.log("storeData is created");
}
open.onerror=function(error){
  console.log("error is occured");
}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store=transaction.objectStore("formdata");
  store.put({
    career:career,
    name:name,
    mobileno:mobileno,
    email:email,
    address:address,
    education:[
      {
        institute:ginstitute,
        branch:gbranch,
        cgpa:gcgpa,
        yop:gyop
      },
      {
        institute:iinstitute,
        branch:ibranch,
        cgpa:icgpa,
        yop:iyop
      },
      {
        institute:sinstitute,
        // branch:sbranch,
        cgpa:scgpa,
        yop:syop
      }
    ],
    skills:skills
  })
}
window.open("index.html");
}
