// This script takes a number as parameter and uses as index of Fibonacci Sequence to return the according value.

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

function fiboResult(number)
{
    if (number == 0)
    {
        return 0;
    }
    else if (number == 1)
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
            nb3 = nb1 + nb2;
            index = nb3;
            nb1 = nb2;
            nb2 = nb3;
            i++;
        } while (i <= +number);
    }

    return index; 
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
fiboResult(number);

// Part 4: Result display
console.log(fiboResult(number)); 
