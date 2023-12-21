let x;

// String
x = 5 + '5';

// Number - javascript knows it doesn't make sense if concatenating, so multiply it
x = 5 * '5';

// null is coerced into a number 0. Result is 5.
x = 5 + null;

// returns 0 as a number
x = Number(null);

// returns 1
x = Number(true)

// returns 0
x = Number(false)


console.log(x, typeof x);