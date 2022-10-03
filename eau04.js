// This script takes a number as parameter and returns the closest higher prime number.

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

function nextPrimeNum(param1)
{
    factors = [];
    // For all the next numbers, dividing by all numbers from 1 to that number. That until a number has strictly 2 factors
    do
    {
        i = 1;
        param1++;
        do 
        {
            if (Number.isInteger(param1/i))
            {
                factors.push(i);
            }
            i++;
        } while (i <= param1);
        if (factors.length !== 2)
        {
            factors = [];
        }
    } while (factors.length !== 2);
    return param1;
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
result = nextPrimeNum(number);

// Part 4: Result display
console.log(result); 
