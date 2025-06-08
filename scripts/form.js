// Product array (copy this into js/form.js)
const products = [
  { id: "prod1", name: "SuperWidget 3000" },
  { id: "prod2", name: "MegaGadget Pro" },
  { id: "prod3", name: "UltraDevice X" },
  { id: "prod4", name: "HyperTool Deluxe" },
];

// Populate select options dynamically
const productSelect = document.getElementById("productSelect");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;  // id used for value
  option.textContent = product.name; // name shown to user
  productSelect.appendChild(option);
});
