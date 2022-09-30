// This script lists every combination of 3 numbers in ascending order, and in ascending order themselves. Each combination of numbers has to be listed only once.

nbArg = process.argv.length;
// Fonctions
function validityCheck(nbArg)
{
    if (nbArg > 2)
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
    number = 000;
    validNumbers = [];
    var result;
    do
    {
       for (let i = 0; i <= 9; i++)
        {
            for (let j = 0; j <= 9; j++)
            {
                for (let k = 0; k <= 9; k++)
                {
                    tempNumber1 = i+""+j+""+k;
                    tempNumber2 = k+""+i+""+j;
                    tempNumber3 = j+""+k+""+i;
                    console.log(tempNumber1);
                    if(i < j && j < k && !validNumbers.includes(tempNumber1) && !validNumbers.includes(tempNumber2) && !validNumbers.includes(tempNumber3))
                    {
                        validNumbers.push(tempNumber1);   
                    }
                    number++;
                }
            }
        }
    }
    while (number <= 999);
    for(let i = 0; i < validNumbers.length; i++)
    {
        if (!result)
        {
            result = validNumbers[i] + ", ";
        }
        else if (i < validNumbers.length - 1)
        {
            result = result + validNumbers[i] + ", ";
        }
        else
        {
            result = result + validNumbers[i];
        }
    }
    return result; 
}

// Part 1: Error management
if (!validityCheck(nbArg))
{
    console.log("No argument allowed.")
}
// Part 2: Parsing

// Part 3: Resolution
listResult();

// Part 4: Result display
console.log(listResult());