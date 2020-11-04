/* *****Variables***** */
// const annualPrices = ["$199.99", "$249.99", "$399.99"];
// const monthlyPrices = ["$19.99", "$24.99", "$39.99"];
const basicPrice = document.getElementById("price-b");
const proPrice = document.getElementById("price-pro");
const masterPrice = document.getElementById("price-master");
const toggleSwitch = document.getElementById("toggle-switch");

/* *****Event listeners***** */
toggleSwitch.addEventListener("change", () => {
  if (!toggleSwitch.checked) {
    basicPrice.innerText = "$199.99";
    proPrice.innerText = "$249.99";
    masterPrice.innerText = "$399.99";
  } else {
    basicPrice.innerText = "$19.99";
    proPrice.innerText = "$24.99";
    masterPrice.innerText = "$39.99";
  }
});
