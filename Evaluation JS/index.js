let container= document.getElementById("container");
let tbody = document.querySelector("tbody")

fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
.then(function(res){
    return res.json();
})
.then(function(res){
    displayData(res)
})

function displayData(data){
   data.forEach(function(product){
    // create a row 
    let newRow = document.createElement("tr");
    newRow.className= "body-row";

    let tData = document.createElement("th");
    
 
   })
}