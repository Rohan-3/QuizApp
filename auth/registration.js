let students =[];
students=JSON.parse(localStorage.getItem("s"))||[];
let flag=true;
let pic;
const show_Img=()=>
{
    const reader = new FileReader();
    reader.readAsDataURL(myfile.files[0]);
    reader.onload=()=>{
    document.getElementById("pic").src =reader.result;
    }
}

const pssd=()=>
{
    let pssd1 = document.getElementById("password").value;
    let pssd2 = document.getElementById("re_password").value;
    if(pssd1!==pssd2)
    {
        document.getElementById("mssg").innerHTML="Password dosen't match";
        flag=false;
    }
    else
    {
        document.getElementById("mssg").innerHTML="";
        flag=true;
    }

}

const filled=()=>
{
    let f = ["name","password","re_password"]
    for(let i of f)
    {
        let value=document.getElementById(i).value.trim();
        if(value==="")
        {
            alert(`please fill in ${i}`);
            return false;
        }
    }
    let pic = document.getElementById("myfile");
    if(!pic.files.length)
    {
        alert("please upload your photo");
        return false;
    }
    return true;
}

const signup=()=>
{
    if(!filled())
    {
        return;
    }
    let pssd1 = document.getElementById("password").value;
    let pssd2 = document.getElementById("re_password").value;
    if(pssd1!=pssd2)
    {
        alert("Password did not match, please re-enter password");
        return;
    }
    let name = document.getElementById("name").value;
    let roll = students.length > 0 ? students[students.length - 1].roll + 1 : 1;
    let pssd = document.getElementById("password").value;
    let image = document.getElementById("pic").src;
    let user = {name,roll,pssd,image};
    students=[...students,user];
    localStorage.setItem("s",JSON.stringify(students));
    alert(`Registered successfully and your roll no is ${roll}`);
    document.getElementById("reg").action="index.html";
    
}
