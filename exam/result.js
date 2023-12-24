let questions=[];
let result=[];
questions=JSON.parse(localStorage.getItem("question"))||[];
const showResult = ()=>{
  
    
    let disqes="";
    questions.forEach((question,i)=>
    {
        disqes += `
        <div>
              <div> 
                <h4 id="qno">Question : ${question.qno} ${question.qt}</h4>
                <h4>Option a : ${question.op1}</h4>
                <h4>Option b : ${question.op2}</h4>
                <h4>Option c : ${question.op3}</h4>
                <h4>Option d : ${question.op4}</h4>
                <h4 class="cans">correct option is : ${question.cans}</h4>
                </div>
        </div>
        `
    });
    document.getElementById("disp").innerHTML = disqes;


    
}