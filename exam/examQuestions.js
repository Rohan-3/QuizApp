let questions=[];
questions=JSON.parse(localStorage.getItem("question"))||[];
let k = JSON.parse(localStorage.getItem("allresult"));
let result=[];
let c=0;
let answer={};
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
  search();
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
  search();
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

const store=()=>
{
  let data = JSON.parse(sessionStorage.getItem("info"));
  let roll= data.roll;
  let name = data.name;
  let x = document.getElementById("qno").innerHTML; 
  let y = document.querySelector('input[name="option"]:checked').value;
   answer={...answer,[x]:y};
  let res = {roll,name,ans:answer};
  localStorage.setItem("result",JSON.stringify(res));
}

const search=()=>
  {
    let x= document.getElementById("qno").innerText ;
    let data1= undefined;
    let data=JSON.parse(localStorage.getItem("result"));
     data1 = data.ans[x];
    if(data1!==undefined)
   {
      let radio = document.querySelectorAll('[name="option"]');
      radio.forEach((temp)=>{
         if(temp.value===data1)
         {
            temp.checked=true;
         }
      })
   } 
   else{
      let radio = document.querySelector('input[name="option"]:checked');
      radio.checked=false;
   }
 }

 const submit=()=>
 {
    alert("Do you want to submit?");
    let details = JSON.parse(localStorage.getItem("result"));
    if(k!==null)
    {
       result = k;
      result=[...result,details];
    }
    else
    {
      result=[...result,details];
    }
    localStorage.setItem("allresult",JSON.stringify(result));
    location.href="result.html";
 }