
function openModel(){
    document.getElementById("model").style.display = "inline-block";
}

function closeModel () {
    document.getElementById("model").style.display = "none";    
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
