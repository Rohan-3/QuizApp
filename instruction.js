const display_image=()=>
{
    let data = JSON.parse(sessionStorage.getItem("info"));
    document.getElementById("profile").src = data.image;
}
