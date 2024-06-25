
import Profile from "../images/11-profile.svg";
import Trolly from "../images/25-trolly.svg";
import Delivery from "../images/428-4282931_uber-for-food-delivery-food-delivery 1.png";
import Call from "../images/call.svg";
import Vector from "../images/Vector(8).png";
import Isolation from "../images/Isolation_mode.svg";

document.addEventListener("DOMContentLoaded", () => {

  function fetchFoods(category) {
    fetch("http://localhost:3131/foods")
      .then((response) => response.json())
      .then((data) => {
        const filteredFoods = data.filter((food) => food.category === category);
        displayFoods1(filteredFoods);
      });
  }

const containerDiv = document.querySelector('.container1');
const vectorrightEl = document.querySelector('.vectorright');
const vectorleftEl = document.querySelector('.vectorleft');










  

  

  function displayFoods1() {

    containerDiv.innerHTML = "";
    const parentEl = document.createElement("div");
    parentEl.className = "parent";
    const windowEl = document.createElement("div");
    windowEl.className = "window";
    
    const rightClick = document.createElement("span");
    rightClick.setAttribute("id","right");
    rightClick.onclick =_right;
    rightClick.textContent = "right";
    const leftClick = document.createElement("span");
    leftClick.setAttribute( "id","left");
    leftClick.onclick = _left;
    leftClick.textContent = "left";
    const BusEl = document.createElement("div");
    BusEl.setAttribute("id", "bus");
  
      const figureEl = document.createElement("figure");
      figureEl.setAttribute("id", "pizzas");
      
      const figureEl1 = document.createElement("figure");
      figureEl1.setAttribute("id", "pizzas");

      const figureEl2 = document.createElement("figure");
      figureEl2.setAttribute("id", "pizzas");

    const FOODIMG = document.createElement("img");
    FOODIMG.setAttribute("src" , Profile);
    const FOODIMG1 = document.createElement("img");
    FOODIMG1.setAttribute("src" , Profile);
    const FOODIMG2 = document.createElement("img");
    FOODIMG2.setAttribute("src" , Profile);

   const  thumnailEl = document.createElement("div");
   thumnailEl.className = "thumnail";

//Creating exhabit
const exhabit = document.createElement("div");
exhabit.className = "exhabit";

//Creating up
const theUP = document.createElement("div");
theUP.className = "up";

//Creating up's children
const Super = document.createElement("p");
Super.textContent = "super";
const Delicious = document.createElement("span");
Delicious.textContent = "Delicious";

//Creating Burgertitle
const Burgertitle = document.createElement("h1");
Burgertitle.textContent = "food";

//Creating DOWN
const DOWN = document.createElement("div");
DOWN.className = "down";

//Creating pre
const pre = document.createElement("pre");
pre.textContent = "today best deal";

//Creating BUTTON 's div
const clickorder = document.createElement("div");
clickorder.className = "button";

//Creating order
const order = document.createElement("button");
order.textContent = "سفارش";

//Creating conbox
const conbox = document.createElement("div");
conbox.className = "conbox";

//Creating elementparant
const elementparant = document.createElement("div");
elementparant.className = "elementparent";
//Creating element1
const element1 = document.createElement("div");
element1.className = "element";

//Craeting container-child1 
const containerChild1 = document.createElement("div");
containerChild1.className = "container-child";

//Creating ITEM1
const ITEM1 = document.createElement("div");
ITEM1.className = "item-child  itemchild";

//Creating PROFILE
const PROFILE = document.createElement("img");
PROFILE.setAttribute("src", Profile);
PROFILE.className = "img3 img1";

//Creating ITEM2
const ITEM2 = document.createElement("div");
ITEM2.className = "item-child  itemchild";

//Creating TROLLY
const TROLLY = document.createElement("img");
TROLLY.className = "img3 img1";
TROLLY.setAttribute("src" , Trolly);

//Creating container-child2
const containerchild2 = document.createElement("div");
containerchild2.className = "container-child";

//Creating ITEM3

const ITEM3 = document.createElement("div");
ITEM3.className = "item-child";

//Creating DELIVERY
const DELIVERY = document.createElement("img");
DELIVERY.setAttribute("src" , Delivery);

//Creating element2
const element2 = document.createElement("div");
element2.className = "element";

//Creating container-child 3
const containerchild3 = document.createElement("div");
containerchild3.className = "container-child";

//Creating ITEM4
const ITEM4 = document.createElement("div");
ITEM4.className = "item-child1";

//Creating CALL
const CALL = document.createElement("img");
CALL.setAttribute("src" , Call);

//Creating Number
const NUMBER = document.createElement("span");
NUMBER.textContent = "۰۹۱۱۲۳۴۵۶۷۸";

//Creating Burgers-position
const BURGERSPOSITION = document.createElement("div");
BURGERSPOSITION.textContent = "Burgers";
BURGERSPOSITION.className = "Burgers-position";

//Creating BurgersOff
const BURGERSOFF = document.createElement("div");
BURGERSOFF.className = "Burgers-OFF";

//Creating STICKhowmuch
const STICKhowmuch = document.createElement("div");
STICKhowmuch.className = "howmuch courgette-regular";

//Creating howmuchtext
const howmuchtext = document.createElement("span");
howmuchtext.innerHTML = "";
//Creating howmuchtitle
const howmuchtitle = document.createElement("h1");
howmuchtitle.textContent = "up to";

//Creating OFFq
const OFFQ = document.createElement("div");
OFFQ.className = "OFFq";
//Creating OFFtext
const OFFtext = document.createElement("span");
OFFtext.innerHTML = "";
//Creating OFFtitle
const OFFtitle = document.createElement("h1");
OFFtitle.textContent = "50%";

//Creating STICK
const STICK = document.createElement("div");
STICK.className = "Stick";

//Creating STICKtext
const STICKtext = document.createElement("span");
STICKtext.innerHTML = "";

//Creating STICKtitle 
const STICKtitle = document.createElement("h1");
STICKtitle.textContent = "OFF";

//Creating Siteside
const Siteside = document.createElement("div");
Siteside.className = "Siteside";

// Creating Sitesideimg
const Sitesideimg = document.createElement("img");
Sitesideimg.setAttribute("src",Vector);

//Creating ONION
const ONION = document.createElement("div");
ONION.className = "onion";

//Creating toptabdiv
const toptabdiv = document.createElement("div");
toptabdiv.className = "item--y itelement";

//Create topChild1
const topChild1 = document.createElement("div");
topChild1.className = "child--1";

//Create topchild1title
const topchild1title = document.createElement("span");
topchild1title.textContent = "ارتباط با ما";

//Create topChild2
const topChild2 = document.createElement("div");
topChild2.className = "child--1";

//Create topchild2title
const topchild2title = document.createElement("span");
topchild2title.textContent = "منو";

//Create topChild3
const topChild3 = document.createElement("div");
topChild3.className = "child--1";

//Create topchild3title
const topchild3title = document.createElement("span");
topchild3title.textContent = "خانه";

//Creating toploggodiv
const toploggodiv = document.createElement("div");
toploggodiv.className = "it-2";

//Creating loggoChild
const loggoChild = document.createElement("div");
loggoChild.className = "child--2";

//Creating loggoimg
const loggoimg = document.createElement("img");
loggoimg.setAttribute("src", Isolation);








//



parentEl.appendChild(windowEl);
windowEl.appendChild(rightClick);
windowEl.appendChild(leftClick);
windowEl.appendChild(BusEl);
BusEl.appendChild(figureEl);
figureEl.appendChild(FOODIMG);
BusEl.appendChild(figureEl1);
figureEl1.appendChild(FOODIMG1);
BusEl.appendChild(figureEl2);
figureEl2.appendChild(FOODIMG2);

theUP.appendChild(Super);
theUP.appendChild(Delicious);
exhabit.appendChild(theUP);
exhabit.appendChild(Burgertitle);
DOWN.appendChild(pre);
exhabit.appendChild(DOWN);
clickorder.appendChild(order);
exhabit.appendChild(clickorder);


conbox.appendChild(elementparant);
conbox.appendChild(ONION);
elementparant.appendChild(element1);
elementparant.appendChild(element2);
elementparant.appendChild(BURGERSPOSITION);
elementparant.appendChild(BURGERSOFF);
element1.appendChild(containerChild1);
element1.appendChild(containerchild2);
element2.appendChild(containerchild3);
BURGERSOFF.appendChild(STICKhowmuch);
BURGERSOFF.appendChild(OFFQ);
BURGERSOFF.appendChild(STICK);
BURGERSOFF.appendChild(Siteside);
containerChild1.appendChild(ITEM1);
containerChild1.appendChild(ITEM2);
containerchild2.appendChild(ITEM3);
containerchild3.appendChild(ITEM4);
STICKhowmuch.appendChild(howmuchtext);
OFFQ.appendChild(OFFtext);
STICK.appendChild(STICKtext);
Siteside.appendChild(Sitesideimg);
ITEM1.appendChild(PROFILE);
ITEM2.appendChild(TROLLY);
ITEM3.appendChild(DELIVERY);
ITEM4.appendChild(CALL);
ITEM4.appendChild(NUMBER);
howmuchtext.appendChild(howmuchtitle);
OFFtext.appendChild(OFFtitle);
STICKtext.appendChild(STICKtitle);
ONION.appendChild(toptabdiv);
ONION.appendChild(toploggodiv);
toptabdiv.appendChild(topChild1);
toptabdiv.appendChild(topChild2);
toptabdiv.appendChild(topChild3);
topChild1.appendChild(topchild1title);
topChild2.appendChild(topchild2title);
topChild3.appendChild(topchild3title);
toploggodiv.appendChild(loggoChild);
loggoChild.appendChild(loggoimg);
containerDiv.appendChild(exhabit);
containerDiv.appendChild(conbox);
containerDiv.appendChild(vectorrightEl);
containerDiv.appendChild(vectorleftEl);
containerDiv.appendChild(parentEl);
containerDiv.appendChild(thumnailEl);


let turn = 0;
let _windowwidth = document.getElementsByClassName("window")[0].clientWidth;
let _figurecount = document.querySelectorAll("#bus > figure");
document.getElementById("bus").style.width = _windowwidth*(_figurecount.length) + "px";

_figurecount.forEach(para);
function para(item){
    item.style.width =_windowwidth + "px"
}

function _right() {
    turn++
    _busMove()
}
function _left() {
    turn--
    _busMove()
}
function _busMove(){
    document.getElementById('bus').style.transform = 'translateX(-'+(turn*_windowwidth)+'px)'
    _checkHand()
}
function _checkHand(){
    if(turn == 0){
        document.getElementById('left').style.display = "none";
    }else{
        document.getElementById('left').style.display = "block";
    }
    if(turn>=0 && turn <(_figurecount.length)){
        document.getElementById('right').style.display = 'block';
    }else{
        document.getElementById('right').style.display = 'none';
    }
}

document.getElementsByClassName("thumnail")[0].innerHTML = document.getElementById("bus").innerHTML;

let x = document.querySelectorAll('.thumnail > figure');
x.forEach((item , index) =>{
    item.addEventListener('click',()=>{
        turn = index--
        _busMove()
        })

})






















// fetchFoods("Pizzas");


  }
displayFoods1();
})






document.addEventListener("DOMContentLoaded", () => {
  const foodContainer = document.getElementById("food-container");
  const cartCount = document.getElementById("cart-count");
  const totalPriceElement = document.getElementById("total-price");
  const tabs = document.querySelectorAll(".tab");
  let cart = {};
  let totalItems = 0;
  let totalPrice = 0.0;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const category = tab.getAttribute("data-category");
      fetchFoods(category);
    });
  });


function fetchFoods(category) {
  fetch("http://localhost:3131/foods")
    .then((response) => response.json())
    .then((data) => {
      const filteredFoods = data.filter((food) => food.category === category);
      displayFoods(filteredFoods);
    });
}

function displayFoods(foods) {
  foodContainer.innerHTML = "";
foods.forEach((food) => {

      const foodCard = document.createElement("div");
      foodCard.classList.add("food-card");
      const cartCountForFood = cart[food.id] ? cart[food.id].count : 0;
      foodCard.innerHTML = `
        <img src="${food.image}" alt="${food.name}">
        <div class = "description">
        <h3>${food.name}</h3>
        <p class="ingredients">${food.ingredients.join(", ")}</p>
        <div class="cart-buttons">
          <button class="minus ${cartCountForFood === 0 ? "hidden" : ""}" data-id="${food.id}">-</button>
          <span class="quantity" data-id="${food.id}">${cartCountForFood}</span>
          <button class="plus" data-id="${food.id}">+</button>
          <p class="price">${food.price.toFixed(2)}تومان</p>
        </div>
         <div class="cart-indicator ${cartCountForFood === 0 ? "hidden" : ""}" data-id="${food.id}">${cartCountForFood}</div>
         </div>
      `;
      foodContainer.appendChild(foodCard);
});

    const plusButtons = document.querySelectorAll(".plus");
    const minusButtons = document.querySelectorAll(".minus");

    plusButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.getAttribute("data-id");
        const food = foods.find((item) => item.id == id);
        if (!cart[id]) cart[id] = { count: 0, price: food.price };
        cart[id].count++;
        totalItems++;
        totalPrice += food.price;
        updateCart(id);
      });
    });

    minusButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.getAttribute("data-id");
        const food = foods.find((item) => item.id == id);
        if (cart[id] && cart[id].count > 0) {
          cart[id].count--;
          totalItems--;
          totalPrice -= food.price;
          updateCart(id);
        }
      });
    });
  };

  function updateCart(id) {
    const quantityElement = document.querySelector(
      `.quantity[data-id="${id}"]`,
    );
    const minusButton = document.querySelector(`.minus[data-id="${id}"]`);
    const indicator = document.querySelector(
      `.cart-indicator[data-id="${id}"]`,
    );

    quantityElement.textContent = cart[id].count;
    indicator.textContent = cart[id].count;
    cartCount.textContent = totalItems.toString();
    totalPriceElement.textContent = totalPrice.toFixed(2);
    if (cart[id].count > 0) {
      minusButton.classList.remove("hidden");
      indicator.classList.remove("hidden");
    } else {
      minusButton.classList.add("hidden");
      indicator.classList.add("hidden");
    }
  }

  // Initial load
  fetchFoods("Pizzas");
}
);

