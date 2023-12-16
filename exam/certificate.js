const download = () =>{
    let certificate = this.document.getElementById("certificate")
    console.log(certificate);

    console.log(window);

    html2pdf().from(certificate).save();
}