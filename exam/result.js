

const display_ques=()=>
{
    let data = JSON.parse(localStorage.getItem("question"));
    let result = JSON.parse(localStorage.getItem("result"));
    let marks = 0;
    data.forEach((item)=>{
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
      document.getElementById("result").appendChild(para);
      document.getElementById("result").appendChild(p1);
      document.getElementById("result").appendChild(p2);
      document.getElementById("result").appendChild(p3);
      document.getElementById("result").appendChild(p4);
      document.getElementById("result").appendChild(p5);
     const a = Object.keys(result.ans);
     if(a.includes(q))
     {
      let r = document.querySelectorAll('[type="radio"]');
      console.log(r.length);
      for(let i= r.length-1;i>=r.length-4;i--)
      {
        if(result.ans[q] === r[i].value)
        {
            r[i].checked = true;
        }
      }
     }
    })
    for(i=0; i < data.length; i++){
      if (data[i].cans == result.ans[i+1]) {
          marks++;
      }
   document.getElementById("m").innerHTML=marks;
}  
}

>>>>>>> Stashed changes
