const numbers = [5,8,0,1,9,11,15,16];

console.log("Original numbers list: ", numbers)
// The ASC order
// The first iteration (i)
for(let i = 0 ; i < numbers.length - 1 ; i++) // 1s needs to decrement the numbers.length by (1)
{
    // The second iteration (j)
    for(let j = 0 ; j < numbers.length - 1 -i ; j++) // 2nd need to decrement the numbers.length by (1) and the (i) iteration by (1) 
    {
        // The if condition
        if(numbers[j] > numbers[j + 1]) // The if condition it's wrong we should replace the (i) with (j)
        {
            let temp = numbers[j]; // To stor the value in it 
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
        }
    }
}

console.log("Numbers list After sorting: ", numbers)
// The DESC order
// The first iteration (i)
for(let i = 0 ; i < numbers.length +1 ; i++) // 1s needs to increment the numbers.length by (1)
{
    // The second iteration (j)
    for(let j = 0 ; j < numbers.length + 1 +i ; j++) // 2nd need to increment the numbers.length by (1) and the (i) iteration by (1) 
    {
        if(numbers[j] < numbers[j + 1]) // The if condition it's wrong we should replace the (i) with (j)
        {
            let temp = numbers[j]; // To stor the value in it 
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
        }
    }
}

console.log("Numbers list After Desc sorting: ", numbers)


