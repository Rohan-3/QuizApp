const download = () =>{
    let certificate = this.document.getElementById("certificate")
    console.log(certificate);

    console.log(window);

    html2pdf().from(certificate).save();
}

let marks  = JSON.parse(localStorage.getItem("marks"))
let data  = JSON.parse(localStorage.getItem("question"))
const certificateData =() =>{
    let result=JSON.parse(localStorage.getItem("result"))||[];
    
    let name = result.name
    console.log(marks);
    document.getElementById("marks").innerHTML = marks;
    document.getElementById("qnos").innerHTML = data.length;
    document.getElementById("name").innerHTML = name;

    if (markGot === queLength) {
        grade = "Grade: A+"
      }else if (markGot <= queLength &&  markGot>= queLength/2) {
        grade = "Grade: B+"
      }else if (markGot > 0 && markGot< queLength/2) {
        grade = "Grade: C+"
      }else{
        grade = "Grade: D FAIL"
      }
    document.getElementById("grade").innerHTML = grade;
    
}