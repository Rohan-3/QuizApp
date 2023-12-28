const display_ques=()=>
{
    let aresult = JSON.parse(localStorage.getItem("allresult"));
    let data = JSON.parse(localStorage.getItem("question"));
    let result = JSON.parse(localStorage.getItem("result"));
    let students = JSON.parse(localStorage.getItem("s"));
    let marks = 0;
    let grade="";
    data.forEach((item)=>{
      let ques = document.createElement("div")
      ques.classList.add("ques");
      let q= item.qno;
      const para = document.createElement("p");
      para.innerText = `${item.qno}. ${item.qt}`;
      const w = document.createElement("INPUT");
      w.setAttribute("type", "radio");
      w.setAttribute("value", "a");
      const x = document.createElement("INPUT");
      x.setAttribute("type", "radio");
      x.setAttribute("value", "b");
      const y = document.createElement("INPUT");
      y.setAttribute("type", "radio");
      y.setAttribute("value", "c");
      const z = document.createElement("INPUT");
      z.setAttribute("type", "radio");
      z.setAttribute("value", "d");
      const l1 = document.createElement("label");
      l1.innerText = item.op1;
      const l2 = document.createElement("label");
      l2.innerText= item.op2;
      const l3 = document.createElement("label");
      l3.innerText = item.op3;
      const l4 = document.createElement("label");
      l4.innerText = item.op4;
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      const p4 = document.createElement("p");
      const p5 = document.createElement("p");
      p5.setAttribute("id","coans");
      if(item.cans=="a")
      {
        p5.innerText= `Correct answer: ${item.op1}`;
      }
     else if(item.cans=="b")
      {
        p5.innerText= `Correct answer: ${item.op2}`;
      }
      else if(item.cans=="c")
      {
        p5.innerText= `Correct answer: ${item.op3}`;
      }
      else
      {
        p5.innerText= `Correct answer: ${item.op4}`;
      }
      p1.appendChild(w);
      p1.appendChild(l1);
      p2.appendChild(x);
      p2.appendChild(l2);
      p3.appendChild(y);
      p3.appendChild(l3);
      p4.appendChild(z);
      p4.appendChild(l4);
      ques.appendChild(para);
      ques.appendChild(p1);
      ques.appendChild(p2);
      ques.appendChild(p3);
      ques.appendChild(p4);
      ques.appendChild(p5);
      document.getElementById("result").appendChild(ques)
     const a = Object.keys(result.ans);
     if(a.includes(q))
     {
      let r = document.querySelectorAll('[type="radio"]');
      for(let i= r.length-1;i>=r.length-4;i--)
      {
        if(result.ans[q] === r[i].value)
        {
          if(item.cans === result.ans[q])
          {
            r[i].style.accentColor = "green";
            r[i].checked = true;
          }
          else
          {
            r[i].style.accentColor = "red";
            r[i].checked = true;
          }
        }
        else
        {
          r[i].disabled = true;
        }
      }
     }
    })
    for(i=0; i < data.length; i++){
      if (data[i].cans == result.ans[i+1]) {
          marks++;
      }

      let sImg = students.filter((temp) => temp.roll == result.roll)

      document.getElementById("pic").src = sImg[0].image;


} 
if (marks === data.length) {
  grade = "Grade: A+"
  document.getElementById("grade").style.color="green"

}else if (marks<= data.length &&  marks>= data.length/2) {
  grade = "Grade: B+"
  document.getElementById("grade").style.color="green"

}else if (marks > 0 && marks< data.length/2) {
  grade = "Grade: C+"
  document.getElementById("grade").style.color="orange"
}else{
  grade = "Grade: D FAIL"
  document.getElementById("certiBtn").style.display = "none";
}
let am = aresult[aresult.length-1];
am ={...am,marks,grade};
aresult[aresult.length-1]= am;
localStorage.setItem("allresult",JSON.stringify(aresult));
document.getElementById("m").innerHTML=marks;
document.getElementById("totalq").innerHTML=" "+data.length;
document.getElementById("grade").innerHTML= grade;
}