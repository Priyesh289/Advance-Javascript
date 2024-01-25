/* <--This is complete--> */
let myForm=document.querySelector("form");
let nam=document.querySelector("#name");
let eId=document.querySelector("#employeeID");
let depart=document.querySelector("#department");
let exp=document.querySelector("#exp");
let email=document.querySelector("#email");
let mbl=document.querySelector("#mbl")
let tbody=document.querySelector("tbody")

let allData=[];

myForm.addEventListener("submit",function(e){
    e.preventDefault();
    let data={};
    data.name= nam.value;
    data.employeeId=eId.value;
    data.department=depart.value;
    data.experience=exp.value;
    data.Email=email.value;
    data.mobile=mbl.value;

    if(data.experience>5){
        data.Role="Senior"
    }else if(data.experience>=2){
        data.Role="Junior"
    }else if(data.experience<=1){
        data.Role="Fresher"
    }

    console.log(data)

    tbody.innerText=null

    allData.push(data)
    
    allData.map((ele) => {
        let row=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        let td6=document.createElement("td");
        let td7=document.createElement("td");


        td1.innerText=ele.name;
        td2.innerText=ele.employeeId;
        td3.innerText=ele.department;
        td4.innerText=ele.experience;
        td5.innerText=ele.Email;
        td6.innerText=ele.mobile;
        td7.innerText=ele.Role;

        row.append(td1,td2,td3,td4,td5,td6,td7);
        tbody.append(row);



    })

})
