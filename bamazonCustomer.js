var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
   // console.log("connected as id " + connection.threadId);
   loadProducts();
});


// Loads all products from the mysql table and asks user to enter or not
function loadProducts(){
	var query = "SELECT * FROM products";
	connection.query(query, function(err, res){
		if(err) throw err;
		
		console.table(res)
	})

		inquirer
		.prompt([
			{
				name: "decideToEnter",
				type: "input",
				message: "Would you like to shop at Bamazon? [Y or N] \n",
			}

		]).then(function(answer){
			if(answer.decideToEnter === "Y"){
				promptUserForIdQuantity();

			}else{
				connection.end();
			}
		})
} //loadProducts


// Ask User for item ID and Quantity
function promptUserForIdQuantity(){
	var query = "SELECT * FROM products"
	connection.query(query, function(err, res){
		if(err) throw err;
	
		inquirer
		.prompt([
			{
				name: "selectedId",
				type: "input",
				message: "Enter the item id number you wish to purchase",
				validate: function(value){
					if(isNaN(value) === false && parseInt(value) <= res.length && parseInt(value) > 0){
						return true;
					}else{
					return false;
					}
				}
			},
			{
				name: "quantity",
				type: "input",
				message: "Enter the desired quantity for the item you selected",
				validate: function(value){
					if(isNaN(value) === false){
						return true;
					}else{
						return false;
					}
				}
			}

		]).then(function(answer){
	
				var item = (answer.selectedId)-1;
				var quantity = parseInt(answer.quantity);
				var totalCost = parseFloat(((res[item].price)*quantity).toFixed());

					//Check if item is in stock
				if(res[item].stock_quantity >= quantity){
					console.log("Great! Bamazon has " + res[item].product_name + " in stock!")

					//Update in MySQL DB
					connection.query("UPDATE products SET ? WHERE ?",[
					{stock_quantity: (res[item].stock_quantity - quantity)},
					{id: answer.selectedId}

				 ], function(err, results){
				 	if(err) throw err;
				 	console.log("Your total is $" + totalCost + "\n Thank you for shopping at Bamazon!")
					connection.end()
				 });


				}else{
					console.log("Oh No! Bamazon is currently out of " + res[item].product_name + ". Check back later")
					promptUserForIdQuantity();
				}

	
  		 })
	
 	}) // connection.query function

} //promptUserForId










