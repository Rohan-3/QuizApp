//let students=[];
//students=JSON.parse(localStorage.getItem("s"))||[];
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
    let pssd1 = document.getElementById("t3").value;
    let pssd2 = document.getElementById("t4").value;
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

const signup=()=>
{
    if(flag==true)
    {
        let k = JSON.parse(localStorage.getItem("s"));
        let students =[];
        let name = document.getElementById("t1").value;
        let roll = students.length > 0 ? students[students.length - 1].roll + 1 : 1;
        let pssd = document.getElementById("t3").value;
        let image= document.getElementById("pic").src;
        let user= {name,roll,pssd,image};
        if(k==null)
        {
            students=[...students,user];
        }
        else
        {
            students=k;
            students=[...students,user];
        }
        localStorage.setItem("s",JSON.stringify(students));
        alert(`Registered successfully and your roll no is ${roll}`);
        
       }
    else
    {
        let pssd1 = document.getElementById("t3").value ;
        let pssd2 = document.getElementById("t4").value;
        if(pssd1.length>0 && pssd2.length>0)
        alert("Password did not match, please re-enter password");
    }
}
