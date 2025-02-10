const inputbrand=document.querySelector(".inputbrand")
const inputitem=document.querySelector(".inputitem")
const inputinventory=document.querySelector(".inputinventory")
const inputprice=document.querySelector(".inputprice")
const inputduration=document.querySelector(".inputduration")
const inputringguage=document.querySelector(".inputringguage")
const inputlength=document.querySelector(".inputlength")
const inputweight=document.querySelector(".inputweight")
const inventorydatalist=document.querySelector(".inventorydatalist")

function submit(){
    var today=new Date()
    y=today.getFullYear()
    m=today.getMonth()+1
    d=today.getDate()
    h=today.getHours()
    mi=today.getMinutes()
    s=today.getSeconds()
    const submittime=y+"-"+m+"-"+d+" "+h+":"+mi+":"+s
    const newinven=document.createElement("li")
    newinven.innerHTML=`
        <label>${submittime}</label>
        <label>${inputbrand.value}</label>
        <label>${inputitem.value}</label>
        <label>${inputinventory.value}</label>
        <label>${inputinventory.value}</label>
    `
    inventorydatalist.append(newinven)
}