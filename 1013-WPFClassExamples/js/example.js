/**
 * Created by Meka808 on 10/10/13.
 */
//prompt("What color is your cat?");
//console.log("a");

//Variables//

//var shoeBoxVariable; // Declares a variable that declares a variable named shoeBoxVariable
//shoeBoxVariable=5;  // sets the variable shoeBoxVariable equal 5 (Uses 1 "=")
//console.log(shoeBoxVariable);


// combining prompts and console.logs

//var userData;
////var userData = prompt('How Old Are You?');
////console.log(userData);
//
//var userNumberOfSiblings=prompt('Number of Siblings?');  // return number value
//
//
//
////var productUserData = userData*userNumberOfSiblings;
////console.log(userData*userNumberOfSiblings);
//
//var userFirstName = prompt('What is your first Name?');
//var userLastName = prompt('What is your Last Name?');
//
//console.log (userFirstName+userLastName);
//console.log(userFirstName+'\t'+userLastName+' '+userData);
//console.log(userData+userNumberOfSiblings);
//
//userData=userData*1;
//userData+Number(userData);


// Calculate the Discounted price for an item. Create an expression that will calculate the discounted price with and
// without the sale tax

var OriginalPrice =100;
var nameOfProduct= 'ABC';
var percentDiscount=20;
var taxRate=10;
var total=OriginalPrice* (1-percentDiscount/100);
var totalWithTax=taxRate/100*total;

console.log('Your '+nameOfProduct+' was originally $'+OriginalPrice+' but, after a Xs discount, it is now $X without tax, and $X with tax.');