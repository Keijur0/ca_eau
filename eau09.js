// This script takes 2 numbers as arguments and returns every values between them. Min value included, max value excluded

// Functions
function nbArgCheck(nbArg)
{
    if (nbArg !== 4)
    {
        return false;
    }
    return true;
}
function validityCheck(number)
{
    if (number < 0)
    {
        number = -number;
    }
    for (let i = 0; i < number.length; i++)
    {
        if (number.charCodeAt(i) < 48 || number.charCodeAt(i) > 57)
        {
            return false
        }
    }
    return true;
}

function middleValues(number1, number2)
{
    if (number1 > number2)
    {
        tempNumber = number1;
        number1 = number2;
        number2 = tempNumber;

    }
    var result;
    do
    {
        if (!result)
        {
            result = number1;
        }
        else
        {
            result = result + " " + number1;
        }
        number1++
    } while(number1 < number2)
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
middleValues(number1, number2);

// Part 4: Result display
console.log(middleValues(number1, number2)); 
