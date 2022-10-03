// This script lists every combination of 3 numbers in ascending order, and in ascending order themselves. Each combination of numbers has to be listed only once.

nbArg = process.argv.length;
// Functions
function validityCheck(param1)
{
    if (param1 > 2)
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
    validNumbers = [];
    var result;
    for (let i = 0; i <= 9; i++)
    {
        for (let j = 0; j <= 9; j++)
        {
            for (let k = 0; k <= 9; k++)
            {
                tempNumber1 = i+""+j+""+k;
                tempNumber2 = k+""+i+""+j;
                tempNumber3 = j+""+k+""+i;
                // Checking if any combination is in the array yet
                if(i < j && j < k && !validNumbers.includes(tempNumber1) && !validNumbers.includes(tempNumber2) && !validNumbers.includes(tempNumber3))
                {
                    validNumbers.push(tempNumber1);   
                }
            }
        }
    }
    for(let i = 0; i < validNumbers.length; i++)
    {
        if (!result)
        {
            result = validNumbers[i];
        }
        else
        {
            result = result + ", " + validNumbers[i];
        }
    }
    return result; 
}

// Part 1: Parsing

// Part 2: Error management
if (!validityCheck(nbArg))
{
    console.log("No argument allowed.")
}

// Part 3: Resolution
numbersList = listResult();

// Part 4: Result display
console.log(numbersList);