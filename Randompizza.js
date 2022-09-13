
function randomPizza() {
    var pizza = {};
    var crustType=["deepdish","hand tossed","thick crust"]
    var sauceType=["traditional","marirana"]
    var cheeses=["mozzarella","feta","pepperjack","provolon"]
    var toppings=["pepperoni","sausage","mushroom","olives","onions","pineapple"]

    pizza.crustType=crustType[Math.floor(Math.random()*crustType.length)];
    pizza.sauceType=sauceType[Math.floor(Math.random()*sauceType.length)];
    pizza.cheese=cheeses[Math.floor(Math.random()*cheeses.length)];

    pizza.toppings=toppings[Math.floor(Math.random()*toppings.length)];


    return pizza;
}

console.log(randomPizza())