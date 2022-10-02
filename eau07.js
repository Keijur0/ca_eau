// This script takes 1 string as parameter and returns it with a capital letter at the beginning of each word.

// Functions
function validityCheck(nbArg, string)
{
    if (nbArg !== 3)
    {
        return false;
    }
    for (let i = 0; i < string.length; i++)
    {
        if (string.charCodeAt(i) > 47 && string.charCodeAt(i) < 58)
        {
            return false;
        }
    }
    return true;
}

function capFirstLetters(string)
{
    newString = [];
    string = string.split(' ');
    stringSize = string.length;
    var result;
    for (let i = 0; i < stringSize; i++)
    {
        if (string[i].charCodeAt(0) > 96 && string[i].charCodeAt(0) < 123)
        {
            tempWord = string[i][0].toUpperCase() + string[i].slice(1);
            newString.push(tempWord);
        }
        else
        {
            newString.push(string[i]);
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
capFirstLetters(string);

// Part 4: Result display
console.log(capFirstLetters(string)); 
