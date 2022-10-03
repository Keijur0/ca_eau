// This script takes a list of arguments and returns them in reverse order

// Functions
function validityCheck(nbArg)
{
    if (nbArg < 3)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function listResult()
{
    // Filling the first value of the result so it's not null
    result = argList[argList.length - 1];
    for (let i = 1; i < argList.length; i++)
    {
        result = result + "\n" + argList[argList.length - 1 - i];
    }
    return result;
}

// Part 1: Parsing
argList = process.argv.slice(2);
nbArg = process.argv.length;

// Part 2: Error management

if (!validityCheck(nbArg))
{
    console.log("Error: enter at least 1 argument")
    return;
}

// Part 3: Resolution
listResult();

// Part 4: Result display
console.log(listResult());
