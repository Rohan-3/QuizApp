const login=()=>
{
    let id= document.getElementById("t1").value ;
    let pssd= document.getElementById("t2").value ;
    let k= JSON.parse(localStorage.getItem("s"));
    let data = k.filter((temp)=>{
        if(temp.roll === id)
        {
            return temp;
        }
    })
    if(data.length>0)
    {
        if(pssd === data[0].pssd)
        {
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