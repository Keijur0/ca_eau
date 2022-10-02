// This script takes 1 string as parameter and returns it with one capital letter out of 2

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

function capLowerCap(string)
{
    newString = [];
    string = string.split('');
    stringSize = string.length;
    for (let i = 0; i < stringSize; i++)
    {
        if (string[i].charCodeAt() > 96 && string[i].charCodeAt() < 123 && i % 2 == 0)
        {
            newString.push(string[i].toUpperCase());
        }
        else if (string[i].charCodeAt() < 96 || string[i].charCodeAt() > 123)
        {
            string.splice(i, 2, string[i] + string[i+1]);
            stringSize = stringSize - 2;
            newString.push(string[i]);
            console.log(string + "\n" + newString);
        }
        else
        {
            newString.push(string[i]);
        }
    }
    newString = newString.join(",").replace(/,/g, '');
    return newString;
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
capLowerCap(string);

// Part 4: Result display
console.log(capLowerCap(string)); 
