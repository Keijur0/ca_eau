// This script takes a number as parameter and returns the closest higher prime number.

// Functions
function validityCheck(nbArg, number)
{
    if (nbArg !== 3)
    {
        return false;
    }
    else if (number < 0)
    {
        return false;
    }
    for (let i = 0; i < number.length; i++)
    {
        if (number.charCodeAt(i) < 48 || number.charCodeAt(i) > 57)
        {
            return false;
        }
    }
    return true;
}

function nextPrimeNum(number)
{
    factors = [];
    do
    {
        i = 1;
        number++;
        do 
        {
            if (Number.isInteger(number/i))
            {
                factors.push(i);
            }
            i++;
        } while (i <= number);
        if (factors.length !== 2)
        {
            factors = [];
        }
    } while (factors.length !== 2);
    return number;
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
nextPrimeNum(number);

// Part 4: Result display
console.log(nextPrimeNum(number)); 
