console.log("Removed the garbage");
window.setInterval(function(){


  //names = [];
  //names += document.getElementById("inputBox").value
  //var x= document.getElementsByName("_4tdt _ua1")
  var x = document.getElementsByClassName("_4tdx");
var i;
for (i = 0; i < x.length; i++) {
//console.log(x.getElementsByClassName("_4tdx"))
//console.log(x[i]);
// theChildNodes = x.children;
// console.log(theChildNodes);
  //  if(x.childNodes[i].className == "_ua2"){
  //     names += x.childNodes[i]
  //    console.log("found")
  //    x[i].style.backgroundColor = "red";
  //  }
   //x[i].style.backgroundColor = "red";
   
   if(x[i]["textContent"] == "insert name here"){
     x[i].parentNode.remove();
   }
   

  //x[i].style.backgroundColor = "red";

  //console.log(x[i]["textContent"]);

}
  //console.log(names);

  console.log("Running")
}, 100);


// var doc = document.getElementById("test");
// var notes = null;
// for (var i = 0; i < doc.childNodes.length; i++) {
//     if (doc.childNodes[i].className == "4") {
//       notes = doc.childNodes[i];
//       break;
//     }        
// }

