var number = prompt('Type a number :'); // this statement asks the user to insert a number
var i=1; // the loop starts with this number

while (i<=number){ // this statement keeps looping until it matches the user number
    document.write(i + ' ');
    i++;
}

var array = ['apple', 'banana', 'carrot', 'daisy'];
var arrayPosition = prompt('Enter number from 0 to 3')
var a=1;

if (arrayPosition<=3){
    while (a<=number){ // the number is taken from above loop, so this statement keeps looping until it matches the user number
        document.write('<br>' + array[arrayPosition]); // this statement prints the array
        a++;
    }
} else {
    alert('You incompetent fool! I said 0 to 3!!'); // this statement runs when the position of array is given higher that 3 or less than 0
}