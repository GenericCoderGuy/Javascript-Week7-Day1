//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
console.log('Exersise 1')
let dogString = "Hello Max, my name is Dog, and I have purple eyes!";
let dogNames = ["Max","HAS","PuRple","dog"];
let dogNamesFail = ["Bob"];

function findWords(string, arr)
{
    for (var item of arr)
    {
    if (string.includes(item))
        {return 'Matched dog_name'}
    else
        {return 'No Matches'}
    }
}
console.log(findWords(dogString, dogNames))
console.log(findWords(dogString, dogNamesFail))

//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */
console.log('Exersise 2')

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(arr)
{
    for (var i = 0; i < arr.length; i++)
    {if(i % 2 == 0)
        {arr[i] = 'even index'}}
    return arr
}
console.log(replaceEvens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

/* CodeWars #1 */
// # Create a function finalGrade,
// # which calculates the final grade of a student depending on two parameters:
// # a grade for the exam and a number of completed projects.
console.log('CodeWars 1')

function finalGrade(exam, projects)
{
    if (exam > 90 | projects > 10)
        {return 100}
    else if
        (exam > 75 & projects >= 5)
        {return 90}
    else if
        (exam > 50 & projects >= 2)
        {return 75}
    else
        {return 0}
}
console.log(finalGrade(90, 20))
console.log(finalGrade(60, 4))
console.log(finalGrade(20, 5))


/* CodeWars #2 */
// # There is an array with some numbers. All numbers are equal except for one. Try to find it!
// # It’s guaranteed that array contains at least 3 numbers.
// # The tests contain some very huge arrays, so think about performance.
console.log('CodeWars 2')

function findUniq(arr)
{
    arr.sort();
    var value = arr.slice(-1)[0];
    var value2 = arr[0]
    var value3 = arr[1]
    
    if (value2 != value3)
    {return (value2)}
    else
    {return (value)}
}

console.log(findUniq([1,1,2,1,1]));
console.log(findUniq([10,20,10,10]));
console.log(findUniq([101,101,100,101]));
