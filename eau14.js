// This script takes a list of strings and returns them sorted by ascii order

// Functions
function nbArgCheck(nbArg)
{
    if (nbArg < 4)
    {
        return false;
    }
    return true;
}

function ascii_Sort(array)
{
    for (i = 0; i < array.length - 1; i++)
    {
        min = i;
        for (j = i + 1; j < array.length; j++)
        {
            if (array[min].length < array[j].length)
            {
                n = array[j].length;
            }
            else
            {
                n = array[min].length;
            }
            for (k = 0; k < n; k++)
            {
                if (array[min].charCodeAt(k) > array[j].charCodeAt(k))
                {   
                    temp = array[min];
                    array[min] = array[j];
                    array[j] = temp;
                    break;
                }
                else
                {
                    break;
                }

            }
        }
    }
    return (array);
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
argList = process.argv.slice(2);


// Part 2: Error management
if (!nbArgCheck(nbArg))
{
    console.log("error");
    return;
}

// Part 3: Resolution
sorted_array = ascii_Sort(argList);

// Part 4: Result display
console.log(formatResult(sorted_array)); 