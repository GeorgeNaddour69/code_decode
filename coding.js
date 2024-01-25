var suc_btn = document.getElementById("success-outlined")
var dan_btn = document.getElementById("danger-outlined")
var rn_btn = document.getElementById("run_btn")
var min_inp = document.getElementById("min_inp")
var footer = document.getElementById("footer")
var det = document.getElementById("det_btn")
rn_btn.addEventListener("click",()=>{
if(suc_btn.checked)
{
footer.innerHTML += btoa(min_inp.value)
}
else if(dan_btn.checked)
footer.innerHTML += atob(min_inp.value)


})

det.addEventListener("click",()=>{
min_inp.value = ""
footer.innerHTML = "<div style='text-align: center;'><h1 style=`color: rgb(46, 43, 39);`>the result</h1></div>"
})






