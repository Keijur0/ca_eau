// This script takes 1 string as parameter and returns it with a capital letter at the beginning of each word.

// Functions
function validityCheck(param1, param2)
{
    if (param1 !== 3)
    {
        return false;
    }
    for (let i = 0; i < param2.length; i++)
    {
        if (param2.charCodeAt(i) > 47 && param2.charCodeAt(i) < 58)
        {
            return false;
        }
    }
    return true;
}

function capFirstLetters(param1)
{
    newString = [];
    param1 = param1.split(' ');
    size = param1.length;
    var result;
    for (let i = 0; i < size; i++)
    {
        if (param1[i].charCodeAt(0) > 96 && param1[i].charCodeAt(0) < 123)
        {
            // Uppercase on first letter, completing with the rest of the initial word
            tempWord = param1[i][0].toUpperCase() + param1[i].slice(1);
            newString.push(tempWord);
        }
        else
        {
            newString.push(param1[i]);
        }
    }
    for (let i = 0; i < newString.length; i++)
    {
        if (!result)
        {
            result = newString[i];
        }
        else
        {
        result = result + " " + newString[i];
        }
    }
    return result;
}

// Part 1: Parsing
string = process.argv[2].toLowerCase();
nbArg = process.argv.length;

// Part 2: Error management
if (!validityCheck(nbArg, string))
{
    console.log("error");
    return;
}

// Part 3: Resolution
finalResult = capFirstLetters(string);

// Part 4: Result display
console.log(finalResult); 
