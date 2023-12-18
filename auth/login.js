
let adminId = document.getElementById("adminId").style.display = "none"

const contToggle = () =>{
    flag=true;
    let adminId = document.getElementById("adminId").style.display = "none"
    let rollInp = document.getElementById("contRollno").style.display = "inline-block"

}

const adminToggle = () =>{
    let rollInp = document.getElementById("contRollno").style.display = "none"
    let adminId = document.getElementById("adminId").style.display = "inline-block"

}


const contlogin=()=>
{
    let k= JSON.parse(localStorage.getItem("s"));
    let id=document.getElementById("t1").value;
    let pssd=document.getElementById("t2").value;
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
            document.getElementById("t1").value="";
            document.getElementById("t2").value="";
        }
    }
    else
    {
        document.getElementById("mssg").innerHTML="Student does not exist. Please register!!!";
        document.getElementById("t1").value="";
        document.getElementById("t2").value="";
    }
}


const adminlogin=()=>
{
    if(document.getElementById("a1").value==123 && document.getElementById("a2").value==="admin123")
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
    if (document.getElementById("contRollno").style.display = "inline-block")
    {
        contlogin();
    }
    if(document.getElementById("adminId").style.display = "inline-block")
    {
        adminlogin();
    }
}


