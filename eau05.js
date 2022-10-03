// This script takes 2 strings as parameters and returns if the 2nd string is in the first one

// Functions
function validityCheck(param1, param2, param3)
{
    if (param1 !== 4)
    {
        return false;
    }
    for (let i = 0; i < param2.length; i++)
    {
        if (param2.charCodeAt(i) < 97 || param2.charCodeAt(i) > 122)
        {
            return false;
        }
    }
    for (let i = 0; i < param3.length; i++)
    {
        if (param3.charCodeAt(i) < 97 || param3.charCodeAt(i) > 122)
        {
            return false;
        }
    }
    return true;
}

function stringIncluded(param1, param2)
{
    if (param2.length > param1.length)
    {
        return false;
    }
    else
    {
        // Comparing the whole 2nd string to the 1st string, from index 0 advancing letter by letter and see if one combination matches.
        similar = 0;
        for (let i = 1; i < param1.length; i++)
        {
            for (let j = 1; j < param2.length; j++)
            {
                if (param2[j] == param1[i] && param2[j-1] == param1[i-1])
                {
                    similar++;
                }
            }
        }
        if (similar == param2.length - 1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

// Part 1: Parsing
string1 = process.argv[2].toLowerCase();
string2 = process.argv[3].toLowerCase();
nbArg = process.argv.length;

// Part 2: Error management
if (!validityCheck(nbArg, string1, string2))
{
    console.log("error");
    return;
}

// Part 3: Resolution
result = stringIncluded(string1, string2);

// Part 4: Result display
console.log(result); 
