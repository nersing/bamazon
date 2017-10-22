# bamazon

## Summary

This app using MySQL, JS, and Node in order for customers to purchase items from the Bamazon online store. Users will use their terminal in order to place orders and follow various prompts in order to complete their shopping expereince.

This is a picture of the MySQL database I created for this app. You will see the database name, table, and items to be placed inside the table.


<img width="697" alt="start db" src="https://user-images.githubusercontent.com/26397187/31866673-a36853bc-b748-11e7-9b07-62847c1e5c61.png">



<img width="542" alt="start product list db" src="https://user-images.githubusercontent.com/26397187/31866692-d8427f18-b748-11e7-9b93-2b24ba5bc785.png">



## Placing an Order

When you run the Javascript file in your terminal, the list of ten products to purchase will be displayed in a table with the prompt "Would you like to shop at Bamazon" and the user types Y for yes or N for no.


<img width="529" alt="prompt 1 a" src="https://user-images.githubusercontent.com/26397187/31866701-12825702-b749-11e7-9b80-fe36efdc2a98.png">



Based on the users answer, if they typed Y, then they will be prompted with the next question of which item they would like to order. They will select an item by typing in the item's id number.


<img width="509" alt="enter id number a" src="https://user-images.githubusercontent.com/26397187/31866709-47390446-b749-11e7-9a90-b28cf0dce678.png">



Then, the user will be prompted with the question of what is the desired quantity for the item they selected. Again, they will type in a number of how many they want to buy.


<img width="499" alt="quantity enter a" src="https://user-images.githubusercontent.com/26397187/31866717-7973eb42-b749-11e7-891c-69aaba5fcb43.png">



If the quantity for the item they selected is in stock, they will receive the message that their item is in stock, how much their total cost is, and a message thanking them for shopping at Bamazon.


<img width="516" alt="total a" src="https://user-images.githubusercontent.com/26397187/31866726-a0b40282-b749-11e7-84aa-3b3a674fcef2.png">



Also, the MySQL database updates once the order is processed. The database will now reflect that item's stock_quantity since the user bought items. So, the database will subtract the users quantity from the items stock_quantity and then provide a new total stock_quantity.


<img width="510" alt="db changed a" src="https://user-images.githubusercontent.com/26397187/31866756-f90b1434-b749-11e7-94ef-48d0a3d2d55d.png">



However, if the quantity the user inputted exceeds the amount in stock, they will recieve the message that Bamazon is currently out of that item and to check back later. Also, it will then prompt the user to enter in a new item id for purchase. The database will not be altered because the order was not complete and the stock_quantity did not decrease.


<img width="508" alt="no enough b" src="https://user-images.githubusercontent.com/26397187/31866745-d6696d7c-b749-11e7-88d5-01e0883ad67b.png">


<img width="466" alt="db not altered" src="https://user-images.githubusercontent.com/26397187/31866767-22b64240-b74a-11e7-85c3-c1c08e0c2b0d.png">


Here is another example:

<img width="986" alt="extra example" src="https://user-images.githubusercontent.com/26397187/31866773-35b8fe8c-b74a-11e7-929e-0fa9e746a96b.png">





