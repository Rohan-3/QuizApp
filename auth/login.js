
document.getElementById("adminId").style.display = "none";
document.getElementById("contRollno").style.display = "inline-block";

const contToggle = () =>{
    document.getElementById("adminId").style.display = "none"
    document.getElementById("contRollno").style.display = "inline-block"
}

const adminToggle = () =>{
    document.getElementById("contRollno").style.display = "none"
    document.getElementById("adminId").style.display = "inline-block"

}


const contlogin=()=>
{
    let k= JSON.parse(localStorage.getItem("s"));
    let id=document.getElementById("croll").value;
    let pssd=document.getElementById("cpass").value;
    let data = k.filter((temp)=>{
        if(temp.roll == id)
        {
            return temp;
        }
    })
    if(data.length>0)
    {
        if(pssd === data[0].pssd)
        {
            sessionStorage.setItem("info",JSON.stringify(data[0]))
            location.href="../instruction.html";
        }
        else
        {
            document.getElementById("mssg").innerHTML="Incorrect user id or password";
            document.getElementById("croll").value="";
            document.getElementById("cpass").value="";
        }
    }
    else
    {
        document.getElementById("mssg").innerHTML="Student does not exist. Please register!!!";
        document.getElementById("croll").value="";
        document.getElementById("cpass").value="";
    }
}


const adminlogin=()=>
{
    if(document.getElementById("aid").value==123 && document.getElementById("apass").value==="admin123")
    {
        location.href="../admin/admin.html"
    }
    else
    {
        document.getElementById("mssg").innerHTML="invalid admin id or password"
    }
}

const login=()=>
{
    if (document.getElementById("contRollno").style.display === "inline-block")
    {
        contlogin();
    }
    if(document.getElementById("adminId").style.display === "inline-block")
    {
        adminlogin();
    }
}


