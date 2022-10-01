// This script takes 2 strings as parameters and returns if the 2nd string is in the first one

// Functions
function validityCheck(nbArg, string1, string2)
{
    if (nbArg !== 4)
    {
        return false;
    }
    for (let i = 0; i < string1.length; i++)
    {
        if (string1.charCodeAt(i) < 97 || string1.charCodeAt(i) > 122)
        {
            return false;
        }
    }
    for (let i = 0; i < string2.length; i++)
    {
        if (string2.charCodeAt(i) < 97 || string2.charCodeAt(i) > 122)
        {
            return false;
        }
    }
    return true;
}

function stringIncluded(string1, string2)
{
    if (string2.length > string1.length)
    {
        return false;
    }
    else
    {
        similar = 0;
        for (let i = 1; i < string1.length; i++)
        {
            for (let j = 1; j < string2.length; j++)
            {
                if (string2[j] == string1[i] && string2[j-1] == string1[i-1])
                {
                    similar++;
                }
            }
        }
        if (similar == string2.length - 1)
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
stringIncluded(string1, string2);

// Part 4: Result display
console.log(stringIncluded(string1, string2)); 
