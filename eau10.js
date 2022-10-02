// This script takes strings as arguments and return the index of the last argument if it has been found in the rest of arguments.

// Functions
function nbArgCheck(nbArg)
{
    if (nbArg < 4)
    {
        return false;
    }
    return true;
}

function findIndex(string, string1)
{
    for (i = 0; i < string.length; i++)
    {
        if (string1 == string[i])
        {
            return i;
        }
    }
    return -1;
}

// Part 1: Parsing
nbArg = process.argv.length;
string = process.argv.slice(2, nbArg - 1);
wanted = process.argv[nbArg - 1];


// Part 2: Error management
if (!nbArgCheck(nbArg))
{
    console.log("error");
    return;
}

// Part 3: Resolution
findIndex(string, wanted);

// Part 4: Result display
console.log(findIndex(string, wanted)); 
