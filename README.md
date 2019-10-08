# burger

### File Structure 
```
+ burger
|   .gitignore : Files ignored by git
|   package-lock.json : Created by npm
|   package.json : Application package file. 
|   README.md : this file
|   server.js : Express httpd server logic.
|   
+---config
|       connection.js : mySQL Database configuration.
|       orm.js : Object-Relational-Modeling logic.
|       
+---controllers
|       burgerController.js : Controller logic (The "C" in MVC). 
|       
+---db
|       schema.sql : Database and table definitions.
|       seeds.sql  : Initial table data. 
|       
+---models
|       burger.js : Business Object model (The burger). 
|       
+---node_modules : Dependencies installed by npm
|           
+---public
|   \---assets
|       +---css
|       |       style.css : CSS Styling
|       |       
|       \---js
|               burgers.js : Front end logic
|               
\---views
    |   index.handlebars : HTML/Handlebars View
    |   
    +---layouts
    |       main.handlebars : Top HTML/Handlevars view. 
    |       
    \---partials
        \---burgers
                burger-block.handlebars : Handlebars partial view. 
                

```

### Technologies Used 

Eat-Da-Burger is built following the MVC architecture

The view uses Handlebars to serve the HTML dynamically.

Controllers are simple express routing.

Models are built on SQL using an ORM file to handle the database using javascript, 2nd version working with Sequelize [here](#).


