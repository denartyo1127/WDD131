
document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: "prod1", name: "SuperWidget 3000" },
    { id: "prod2", name: "MegaGadget Pro" },
    { id: "prod3", name: "UltraDevice X" },
    { id: "prod4", name: "HyperTool Deluxe" },
  ];

  const productSelect = document.getElementById("productSelect");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});

