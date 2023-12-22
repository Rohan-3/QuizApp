let questions=[];
questions=JSON.parse(localStorage.getItem("question"))||[];
const add=()=>
{
    let qno=document.getElementById("aqno").value;
    let data=questions.filter((temp)=>temp.qno===qno);
    if(data.length==0)
    {
        let qt=document.getElementById("aqt").value;
        let op1=document.getElementById("aop1").value;
        let op2=document.getElementById("aop2").value;
        let op3=document.getElementById("aop3").value;
        let op4=document.getElementById("aop4").value;
        let cans=document.getElementById("acans").value;
        let data={qno,qt,op1,op2,op3,op4,cans};
        questions=[...questions,data];
        localStorage.setItem("question",JSON.stringify(questions));
        document.getElementById("qno").innerText=qno;
        document.getElementById("qt").innerText=qt;
        document.getElementById("op1").innerText=op1;
        document.getElementById("op2").innerText=op2;
        document.getElementById("op3").innerText=op3;
        document.getElementById("op4").innerText=op4;
        document.getElementById("cans").innerText=cans;
        document.getElementById("output").innerHTML="question added successfully";
    }
    else
    {
        document.getElementById("output").innerHTML="question already exist";
    }
}
const remove=()=>
{
    let qno=document.getElementById("rqno").value;
    let data=questions.filter((temp)=>temp.qno==qno);
    if(data.length>0)
    {
        document.getElementById("qno").innerText=data[0].qno;
        document.getElementById("qt").innerText=data[0].qt;
        document.getElementById("op1").innerText=data[0].op1;
        document.getElementById("op2").innerText=data[0].op2;
        document.getElementById("op3").innerText=data[0].op3;
        document.getElementById("op4").innerText=data[0].op4;
        document.getElementById("cans").innerText=data[0].cans;
        questions=questions.filter((temp)=>temp.qno!==qno);
        localStorage.setItem("question",JSON.stringify(questions));
        document.getElementById("output").innerHTML="question removed successfully";
    }
    else
    {
        document.getElementById("output").innerHTML="invalid question number"
    }
}
const update=()=>
{
    let qno=document.getElementById("uqno").value;
    let data=questions.filter((temp)=>temp.qno===qno);
    if(data.length>0)
    {
        data[0].qt=document.getElementById("uqt").value;
        data[0].op1=document.getElementById("uop1").value;
        data[0].op2=document.getElementById("uop2").value;
        data[0].op3=document.getElementById("uop3").value;
        data[0].op4=document.getElementById("uop4").value;
        data[0].cans=document.getElementById("ucans").value;
        localStorage.setItem("question",JSON.stringify(questions));
        document.getElementById("qno").innerText=data[0].qno;
        document.getElementById("qt").innerText=data[0].qt;
        document.getElementById("op1").innerText=data[0].op1;
        document.getElementById("op2").innerText=data[0].op2;
        document.getElementById("op3").innerText=data[0].op3;
        document.getElementById("op4").innerText=data[0].op4;
        document.getElementById("cans").innerText=data[0].cans;
        questions=questions.filter((temp)=>temp.qno===qno);
        document.getElementById("output").innerHTML="question updated successfully";
    }
    else
    {
        document.getElementById("output").innerHTML="invalid question number";
    }
}
const search=()=>
{
    let qno=document.getElementById("sqno").value;
    let data=questions.filter((temp)=>temp.qno===qno);
    if(data.length>0)
    {
        document.getElementById("qno").innerText=data[0].qno;
        document.getElementById("qt").innerText=data[0].qt;
        document.getElementById("op1").innerText=data[0].op1;
        document.getElementById("op2").innerText=data[0].op2;
        document.getElementById("op3").innerText=data[0].op3;
        document.getElementById("op4").innerText=data[0].op4;
        document.getElementById("cans").innerText=data[0].cans;
    }
    else
    {
        document.getElementById("output").innerHTML="invalid question number";
    }
}
const displayqes=()=>
{
    document.getElementById("qdisplay").style.display="none";
    document.getElementById("displayqes").style.display="inline-block";
    let disqes="";
    questions.forEach((question,i)=>
    {
        disqes += `
        <h2>Question number : ${question.qno}</h2>
        <h4>Question : ${question.qt}</h4>
        <h4>Option 1 : ${question.op1}</h4>
        <h4>Option 2 : ${question.op2}</h4>
        <h4>Option 3 : ${question.op3}</h4>
        <h4>Option 4 : ${question.op4}</h4>
        <h4>correct Answer : ${question.cans}</h4>
        <hr>`
    });
    document.getElementById("displayqes").innerHTML = disqes;
}
