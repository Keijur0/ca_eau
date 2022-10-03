// This script takes a list of numbers as argument and will return the numbers of the list sorted in ascendent order, using bubble sort method

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

function my_bubble_sort(array)
{
    for (let i = 0; i < array.length; i++)
    {
        for(let j = 0; j < array.length - i; j++)
        {
            if (array[j+1] && +array[j] > +array[j+1])
            {
                nbTemp = array[j];
                array[j] = array[j+1];
                array[j+1] = nbTemp;
            }
        }
    }
    new_array = array;
    return (new_array);
}

function formatResult(array)
{
    var result;
    for (let i = 0; i < array.length; i++)
    {
        if (!result)
        {
            result = array[i];
        }
        else
        {
            result = result + " " + array[i];
        }
    }
    return result;
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
new_array = my_bubble_sort(numbersList);

// Part 4: Result display
console.log(formatResult(new_array)); 
