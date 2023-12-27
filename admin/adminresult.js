
let allresult=JSON.parse(localStorage.getItem("allresult"))||[];
const names=()=>
{   
    const namelist=document.getElementById("names")
    allresult.forEach((details,i)=>
    {
        const namediv = document.createElement("div");
        namediv.classList.add("dispalynames");
        namediv.innerText = `${allresult[i].roll}  ${allresult[i].name}`;
        namediv.addEventListener("click",()=>displaydetails(i));
        namelist.appendChild(namediv);
    });
}


const displaydetails=(i)=>
{
    document.getElementById("name").innerHTML=allresult[i].name;
    document.getElementById("roll").innerHTML=allresult[i].roll;
    document.getElementById("marks").innerHTML=allresult[i].marks;
    document.getElementById("grade").innerHTML=allresult[i].grade;
}


const csearch=()=>
{
    let f=false;
    document.getElementById("names").innerText="";
    let search=document.getElementById("search").value.toLowerCase();
    const namelist=document.getElementById("names");
    allresult.forEach((details,i)=>
    {
        let name=details.name.toLowerCase();
        let roll=details.roll.toString();
        if(name.includes(search)||roll===search)
        {
            const namediv = document.createElement("div");
            namediv.classList.add("dispalynames");
            namediv.innerText = `${allresult[i].roll}  ${allresult[i].name}`;
            namediv.addEventListener("click",()=>displaydetails(i));
            namelist.appendChild(namediv);
            f=true;
        }
    });
    if(f===false)
    {
        document.getElementById("names").innerText=`no result found`;
    }
}
