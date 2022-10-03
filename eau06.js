// This script takes 1 string as parameter and returns it with one capital letter out of 2

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

function capLowerCap(param1)
{
    newString = [];
    param1 = param1.split('');
    size = param1.length;
    for (let i = 0; i < size; i++)
    {
        if (param1[i].charCodeAt() > 96 && param1[i].charCodeAt() < 123 && i % 2 == 0)
        {
            newString.push(param1[i].toUpperCase());
        }
        // Detecting special characters and merging them with the character from next index except for last index
        else if ((param1[i].charCodeAt() < 96 || param1[i].charCodeAt() > 123) && param1[i + 1])
        {
            param1.splice(i, 2, param1[i] + param1[i+1]);
            size = size - 1;
            newString.push(param1[i]);
        }
        else
        {
            newString.push(param1[i]);
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
result = capLowerCap(string);

// Part 4: Result display
console.log(result); 
