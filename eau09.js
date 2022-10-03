// This script takes 2 numbers as arguments and returns every values between them. Min value included, max value excluded

// Functions
function nbArgCheck(param1)
{
    if (param1 !== 4)
    {
        return false;
    }
    return true;
}
function validityCheck(param1)
{
    if (param1 < 0)
    {
        param1 = -param1;
    }
    for (let i = 0; i < param1.length; i++)
    {
        if (param1.charCodeAt(i) < 48 || param1.charCodeAt(i) > 57)
        {
            return false
        }
    }
    return true;
}

function middleValues(param1, param2)
{
    if (param1 > param2)
    {
        tempNumber = param1;
        param1 = param2;
        param2 = tempNumber;

    }
    var result;
    do
    {
        if (!result)
        {
            result = param1;
        }
        else
        {
            result = result + " " + param1;
        }
        param1++
    } while(param1 < param2)
    return result;
}

// Part 1: Parsing
number1 = process.argv[2];
number2 = process.argv[3];
nbArg = process.argv.length;

// Part 2: Error management
if (!nbArgCheck(nbArg) || !validityCheck(number1) || !validityCheck(number2))
{
    console.log("error");
    return;
}

// Part 3: Resolution
result = middleValues(number1, number2);

// Part 4: Result display
console.log(result); 
