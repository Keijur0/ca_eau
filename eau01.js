// This script lists every combination of 2 numbers from 00 to 99 in ascending order, and in ascending order themselves. Each combination of numbers has to be listed only once.

// Functions
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
    validCombinations = [];
    var result;
    for (let i = 0; i <= 9 ; i++)
    {
        for (let j = 0; j <= 9; j++)
        {
            for (let k = 0; k <= 9; k++)
            {
                for (let l = 0; l <= 9; l++)
                {
                    tempNumber1 = i + "" + j;
                    tempNumber2 = k + "" + l;
                    tempCombo1 = tempNumber1 + " " + tempNumber2;
                    tempCombo2 = tempNumber2 + " " + tempNumber1;
                    if (tempNumber1 < tempNumber2 && !validCombinations.includes(tempCombo1) && !validCombinations.includes(tempCombo2))
                    {
                        validCombinations.push(tempCombo1);
                    }
                }
            }
        }
    }
    for (let i = 0; i < validCombinations.length; i++)
    {
        if (!result)
        {
            result = validCombinations[0];
        }
        else
        {
            result = result + ", " + validCombinations[i];
        }
    }
    return result;
}

// Part 1: Parsing
nbArg = process.argv.length;

// Part 2: Error management
if (!validityCheck(nbArg))
{
    console.log("No argument allowed.")
}

// Part 3: Resolution
listResult();

// Part 4: Result display
console.log(listResult());