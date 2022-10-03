// This script takes a number as parameter and uses as index of Fibonacci Sequence to return the according value.

// Functions
function validityCheck(param1, param2)
{
    if (param1 !== 3)
    {
        return false;
    }
    else if (param2 < 0)
    {
        return false;
    }
    for (let i = 0; i < param2.length; i++)
    {
        if (param2.charCodeAt(i) < 48 || param2.charCodeAt(i) > 57)
        {
            return false;
        }
    }
    return true;
}

function fiboResult(param1)
{
    if (param1 == 0)
    {
        return 0;
    }
    else if (param1 == 1)
    {
        return 1;
    }
    else
    {
        nb1 = 0;
        nb2 = 1;
        i = 2;
        do
        {
            // Calculating all sequence and saving the value until the index provided
            nb3 = nb1 + nb2;
            value = nb3;
            nb1 = nb2;
            nb2 = nb3;
            i++;
        } while (i <= +param1);
    }

    return value; 
}

// Part 1: Parsing
number = process.argv[2];
nbArg = process.argv.length;

// Part 2: Error management
if (!validityCheck(nbArg, number))
{
    console.log(-1);
    return;
}


// Part 3: Resolution
result = fiboResult(number);

// Part 4: Result display
console.log(result); 
