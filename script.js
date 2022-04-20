let marketInp = document.querySelector("#market");
let delInp = document.querySelector("#delInp");
let pushBtn = document.querySelector("#pushBtn");
let shiftBtn = document.querySelector("#shift");
let elList = document.querySelector("#listUl");
let arrayMarket = [];

pushBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  let marketValue = marketInp.value;
  if (marketValue == " " || marketValue.length < 3 || marketValue.length > 15 || !isNaN(marketValue)){
    marketInp.style.borderColor = "red";
    return;
  }
  arrayMarket.push(marketValue);
  for ( let market of arrayMarket){
  newLi = document.createElement("li");
  newLi.textContent = market;
}
  elList.append(newLi);
})


shiftBtn.addEventListener('click', (e) => {
  e.preventDefault()

  arrayMarket.pop()
})
