// certificate JS FILE
const download = () =>{

html2canvas(document.getElementById("certificate"),{logging: true, letterRendering: 1 ,useCORS: true, allowTaint: true, foreignObjectRendering: true, onrendered: function(canvas){ }}).then((canvas) =>{
    let certImage = canvas.toDataURL('image/png');
    console.log(certImage);

    let pdf = new jsPDF('p', 'px', [1100, 1350]);
    pdf.addImage(certImage, 'PNG', 0,0, 1100, 1365);
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