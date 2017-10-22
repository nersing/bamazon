# bamazon

## Summary

This app using MySQL, JS, and Node in order for customers to purchase items from the Bamazon online store. Users will use their terminal in order to place orders and follow various prompts in order to complete their shopping expereince.

This is a picture of the MySQL database I created for this app. You will see the database name, table, and items to be placed inside the table.
     PICTURES

## Placing an Order

When you run the Javascript file in your terminal, the list of ten products to purchase will be displayed in a table with the prompt "Would you like to shop at Bamazon" and the user types Y for yes or N for no.
PICTURE

Based on the users answer, if they typed Y, then they will be prompted with the next question of which item they would like to order. They will select an item by typing in the item's id number.
PICTURE
   
Then, the user will be prompted with the question of what is the desired quantity for the item they selected. Again, they will type in a number of how many they want to buy.
PICTURE

If the quantity for the item they selected is in stock, they will receive the message that their item is in stock, how much their total cost is, and a message thanking them for shopping at Bamazon.
PICTURE

Also, the MySQL database updates once the order is processed. The database will now reflect that item's stock_quantity since the user bought items. So, the database will subtract the users quantity from the items stock_quantity and then provide a new total stock_quantity
PICTURE

However, if the quantity the user inputted exceeds the amount in stock, they will recieve the message that Bamazon is currently out of that item and to check back later. Also, it will then prompt the user to enter in a new item id for purchase. The database will not be altered because the order was not complete and the stock_quantity did not decrease.
PICTURES










