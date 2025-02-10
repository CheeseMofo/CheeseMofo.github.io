
const t1=document.getElementById("tittle1")
const t2=document.getElementById("tittle2")
const imgmain=document.querySelector(".imgmain")
const imgm=document.querySelector(".imgm")
const imgl=document.querySelector(".imgl")
const imgr=document.querySelector(".imgr")
const cover=document.getElementById("cover")
const imgb=document.getElementById("imgb")
const listnew=document.getElementById("listnew")
const listpopular=document.getElementById("listpopular")
const cubanlist=document.getElementById("cubanlist")
const cart=document.getElementById("cart")
const cigarlist=document.getElementById("cigarlist")
const cartbut=document.querySelector(".cartbut")
const brand=document.getElementById("brand")
const cartlist=document.querySelector(".cartlist1")
const noncubanlist=document.getElementById("noncubanlist")
const ltitle=document.querySelector(".ltitle")
const newa=document.getElementById("newa")
const pop=document.getElementById("pop")
const cub=document.getElementById("cub")
const noncub=document.getElementById("noncub")
const mainitemname=document.querySelector(".mainitemname")
const itemnameintro=document.querySelector(".itemnameintro")
const imginintro=document.querySelector(".imginintro")
const sidebar=document.getElementById("sidebar")
const header1=document.querySelector(".header1")
const header2=document.querySelector(".header2")
const imgplace=document.getElementById("imgplace")
const footer=document.querySelector(".footer")
const input=document.querySelector(".input")
const price=document.getElementById("price")
const unit=document.querySelector(".unit")
const introduction=document.getElementById("introduction")
const receipt=document.getElementById("receipt")
const day=document.querySelector(".day")
const time=document.querySelector(".time")
const receiptorderlist=document.querySelector(".receiptorderlist")
const amountlist=document.querySelector(".amountlist")
const pricenumber=document.querySelector(".pricenumber")
const imgmainplace=document.querySelector(".imgmainplace")
var pricenum=0
cover.style.display="none"
noncubanlist.style.display="none"
listnew.style.display="none"
listpopular.style.display="none"
cubanlist.style.display="none"
cart.style.display="none"
receipt.style.display="none"
var box=false
function Commas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function newaspread(){
    if(listnew.style.display=="block"){
        listnew.style.display="none"
        pop.style.display="block"
        cub.style.display="block"
        noncub.style.display="block"
        return
    }
    if(listnew.style.display=="none"){
        listnew.style.display="block"
        pop.style.display="none"
        cub.style.display="none"
        noncub.style.display="none"
        return
    }
    
}
function popspread(){
    if(listpopular.style.display=="block"){
        listpopular.style.display="none"
        newa.style.display="block"
        cub.style.display="block"
        noncub.style.display="block"
        return
    }
    if(listpopular.style.display=="none"){
        listpopular.style.display="block"
        newa.style.display="none"
        cub.style.display="none"
        noncub.style.display="none"
        return
    }
    
}
function cubspread(){
    if(cubanlist.style.display=="block"){
        cubanlist.style.display="none"
        newa.style.display="block"
        pop.style.display="block"
        noncub.style.display="block"
        return
    }
    if(cubanlist.style.display=="none"){
        cubanlist.style.display="block"
        newa.style.display="none"
        pop.style.display="none"
        noncub.style.display="none"
        return
    }
}
function noncubspread(){
    if(noncubanlist.style.display=="block"){
        noncubanlist.style.display="none"
        newa.style.display="block"
        pop.style.display="block"
        cub.style.display="block"
        return
    }
    if(noncubanlist.style.display=="none"){
        noncubanlist.style.display="block"
        newa.style.display="none"
        pop.style.display="none"
        cub.style.display="none"
        return
    }
}
t1.addEventListener("mouseover",bla)
t2.addEventListener("mouseover",bla)
t1.addEventListener("mouseleave",whi)
t2.addEventListener("mouseleave",whi)
function bla(){
    t1.style.backgroundColor="black"
    t1.style.color="whitesmoke"
    t2.style.backgroundColor="whitesmoke"
    t2.style.color="black"
}
function whi(){
    t1.style.backgroundColor="whitesmoke"
    t1.style.color="black"
    t2.style.backgroundColor="black"
    t2.style.color="whitesmoke"
}
cigarlist.style.display="block"
cartbut.addEventListener("click",cartop)
function cartop(){
    if(cigarlist.style.display=="block"){
        cigarlist.style.display="none"
        cart.style.display="block"
        ltitle.innerHTML=cartbut.innerHTML
        cartbut.innerHTML="Back to List"
        return
    }
    if(cigarlist.style.display=="none"){
        cigarlist.style.display="block"
        cart.style.display="none"
        ltitle.innerHTML="List"
        cartbut.innerHTML="Cart"
        return
    }   

    }
function showb(p){
    imgb.src=p.href
    brand.innerText=p.innerText
    imgb.style.display="inline"
    brand.style.display="inline"
}
function addtocart(){
    const newlist=document.createElement("li")
    const newlist2=document.createElement("li")
    newlist.innerHTML=`
        <label>${brand.innerHTML}<br />${mainitemname.innerHTML}</label>
        <button class="del">Y</button>
    `
    newlist2.innerHTML=`
        <div class="receiptorderitem">
            <label>${brand.innerHTML}</label>
            <label>${mainitemname.innerHTML}</label>
        </div>
        <label>${input.value}${unit.innerHTML}</label>
        <label>${price.innerHTML}</label>
    `
    
    const del=newlist.querySelector(".del")
    del.addEventListener("click",function(){
        newlist.remove()
        newlist2.remove()
        pricenum-=showp()
    })
    pricenum+=showp()
    cartlist.append(newlist)
    receiptorderlist.append(newlist2)
}

function popupintro(x){
    cover.style.display="block"
    introduction.style.display="block"
    receipt.style.display="none"
    imginintro.src=x.src
    itemnameintro.innerHTML=brand.innerHTML+"<br>"+mainitemname.innerHTML

}
function closeintro(){
    cover.style.display="none"
}
function order(){
    if(cartlist.getElementsByTagName("li").length==0){
        return
    }
    datedate()
    pricenumber.innerHTML="TWD   $"+Commas(pricenum)
    cover.style.display="block"
    introduction.style.display="none"
    receipt.style.display="block"
    cigarlist.style.display="block"
    cart.style.display="none"
    ltitle.innerHTML="List"
    cartbut.innerHTML="Cart"
    cartlist.innerHTML=""
}
function datedate(){
    var today=new Date()
    y=today.getFullYear()
    m=today.getMonth()+1
    d=today.getDate()
    h=today.getHours()
    mi=today.getMinutes()
    s=today.getSeconds()
    day.innerHTML="Date:"+y+"-"+m+"-"+d
    time.innerHTML=h+":"+mi+":"+s

}
function setmain(x){
    mainitemname.innerHTML=x.name
    x.scrollIntoView({ 
        behavior: "smooth", 
        inline: "center"
      })
}
function showside(){
    if(sidebar.style.display==""){
        sidebar.style.display="none"
        header1.style.width="100%"
        header2.style.width="100%"
        imgplace.style.width="100%"
        footer.style.width="100%"
        return
    }
    if(sidebar.style.display=="none"){
        header1.style.width="85.8%"
        header2.style.width="85.8%"
        imgplace.style.width="85.8%"
        footer.style.width="85.8%"
        sidebar.style.display=""
        return
    }
}
function showi(x){
    imgm.src=x.src
}
function minus(){
    if(input.value==0 ){
        return
    }
    input.value-=1
    showp()

}
function plus(){
    if(input.value==""){
        input.value=0
    }
    x=parseFloat(input.value)
    input.value=x+1
    showp()
}
function showp(){
    if(input.value==0){
        price.innerHTML=""
        return
    }
    if(box==true){
        price.innerText="TWD  $"+Commas(input.value*1000*25)
        return input.value*1000*25
    }
    if(box==false){
        price.innerHTML="TWD  $"+Commas(input.value*1000)
        return input.value*1000
    }
    
}
function boxbuy(x){
    if(box==false){
    unit.style.backgroundColor="whitesmoke"
    unit.style.color="black"
    box=true
    x.innerHTML="Box"
    showp()
    return
    }
    if(box==true){
    unit.style.backgroundColor="black"
    unit.style.color="whitesmoke"
    box=false
    x.innerHTML="stick"
    showp()
    return
    }
}

