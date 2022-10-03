// This script takes strings as arguments and return the index of the last argument if it has been found in the rest of arguments.

// Functions
function nbArgCheck(param1)
{
    if (param1 < 4)
    {
        return false;
    }
    return true;
}

function findIndex(param1, param2)
{
    for (i = 0; i < param1.length; i++)
    {
        if (param2 == param1[i])
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
index = findIndex(string, wanted);

// Part 4: Result display
console.log(index); 
