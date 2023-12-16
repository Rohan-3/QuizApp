const updateExam=()=>
{
    document.getElementById("update").style="display:flex; column-gap:20px";
    document.getElementById("result").style.display="none";
    document.getElementById("logo").style.display="none";
}
const result=()=>
{
    document.getElementById("result").style="display:flex; column-gap:20px";
    document.getElementById("update").style.display="none";
    document.getElementById("logo").style.display="none";
}
const adddiv=()=>
{
    document.getElementById("addqt").style.display="block";
    document.getElementById("removeqt").style.display="none";
    document.getElementById("updateqt").style.display="none";
    document.getElementById("searchqt").style.display="none";
}
const removediv=()=>
{
    document.getElementById("removeqt").style.display="block";
    document.getElementById("addqt").style.display="none";
    document.getElementById("updateqt").style.display="none";
    document.getElementById("searchqt").style.display="none";
}
const updatediv=()=>
{
    document.getElementById("updateqt").style.display="block";
    document.getElementById("addqt").style.display="none";
    document.getElementById("removeqt").style.display="none";
    document.getElementById("searchqt").style.display="none";
}
const searchdiv=()=>
{
    document.getElementById("addqt").style.display="none";
    document.getElementById("removeqt").style.display="none";
    document.getElementById("updateqt").style.display="none";
    document.getElementById("searchqt").style.display="block";
}