function setRate(){
    let btn = window.event.target.parentElement;
    let arr=window.event.target.parentElement.parentElement.childNodes;
    let flag=true;
    for (let index = 1; index < arr.length-1; index++) {
        console.log(arr[index].tagName);
        if(arr[index].className<=btn.className&&arr[index].tagName=="BUTTON")
            arr[index].style.color="yellow";
        else if(arr[index].tagName=="BUTTON") arr[index].style.color="rgba(171, 165, 165, 0.459)";
    }
}

function showMenu(){
    setTimeout(function(){document.getElementsByClassName("categoryMenu0")[0].classList.toggle('show')},50);
}
