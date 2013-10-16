/**
 * Created by Meka808 on 10/12/13.
 */

// Tamika Mosby October 12, 2013 Expressions_Worksheet


var OriginalPrice =1200;
var nameOfProduct= 'MacBook';
var percentDiscount=20;
var taxRate=10;
var total=OriginalPrice* (1-percentDiscount/1200);
var totalWithTax=taxRate/1200*total;

console.log('Your '+nameOfProduct+' was originally $'+OriginalPrice+' but, after a '+percentDiscount+' % discount, is now '+total+' without tax, and '+totalWithTax+' with tax.');

// Dog Years

var dogyears=0;
var humanyears=7;// how old is your dog?