// =======================================
//              JS Arrays I 
//    basics, pop, push, shift, unshift
// =======================================

console.log("%c level-1_1", "color: blue; background-color: gold");

const name = ["Bruce", "Wayne", "Superreich"];
const friends = ["Sergio", "Christian", "Farid"];
const food = ["Burger", "Sushi", "Mais-Käsebällchen"];

console.log(name);
console.log(friends);
console.log(food);

console.log("%c level-1_2", "color: blue; background-color: gold");

console.log(name[0], name[1], name[2]);
console.log(friends[0], friends[1], friends[2]);
console.log(food[0], food[1], food[2]);

console.log("%c level-1_3", "color: blue; background-color: gold");

console.log(name.length);
console.log(friends.length);
console.log(food.length);

console.log("%c level-1_4 ––> push-method", "color: blue; background-color: gold");

console.log(name);
name.push("Gotham-City", "Batman");
console.log(name);

console.log(friends);
friends.push("Marzio", "Magda");
console.log(friends);

console.log(food);
food.push("Pizza", "Currywurst");
console.log(food);

console.log("%c level-1_5 ––> pop-method", "color: blue; background-color: gold");

console.log(name);
let lastElementName = name.pop();
console.log(lastElementName);
console.log(name);

console.log(friends);
let lastElementFriends = friends.pop();
console.log(lastElementFriends);
console.log(friends);

console.log(food);
let lastElementFood = food.pop();
console.log(lastElementFood);
console.log(food);

console.log("%c level-1_6 -–> shift-method", "color: blue; background-color: gold");

console.log(name);
let firstElementName = name.shift();
console.log(firstElementName);
console.log(name);

console.log(friends);
let firstElementFriends = friends.shift();
console.log(firstElementFriends);
console.log(friends);

console.log(food);
let firstElementFood = food.shift();
console.log(firstElementFood);
console.log(food);

console.log("%c level-1_7 -–> unshift-method", "color: blue; background-color: gold");

console.log(name);
name.unshift("Joker", "Alfred");
console.log(name);

console.log(friends);
friends.unshift("Julia", "Lea");
console.log(friends);

console.log(food);
food.unshift("Leberkäse", "Spinat");
console.log(food);

console.log("%c level-1_9", "color: blue; background-color: gold");

const numArr = [23, 54, 75];
console.log(numArr)
numArr.push(11, 32, 42, 5, 71);
console.log(numArr)
numArr.unshift(1, 3, 7, 8, 14);
console.log(numArr)
numArr.pop();
numArr.pop();
console.log(numArr)
console.log(numArr)
numArr.shift();
numArr.shift();
console.log(numArr)

// =======================================
//         JS Arrays I ––> filter
// =======================================

console.log("%c filter-level-1_8", "color: blue; background-color: gold");


const zahlenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const geradeZahlen = zahlenArr.filter((value) => 
{
    if(value % 2 === 0)
    {
        return value;
    }
})

console.log(geradeZahlen);

const ungeradeZahlen = zahlenArr.filter((value) => 
{
    if(value % 2 !== 0)
    {
        return value;
    }
})
console.log(ungeradeZahlen);

console.log("%c filter-level-1_8 2", "color: blue; background-color: gold");

const woerter = ["Banane", "Kaktus", "Flausch", "Ente", "Apfel", "Auto", "Giraffe", "Schmetterling", "Krokodil", "Lampe"];

const sixOrLessLetters = woerter.filter((string) => 
{
    if(string.length <= 6)
    {
        return string;
    }
})

console.log(sixOrLessLetters);

const sixOrLessLetters2 = woerter.filter((string) => string.length <= 6 ? string : null);

console.log("mit ES6 short hand:")
console.log(sixOrLessLetters2);

console.log("%c filter-level-1_8 4", "color: blue; background-color: gold");

const zahlen = [12, 25, 7, 18, 30, 5];

const lessThanTwenty = zahlen.filter((value) => value <= 20 ? value : null); 

console.log(lessThanTwenty); 

const multiTwo = lessThanTwenty.map((value) => value * 2);

console.log(multiTwo);

console.log("%c filter-level-1_8 3", "color: blue; background-color: gold");

const heroArr = ["Superman", "Batman", undefined, , "Wonder Woman", "Spider-Man", "Black Widow", "Iron Man", "Thor", "Catwoman", ,null];

console.log(heroArr);

const cleanArr = heroArr.filter((element) => element)

console.log(cleanArr);