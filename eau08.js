// This script takes 1 string as parameter and returns if it contains only numbers or not

// Functions
function validityCheck(param1)
{
    if (param1 !== 3)
    {
        return false;
    }
    return true;
}

function onlyNumbers(param1)
{
    for (let i = 0; i < param1.length; i++)
    {
        if (param1.charCodeAt(i) < 48 || param1.charCodeAt(i) > 57)
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
result = onlyNumbers(string);

// Part 4: Result display
console.log(result); 
