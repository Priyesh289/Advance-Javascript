let myForm=document.querySelector("form");
let Task=document.getElementById("task");
let pri=document.getElementById("priority");
let tbody=document.querySelector("tbody");

let allData=[];

myForm.addEventListener("submit",function(e){
    e.preventDefault();
    let data={};
    data.task=Task.value;
    data.priority=pri.value;
    
    allData.push(data)
    
    allData.map((ele) => {
        let row=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        td1.innerText=ele.task;
        td2.innerText=ele.priority;

        row.append(td1,td2);
        tbody.append(row)
    })

})