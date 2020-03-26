const mongoose = require('./connection')
const User = require('../models/User')
const Recipe = require('../models/Recipe')
const Category = require('../models/Category')

let category1=''
let category2=''
let category3=''
let category4=''

User.deleteMany({}).then(() => {
    console.log('deleted all users')
    Recipe.deleteMany({}).then(() => {
        console.log('deleted all recipes')
          Category.deleteMany({}).then(() =>  {
          console.log('deleted all categories')

                Category.create({
                    type: "Appetizer",
                }).then(category => {
                    category1=category
                    console.log("added category1")
                })

                Category.create({
                    type: "Dessert",
                }).then(category => {
                    category2=category
                    console.log("added category2")
                })

                Category.create({
                    type: "Main Course",
                }).then(category => {
                    category3=category
                    console.log("added category3")
                })

                Category.create({
                    type: "Breakfast",
                }).then(category => {
                    category4=category
                    console.log("added category4")
                })

            
            User.create({ 
                "name": "Karrie Dvorak",
                "email": "dvorakkarriel@johndeere.com" })
            .then(karrie => {
                Recipe.create({
                    recipeName: "Beef Tacos",
                    url: "https://www.marthastewart.com/338579/beef-tacos",
                    image: "https://www.edamam.com/web-img/c6b/c6b586dc7e72d4599d0d9624736ea4a4.jpg", 
                    instructions:"<li>4 skinless, boneless, chicken breasts (about 1 1/2 pounds)</li><li>All-purpose flour, for dredging</li>",
                    category: category3._id,
                    creator: karrie.id,
                }).then(kd => {
                    karrie.recipes.push(kd);
                    karrie.save();
                    console.log('Karrie added recipe') })
                })

            

            User.create({ 
                name: "Kiran Pendurthi",
                email: "pendurthikirank@johndeere.com" 
               }).then(kiran => {
                Recipe.create({
                    recipeName: "Chicken Marsala",
                    url: "https://www.aol.com/?err=404&err_url=https%3a%2f%2fwww.aol.com%2ffood%2frecipe%2fchicken-marsala%2f",
                    image: "https://www.edamam.com/web-img/bb3/bb33506829b7e91e0a5a382b915ad865.jpg",
                    instructions:"<li>4 skinless, boneless, chicken breasts (about 1 1/2 pounds)</li><li>All-purpose flour, for dredging</li>",
                    category: category3._id,
                    creator: kiran.id
                }).then(kp => {
                    kiran.recipes.push(kp);
                    console.log('KP added recipe1') })
                Recipe.create({
                    recipeName: "Lemon Chicken",
                    url: "https://www.rachaelray.com/recipes/lemon-chicken-fricassee-with-biscuit-topping/",
                    image: "https://www.edamam.com/web-img/9b2/9b2b1dbcfc6a79559e411c70ee6682bc.jpg",
                    instructions:"<li>oil and butter for frying</li><li>1 lemon , juiced</li>",
                    category: category3._id,
                    creator: kiran.id
                }).then(kp => {
                   kiran.recipes.push(kp);
                   kiran.save();
                   console.log('KP added recipe2') })
                })

                User.create({ 
                    "name": "Brian Caroll",
                    "email": "CarollB@johndeere.com" })
                .then(brain => {
                    Recipe.create({
                        recipeName: "Smothered Chicken",
                        url: "https://www.foodnetwork.com/recipes/sandra-lee/smothered-chicken-recipe-1950282",
                        image: "https://www.edamam.com/web-img/65a/65a7ad1b644869cd901aafd23aa3bf11.jpeg", 
                        instructions:"<li>3 1/2 pounds whole cut-up chicken</li><li>2 tablespoons salt-free chicken seasoning</li>",
                        category: category3._id,
                        creator: brain.id,
                    }).then(bc => {
                        brain.recipes.push(bc);
                        brain.save();
                        console.log('Brian added recipe') })
                    })

                
                    User.create({ 
                        "name": "Jeff Elkins",
                        "email": "ElkinsJ@johndeere.com" })
                    .then(jeff => {
                        Recipe.create({
                            recipeName: "Chicken & peppers",
                            url: "https://thestonesoup.com/blog/2012/05/09/the-1-thing-you-should-never-do-when-combining-flavours/",
                            image: "https://www.edamam.com/web-img/adf/adf0d1e50d6ab82c373984230682fb3e.jpg", 
                            instructions:"<li>4-6 chicken drumsticks</li><li>2-3 large red capsicum (bell peppers), chopped</li>",
                            category: category3._id,
                            creator: jeff.id,
                        }).then(je => {
                            jeff.recipes.push(je);
                            jeff.save();
                            console.log('jeff added recipe') })
                        })
                
                        User.create({ 
                            "name": "Marc Wright",
                            "email": "WrightM@johndeere.com" })
                        .then(marc => {
                            Recipe.create({
                                recipeName: "Chicken Gravy",
                                url: "https://www.marthastewart.com/338579/beef-tacos",
                                image: "https://www.edamam.com/web-img/fd1/fd1afed1849c44f5185720394e363b4e.jpg", 
                                instructions:"<li>4 cups chicken bones and wings</li><li>2 tablespoons unsalted butter, softened</li>",
                                category: category3._id,
                                creator: marc.id,
                            }).then(mw => {
                                marc.recipes.push(mw);
                                marc.save();
                                console.log('marc added recipe') })
                            })

                
                            User.create({ 
                                "name": "Casey Harding",
                                "email": "HardingC@johndeere.com" })
                            .then(casey => {
                                Recipe.create({
                                    recipeName: "Ice Cream Bombe",
                                    url: "https://www.marthastewart.com/316880/ice-cream-bombe",
                                    image: "https://www.edamam.com/web-img/fd0/fd05892aae3b086f0f315e99d629c3d7.jpg", 
                                    instructions:"<li>2 pints black currant sorbet</li><li>1 raspberry sorbet</li>",
                                    category: category2._id,
                                    creator: casey.id,
                                }).then(ch => {
                                    casey.recipes.push(ch);
                                    casey.save();
                                    console.log('casey added recipe') })
                                })

                                User.create({ 
                                    "name": "Leo Rodriguez",
                                    "email": "rodriguezlC@johndeere.com" })
                                .then(leo => {
                                    Recipe.create({
                                        recipeName: "Omlet",
                                        url: "https://www.food.com/recipe/omlet-526499",
                                        image: "https://www.edamam.com/web-img/e6c/e6c71d0e9baefdb8b8cb2b6f24f76d22.jpg", 
                                        instructions:"<li>1⁄2 onion, diced</li><li>1 tablespoon olive oil</li>",
                                        category: category4._id,
                                        creator: leo.id,
                                    }).then(ld => {
                                        leo.recipes.push(ld);
                                        leo.save();
                                        console.log('leo added recipe') })
                                    })

                                    User.create({ 
                                        "name": "Jared Helming",
                                        "email": "helmingj@johndeere.com" })
                                    .then(jared => {
                                        Recipe.create({
                                            recipeName: "Brick Chicken",
                                            url: "www.marthastewart.com/332837/brick-chicken",
                                            image: "https://www.edamam.com/web-img/bd8/bd8dcd995882f20eb8c25c31c045018e.jpg", 
                                            instructions:"<li>2 tablespoons canola oil</li><li>Coarse salt and freshly ground black pepper</li>",
                                            category: category4._id,
                                            creator: jared.id,
                                        }).then(jh => {
                                            jared.recipes.push(jh);
                                            jared.save();
                                            console.log('jared added recipe') })
                                        })

                                        User.create({ 
                                            "name": "Tony Antelman",
                                            "email": "rodriguezlC@johndeere.com" })
                                        .then(tony => {
                                            Recipe.create({
                                                recipeName: "Chicken Paprikash",
                                                url: "https://norecipes.com/chicken-paprikash/",
                                                image: "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg", 
                                                instructions:"<li>1⁄2 onion, diced</li><li>1 tablespoon olive oil</li>",
                                                category: category4._id,
                                                creator: tony.id,
                                            }).then(ta => {
                                                tony.recipes.push(ta);
                                                tony.save();
                                                console.log('tony added recipe') })
                                            })
                                            User.create({ 
                                                "name": "Bhavani Inampudi",
                                                "email": "inampudib@johndeere.com" })
                                            .then(bhavani => {
                                                Recipe.create({
                                                    recipeName: "Buttermilk Chicken",
                                                    url: "https://www.marthastewart.com/336024/buttermilk-chicken",
                                                    image: "https://www.edamam.com/web-img/71b/71b8d910554a0c7ed27a928e90944f93.jpg", 
                                                    instructions:"<li>Vegetable oil, for baking sheet</li><li>8 slices white bread</li>",
                                                    category: category4._id,
                                                    creator: bhavani.id,
                                                }).then(bi => {
                                                    bhavani.recipes.push(bi);
                                                    bhavani.save();
                                                    console.log('bhavani added recipe') })
                                                })
                                                User.create({ 
                                                    "name": "Myra Fah",
                                                    "email": "fahMC@johndeere.com" })
                                                .then(fah => {
                                                    Recipe.create({
                                                        recipeName: "Chicken sandwitch",
                                                        url: "https://www.edamam.com/web-img/e28/e28e817a118651afba9740114b30d340.jpg",
                                                        image: "https://www.bigoven.com/recipe/chicken-sandwitch/304071", 
                                                        instructions:"<li>1⁄2 onion, diced</li><li>1 tablespoon olive oil</li>",
                                                        category: category4._id,
                                                        creator: fah.id,
                                                    }).then(fm => {
                                                        fah.recipes.push(fm);
                                                        fah.save();
                                                        console.log('myra added recipe') })
                                                    })
                                                    User.create({ 
                                                        "name": "Rick Schmidt",
                                                        "email": "schmidtR@johndeere.com" })
                                                    .then(rick => {
                                                        Recipe.create({
                                                            recipeName: "Catalan Chicken",
                                                            url: "https://www.bonappetit.com/columns/breadwinner/article/how-to-get-your-kids-to-eat-sauce-let-them-cook-it-themselves",
                                                            image: "https://www.edamam.com/web-img/4d9/4d9084cbc170789caa9e997108b595de.jpg", 
                                                            instructions:"<li>1 whole 4-pound chicken, quartered</li><li>8 slices bacon</li>",
                                                            category: category4._id,
                                                            creator: rick.id,
                                                        }).then(rs => {
                                                            rick.recipes.push(rs);
                                                            rick.save();
                                                            console.log('rick added recipe') })
                                                        })
                                                                   
               
           
        }) 

    })
})