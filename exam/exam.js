// let count1=10;
// let count2=0;
// let t;

function openModel(){
    document.getElementById("model").style.display = "inline-block";
}

function closeModel () {
    document.getElementById("model").style.display = "none";    
}

const display_image=()=>
{
    let data = JSON.parse(sessionStorage.getItem("info"));
    document.getElementById("profile").src = data.image;
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
  message => alert(`${message} "Techical team will reach within 30 seconds`)
);}


// const duration=()=>
// {
//     if(count1>0)
//     {
//         count1--;
//     }
//     else if(count2>0)
//     {
//         count2--;
//         count1=59;
//     }
//      else
//     {
//        alert("Time Up");
//        clearInterval(t);
//        location.href="result.html";
//     }
//     document.getElementById("time").innerHTML=`0${count2}:${count1} (time remaining)`;
// }

// t=setInterval(duration,1000);