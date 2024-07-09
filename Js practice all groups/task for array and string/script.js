
// Building a Recipe Management System

let list = [];

let printdata = () => {
    list = [{
        name: "Banana Smoothie",
        ingredients: ["banana", "milk", "ice-cubes", "honey"],
        recipe: "add the banana,honey and a splash of milk or water to a blender and then blend until smooth. For an icy cold smoothie, throw in a handful of ice or use frozen fruits"
    }, {
        name: "Cold Coffee",
        ingredients: ["milk", "coffee", "sugar", "ice-cubes"],
        recipe: "Gather all ingredients.Combine milk, instant coffee, and sugar in a sealable jar. add ice-cubes, and shake until foamy."
    }, {
        name: "Badam Shake",
        ingredients: ["badam", "milk", "saffron", "sugar", "dry-fruits"],
        recipe: " Soak almonds in hot water for 20-30 min, discard the water and remove the skin. In a blender jar, add almond with 1/4 cup of milk and blend to make smooth paste and set aside. Heat milk in a saucepan over a medium flame, as the milk gets warm, add the almond paste and mix well. Take a tablespoon of the warm milk in a bowl, add saffron strands to it and set aside. lower the heat to low medium and let the milk simmer for 5-10 minutes, stir often so that milk does not get stuck to the bottom of the pan, simmer until the raw smell of almond disappears completely. Add saffron to the milk along with sugar, add dry-fruits, mix well together and turn off the heat. Serve hot or cold."
    }, {
        name: "Chocolate Milkshake",
        ingredients: ["water", "Cocoa powder", "sugar", "chocolate syrup", "ice-cubes", "milk", "ice-cream"],
        recipe: " In a small bowl, take ¼ cup warm water.Add 3 tablespoons cocoa powder. You can even add 2 tablespoons cocoa powder. Then, add ¼ cup sugar. You can add sugar less or more as per taste.  Mix very well so that the sugar as well as the cocoa powder is dissolved in the warm water.Now, pour this chocolate syrup in a blender or mixer. Add some ice cubes.Add 2.5 cups chilled or cold milk.Blend till smooth.Drizzle some chocolate syrup on the sides of glasses. This is an optional step.Pour prepared Chocolate Milkshake in these glasses.Then, add a scoop of chocolate ice cream. Serve Chocolate Milkshake immediately."
    }]
}



let getData = (callback) => {
    callback();
    let newProduct1 = {
        name: "Jamun shots ",
        ingredients: ["jamun", "sugar", "mint- leaves", "ice-cubes", "lemon", "salt", "Red Chilli Powder"],
        recipe: "Wash and deseed the jamuns.Add the deseeded jamun to a blender jar. Add the ice cubes, sugar, kalanamak and mint leaves. Squeeze the juice of half a lemon. Blend the jamun till it is smooth and uniform. Mix salt and red chilli powder in a plate. Take the shot glasses and rub a lemon wedge on it's rims. Now dip the glass rims on the salt-chilli mix.Pour the jamun juice in the glasses and serve immediately."
    }
    return newProduct1;
}

// adding
let addData = () => {
    let newProduct2 = {
        name: "mango milkshake ",
        ingredients: ["mango", "sugar", "vanilla ice cream", "milk", "dry-fruits"],
        recipe: "firstly, in a blender take 1 cup ripened mango. also add 1 tbsp sugar and 2 scoops vanilla ice cream. blend smooth adding ½ cup chilled milk. finally, serve MANGO MILKSHAKE WITH ICE CREAM topped with few chopped dry-fruits."
    }
    let newProduct1 = getData(printdata);
    list.unshift({ ...newProduct1 });
    list.splice(2, 0, { ...newProduct2 });
    console.log(list);
}
addData();


// editing
list[3]["ingredients"][2] = "date sugar"
console.log(list);

// deleting
list.splice(4, 1);
console.log(list);

// searching by ingredients

let milkyProduct = list.filter(x => x.ingredients.includes("milk"));
console.log(milkyProduct);

let freshShake = list.filter(x => x.ingredients.includes("lemon"));
console.log(freshShake);


// saving recipes to local storage.
localStorage.setItem("milkyProduct", JSON.stringify(milkyProduct));
localStorage.setItem("freshShake", JSON.stringify(freshShake));






// task for string

let str = " Nutriworld  science Ccc  Limited    ";

// character count
let count = str.length;
console.log(count); //29

// word count
let word = str.split(" ").filter(x => x);
console.log(word.length);  //3

// frequency of each word
let freq = word.join(" ").toLowerCase();
let num = 0;
for (let x of freq) {
    num = 0;
    for (let y of freq) {
        if (x == y) {
            num += 1;
        }
    }
    console.log(x, "=", num);
}



