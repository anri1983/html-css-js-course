for (let i = 1; i <= 100; i = i + 1)
 {if ( i % 3 == 0 && i % 5 == 0)
{console.log('FizzBuzz');
}
 else if (i % 3 == 0)
    {console.log('Fizz');
}
else if ( i % 5 == 0)
{console.log('Buzz');
}

else if ( i % 3 !=0 && i % 5 != 0 )
{console.log(i)
}}


//2
for (let i = 1; i <= 100; i++){
    switch (i % 3 == 0 && i % 5 == 0) {
        case true:
           console.log('FizzBuzz') 
            break;
    }
    switch (i % 3 == 0) {
        case true:
            console.log('Fizz')
            break;
    }
    switch (i % 5 == 0) {
        case true:
            console.log('Buzz')
            break;
    }
    switch (i % 3 !=0 && i % 5 != 0) {
        case true:
            console.log(i)
            break;
    }
}

//3
let string = "Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха была речка";

let newString = string.replace(/,/g , '.');
console.log(newString);

let newString1 = newString.replace(/было/, 'Было');
let newString2 = newString1.replace(/лучшим/, 'Лучшим');
console.log(newString2);

//4
false+ false//0
15 / "5"//3
20 * "10"; //100
11 - 10 + "px"//1px
"€" + 100//€100
"500" - 100//400
"25rem" - 5//NaN
1 / 0//infinity
" -100 " + 50//-100 50
" -200 " - 20//-220
null + 1//1
 


//5
let word = prompt('would you like to check word?');
let checkWord = word.split('').reverse().join('');

 function isPalindrom () {
    if (checkWord == word){
        alert ('yes is Polindrom')
    }
    else {
        alert ('sorry it not a Polindrom')
    }
 }
 isPalindrom(checkWord)
