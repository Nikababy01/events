const pies = [
{
    name: "Dutch Apple Pie",
    price: 1000,
    isWarm: false,
    isOrganic: true,
    crust: "extra flaky",
    iceCream: "Vanilla Bean",
    isAvailable: true,
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUNJM8mVcZFwaNR8VFIdR7zf21I2L_aGjssRPeSrJ11jotwGY&s>",
    drinkPairing: "Milk",
    instructor: "Zoe"
},
{
    name: "Pi",
    price: 3.14,
    isWarm: false,
    isOrganic: true,
    crust: "Crumb",
    iceCream: "Moose Tracks",
    isAvailable: true,
    imageUrl: "https://images.food52.com/AVIPwP_aqm9nkAvFQZJzBC240hQ=/1200x1200/a38d55e1-e09b-4758-b301-449967da4fee--buttermilk_chess_pie.jpg",
    drinkPairing: "Milk",
    instructor: "Mary"
},
{
    name: "Chocolate",
    price: 5.00,
    isWarm: false,
    isOrganic: true,
    crust: "Crumb",
    iceCream: "Strawberry",
    isAvailable: true,
    imageUrl: "https://spicysouthernkitchen.com/wp-content/uploads/chocolate-meringue-pie-20.jpg",
    drinkPairing: "coffee",
    instructor: "Mary"
},
{
    name: "Chess",
    price: 4.00,
    isWarm: false,
    isOrganic: true,
    crust: "Gram",
    iceCream: "Chocolate",
    isAvailable: true,
    imageUrl: "https://foodsogoodmall.com/wp-content/uploads/2016/11/Southern-Chess-Pie.jpg",
    drinkPairing: "Water",
    instructor: "Greg"
},
{
    name: "Strawberry",
    price: 4.00,
    isWarm: false,
    isOrganic: true,
    crust: "Gram",
    iceCream: "Chocolate",
    isAvailable: true,
    imageUrl: "https://www.thecountrycook.net/wp-content/uploads/2019/04/slice-Shoneys-Strawberry-Pie.jpg",
    drinkPairing: "Water",
    instructor: "Luke"   
},
{
    name: "Peach Cobbler",
    price: 4.00,
    isWarm: false,
    isOrganic: true,
    crust: "Gram",
    iceCream: "Vanilla",
    isAvailable: true,
    imageUrl: "https://www.thecountrycook.net/wp-content/uploads/2012/08/thumbnail.jpg",
    drinkPairing: "Water",
    instructor: "Mary"
},
{
    name: "Pecan",
    price: 4.00,
    isWarm: false,
    isOrganic: true,
    crust: "Gram",
    iceCream: "Chocolate",
    isAvailable: true,
    imageUrl: "https://www.simplyrecipes.com/wp-content/uploads/2014/11/Pecan-Pie-LEAD-1.jpg",
    drinkPairing: "Water",
    instructor: "Zoe"
},
{
    name: "Lemon",
    price: 4.00,
    isWarm: false,
    isOrganic: true,
    crust: "Gram",
    iceCream: "Chocolate",
    isAvailable: true,
    imageUrl: "https://www.kingarthurflour.com/sites/default/files/recipe_legacy/6645-3-large.jpg",
    drinkPairing: "Water",
    instructor: "Greg"
},
];

console.log('pies',pies);
// 3 cards to a row
// nice big images
// display all information in the pie objects
const printToDom= (divId,textToPrint) =>{
    const selectedDiv=document.getElementById(divId);
    selectedDiv.innerHTML=textToPrint; 
};

const pieBuilder = (monkeybuttArray)=> {
let domString ='';
for (let i = 0; i < monkeybuttArray.length; i++){
    domString += `<div class ="piecards">`;
    domString += `<h1 class="piename">${monkeybuttArray[i].name}</h1>`;
    domString += `<img class="img" src="${monkeybuttArray[i].imageUrl}">`;
    domString += `<p>Name:${monkeybuttArray[i].name}</p>`;
    domString += `<p>price:${monkeybuttArray[i].price}</p>`;
    domString += `<p>Warm:${monkeybuttArray[i].isWarm}</p>`;
    domString += `<p>Organic:${monkeybuttArray[i].isOrganic}</p>`;
    domString += `<p>Crust:${monkeybuttArray[i].crust}</p>`;
    domString += `<p>Ice Cream:${monkeybuttArray[i].iceCream}</p>`;
    domString += `<p>Available:${monkeybuttArray[i].isAvailable}</p>`;
    domString += `<p>Drink:${monkeybuttArray[i].drinkPairing}</p>`;
    domString += `<p>Instructor:${monkeybuttArray[i].instructor}</p>`
    domString += `</div>`;
}
       
    
    printToDom('pies', domString)
};

const findMyPies= (e) =>{
    const buttonId= e.target.id;
    if(buttonId === 'All'){
        pieBuilder(pies);
    } else {
    const myPies= [];
    for(let i = 0; i < pies.length; i++){
    if( pies[i].instructor === buttonId){
         myPies.push(pies[i]);
    }
  } 
  pieBuilder(myPies);     
}

};

const events =() => {
    document.getElementById('Zoe').addEventListener('click',findMyPies);
    document.getElementById('Mary').addEventListener('click',findMyPies);document.getElementById('Luke').addEventListener('click',findMyPies);
    document.getElementById('Greg').addEventListener('click',findMyPies);
    document.getElementById('All').addEventListener('click',findMyPies);
}
const init = ()=> {
    pieBuilder(pies);
    events();
}
init();
        