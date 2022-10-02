// This script takes numbers as arguments and returns the lowest difference between all of them

// Functions
function nbArgCheck(nbArg)
{
    if (nbArg < 4)
    {
        return false;
    }
    return true;
}

function validityCheck(list)
{
    for (let i = 0; i < list.length; i++)
    {
        if (+list[i] < 0)
        {
            list[i] = -list[i];
        }
        for (let j = 0; j < list[i].length; j++)
        {
            if (list[i].charCodeAt(j) < 48 || list[i].charCodeAt(j) > 57)
            {
                return false;
            }
        }
    }
    return true;
}

function ultMinDiff(list, list1)
{
    var difference;
    var minDifference;
    for (let i = 0; i < list.length; i++)
    {
        for (let j = 0; j < list1.length; j++)
        {
            if (i !== j)
            {
                if (+list[i] < +list1[j])
                {
                    difference = list1[j] - list[i];
                }
                else
                {
                    difference = list[i] - list1[j];
                }
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
ultMinDiff(numbersList, numbersList);

// Part 4: Result display
console.log(ultMinDiff(numbersList, numbersList)); 
