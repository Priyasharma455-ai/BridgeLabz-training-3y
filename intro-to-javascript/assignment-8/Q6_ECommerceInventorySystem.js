const products=[
 {id:1,name:"Laptop",category:"Electronics",price:50000,stock:4},
 {id:2,name:"Phone",category:"Electronics",price:20000,stock:12},
 {id:3,name:"Chair",category:"Furniture",price:3500,stock:3},
 {id:4,name:"Desk",category:"Furniture",price:7000,stock:8},
 {id:5,name:"Notebook",category:"Stationery",price:100,stock:30}
];
function getLowStockProducts(list) { return list.filter(p => p.stock < 5); }
function sortProductsByPrice(list) { return [...list].sort((a,b) => a.price-b.price); }
function calculateTotalInventoryValue(list) { return list.reduce((sum,p) => sum+p.price*p.stock,0); }
function groupByCategory(list) {
  return list.reduce((groups,p) => {
    if (!groups[p.category]) groups[p.category]=[];
    groups[p.category].push(p);
    return groups;
  },{});
}
console.log("Low stock:",getLowStockProducts(products));
console.log("Sorted by price:",sortProductsByPrice(products));
console.log("Total inventory value: Rs.",calculateTotalInventoryValue(products));
console.log("Grouped by category:",groupByCategory(products));
