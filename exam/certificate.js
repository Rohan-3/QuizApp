const download = () =>{
    let certificate = this.document.getElementById("certificate")
    console.log(certificate);

    console.log(window);

    html2pdf().from(certificate).save();
}

const certificateData =() =>{
    let data = JSON.parse(localStorage.getItem("question"));
    let result = JSON.parse(localStorage.getItem("allresult"));
    let display = result[result.length-1];
    document.getElementById("marks").innerHTML = display.marks;
    document.getElementById("qnos").innerHTML = data.length;
    document.getElementById("name").innerHTML = display.name;
    document.getElementById("grade").innerHTML = display.grade;
    }