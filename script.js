/*setInterval(function () {
    window.location.href = "index.html";
}, 10000);*/
let id = "";
let now = false;
function view() {
   // id = value;
    if (now == false) {
        now = true;
        open();
    }
    else {
        now = false;
        close();
    }
}


function open() {
    //alert("show()");
    document.getElementById(`${id}`).style.visibility = 'visible';
    document.getElementById(`${id}`).style.maxHeight = "70vh";
}

function close() {
    //alert("close()");
    document.getElementById(`${id}`).style.visibility = 'hidden';
    document.getElementById(`${id}`).style.maxHeight = "1px";
}
let cpy = "";
function change(_this, _to) {
    switch (_this)  {
        case "cpy": cpy = _to; break;
        case "view": id = _to; break;
        default: id = _to;
    }
}
function copy_(id) {
    cpy = id;
    const license = "/**\n  * LICENCE FROM CODE_SPICES\n  * DO NOT MODIFY \n  **/";
    var text_ = document.getElementById(cpy).innerText;
    navigator.clipboard.writeText(text_+license);
    alert('Copied');
}

function locate(_to) {
    window.location.href = _to;
}