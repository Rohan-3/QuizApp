let questions=[];
questions=JSON.parse(localStorage.getItem("question"))||[];
let c=0;
const handleNext=()=>
{
  if(c==questions.length-1)
  {
    displayQuestions();
    document.getElementById("nextbtn").disabled=true;
    c=questions.length-1;
  }
  else
  {
    document.getElementById("backbtn").disabled=false;
    displayQuestions()
    c++;
  }
}
const handleback=()=>
{
  c--;
  if(c<=0)
  {
    displayQuestions()
    document.getElementById("backbtn").disabled=true;
    c=1;
  }
  else
  {
    displayQuestions();
    document.getElementById("nextbtn").disabled=false;
  }
}
const displayQuestions=()=>
{
    const question=questions[c];
    document.getElementById("qno").innerHTML=question.qno;
    document.getElementById("q").innerHTML=question.qt;
    document.getElementById("op1").innerHTML=question.op1;
    document.getElementById("op2").innerHTML=question.op2;
    document.getElementById("op3").innerHTML=question.op3;
    document.getElementById("op4").innerHTML=question.op4;
}
const firstqes=()=>
{
  displayQuestions();
  c++;
  document.getElementById("backbtn").disabled=true;
}

// const store=()=>
// {
//   let data = JSON.parse(sessionStorage.getItem("info"));
//   let roll= data.roll;
//   let name = data.name;
//   let x = document.getElementById("qno").value; 
//   let y = document.querySelector('input[name="option"]:checked').value;
//   let res = {roll,name,[x]:y};
//   localStorage.setItem("result",JSON.stringify(res));
// }
