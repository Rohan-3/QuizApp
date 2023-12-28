let count1=1;
let count2=2;
let t;
let m = JSON.parse(localStorage.getItem("allresult"));
let students = JSON.parse(localStorage.getItem("s"));

let result1=[];

function openModel(){
    document.getElementById("model").style.display = "inline-block";
 let cstudent = students.length-1;
  let rvalue =  document.getElementById("rollno").value = students[cstudent].roll

    console.log(students);
    console.log(rvalue);
}

function closeModel () {
    document.getElementById("model").style.display = "none";    
}

const display_image=()=>
{
    let data = JSON.parse(sessionStorage.getItem("info"));
    document.getElementById("profile").src = data.image;
}

const demo = () =>{
    alert("Got message")
}

function submitQuery(){

    let rollno = document.getElementById("rollno").value;
    let subject = document.getElementById("subject").value
    let query = document.getElementById("query").value
     
    console.log(rollno, query);
 
    Email.send({
     SecureToken : "76125630-e1f9-4464-b610-52d1d0c427dc",
     To : 'shriramkrishnan369@gmail.com',
     From : 'rohanpuranik25@gmail.com',
     Subject : `${subject} ,  my Rollno: ${rollno}`,
     Body : ` Rollno: ${rollno},  ${query}`
 }).then(
   message => alert(message)
 );}

// const  submitQuery = ()=>{

//    let rollno = document.getElementById("rollno").value;
//    let subject = document.getElementById("subject").value
//    let query = document.getElementById("query").value
 
//    console.log(rollno, query);

//    Email.send({
//     SecureToken : "76125630-e1f9-4464-b610-52d1d0c427dc",
//     To : 'shriramkrishnan369@gmail.com',
//     From : 'rohanpuranik25@gmail.com',
//     Subject : `${subject} ,  my Rollno: ${rollno}`,
//     Body : `Rollno: ${rollno},  ${query}`
// }).then(
//   message => alert(`${message} "Techical team will reach within 30 seconds`)
// );}


const duration=()=>
{
    if(count1>0)
    {
        count1--;
    }
    else if(count2>0)
    {
        count2--;
        count1=59;
    }
     else
    {
       alert("Time Up");
       clearInterval(t);
       let details = JSON.parse(localStorage.getItem("result"));
      if(m!==null)
      {
         result1 = m;
         result1=[...result1,details];
      }
      else
       {
          result1=[...result1,details];
        }
       localStorage.setItem("allresult",JSON.stringify(result1));
       location.href="result.html";
    }
    document.getElementById("time").innerHTML=`0${count2}:${count1} (time remaining)`;
}

t=setInterval(duration,1000);