// This script takes numbers as arguments and returns the lowest difference between all of them

// Functions
function nbArgCheck(param1)
{
    if (param1 < 4)
    {
        return false;
    }
    return true;
}

function validityCheck(param1)
{
    for (let i = 0; i < param1.length; i++)
    {
        if (+param1[i] < 0)
        {
            param1[i] = -param1[i];
        }
        for (let j = 0; j < param1[i].length; j++)
        {
            if (param1[i].charCodeAt(j) < 48 || param1[i].charCodeAt(j) > 57)
            {
                return false;
            }
        }
    }
    return true;
}

function ultMinDiff(param1, param2)
{
    var difference;
    var minDifference;
    for (let i = 0; i < param1.length; i++)
    {
        for (let j = 0; j < param2.length; j++)
        {
            if (i !== j)
            {
                if (+param1[i] < +param2[j])
                {
                    difference = param2[j] - param1[i];
                }
                else
                {
                    difference = param1[i] - param2[j];
                }
                // First difference will be the lowest, then change if a next difference is lower
                if (!minDifference || difference < minDifference)
                {
                    minDifference = difference;
                }
            }
        }
    }
    return minDifference;
}

// Part 1: Parsing
nbArg = process.argv.length;
numbersList = process.argv.slice(2);


// Part 2: Error management
if (!nbArgCheck(nbArg) || !validityCheck(numbersList))
{
    console.log("error");
    return;
}

// Part 3: Resolution
result = ultMinDiff(numbersList, numbersList);

// Part 4: Result display
console.log(result); 
