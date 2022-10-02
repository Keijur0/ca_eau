// This script takes 1 string as parameter and returns if it contains only numbers or not

// Functions
function validityCheck(nbArg)
{
    if (nbArg !== 3)
    {
        return false;
    }
    return true;
}

function onlyNumbers(string)
{
    for (let i = 0; i < string.length; i++)
    {
        if (string.charCodeAt(i) < 48 || string.charCodeAt(i) > 57)
        {
            return false
        }
    }
    return true;
}

// Part 1: Parsing
string = process.argv[2];
nbArg = process.argv.length;

// Part 2: Error management
if (!validityCheck(nbArg))
{
    console.log("Error: only 1 argument allowed.");
    return;
}

// Part 3: Resolution
onlyNumbers(string);

// Part 4: Result display
console.log(onlyNumbers(string)); 
