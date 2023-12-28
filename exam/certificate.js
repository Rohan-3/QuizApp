// certificate JS FILE
const download = () =>{

html2canvas(document.getElementById("certificate")).then((canvas) =>{
    let certImage = canvas.toDataURL('image/png');
    console.log(certImage);

    let pdf = new jsPDF('p', 'px', [800, 1250]);
    pdf.addImage(certImage, 'PNG', 0,0, 800, 1265);
    pdf.save('Certificate.pdf');
})

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