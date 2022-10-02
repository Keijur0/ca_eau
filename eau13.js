// This script takes a list of numbers as argument and will return the numbers of the list sorted in ascendent order, using sort by selection method

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

function my_bubble_sort(array)
{
    for (i = 0; i <= array.length - 2; i++)
    {
        minValue = i;
        for (j = i + 1; j <= array.length - 1; j++ )
        {
            if(array[j] < array[minValue])
            {
                nbTemp = array[j];
                array[j] = array[minValue];
                array[minValue] = nbTemp;
            }
        }
        if (minValue !== i)
        {
            nbTemp = array[i];
            array[i] = array[minValue];
            array[minValue] = nbTemp;
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
