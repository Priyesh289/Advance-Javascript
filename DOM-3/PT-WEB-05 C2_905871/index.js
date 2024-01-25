// fill in javascript code here
let myForm=document.querySelector("form");
let Dname=document.getElementById("name");
let DocId=document.getElementById("docID");
let depart=document.getElementById("dept");
let exeperience=document.getElementById("exp");
let Email=document.getElementById("email");
let phn=document.getElementById("mbl")
let tbody=document.querySelector("tbody");

let allData=[];

myForm.addEventListener("submit",function(e){
    e.preventDefault();
    let data={};
    data.name=Dname.value;
    data.DoId=DocId.value;
    data.department=depart.value;
    data.experience=exeperience.value;
    data.email=Email.value;
    data.phn=phn.value;

    tbody.innerText=null;

    if(data.experience>5){
        data.Role="Senior"
    }else if(data.experience>=2){
        data.Role="Junior"
    }else if(data.experience<=1){
        data.Role="Fresher"
    }

    allData.push(data);

    allData.map((ele) =>{
        let row=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        let td6=document.createElement("td");
        let td7=document.createElement("td");
        td1.innerText=ele.name;
        td2.innerText=ele.DoId;
        td3.innerText=ele.department;
        td4.innerText=ele.exeperience;
        td5.innerText=ele.email;
        td6.innerText=ele.phn;
        td7.innerText=ele.Role
        
        row.append(td1,td2,td3,td4,td5,td6,td7)
        tbody.append(row);

    })
})

