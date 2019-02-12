var display = document.getElementById('display');

var saveBtn = document.querySelector('[data-action="save"]')

saveBtn.onclick = function (event){
    this.innerHTML = "hello";
}