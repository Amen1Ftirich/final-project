let btn = document.querySelectorAll(".clk");

btn[0].addEventListener("click",()=>{
  let img = btn[0].parentElement.firstElementChild.nextElementSibling;
  let price = btn[0].previousElementSibling;
  let food_name = btn[0].parentElement.firstElementChild.nextElementSibling.nextElementSibling;
  
  let item = document.createElement("li").innerHTML=img+food_name+price;
  let cart = document.getElementById("buyItems").appendChild(item)
})
