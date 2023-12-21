let d;
// Get current date and time
d = new Date();
console.log(d);

const c = new Date("2022-03-05");
console.log(c);
// returns Mar 5, 2022 in date time format

// By default, Javascript will use the browser's time zone and display a date as a full text string
// Fri Mar 04 2022 19:00:00 GMT-0500 (Eastern Standard Time)

// There are 9 ways to create a new date object:
// new Date()
// new Date (date string)
// i.e below:
// new Date(year, month)
// new Date(year, month, day)
// new Date(year, month, day, hours)
// new Date(year, month, day, hours, seconds)
// new Date(year, month, day, hours, seconds, milliseconds)
// new Date(milliseconds)


// Javascript counts months from 0 to 11:
// January = 0
// December = 11

// Specifiying a month higher than 11, will not result in an error but add the overflow to the next year
const s = new Date(2018, 15, 24, 10, 33, 30)
console.log(s)
// Wed Apr 24 2019 10:33:30 GMT-0400 (Eastern Daylight Time)

// Specifying a day higher than max, will not result in an error but add the overflow to the next month:
const h = new Date(2018, 5, 35, 10, 33, 30);
console.log(h)
// returns Thu Jul 05 2018 10:33:30 GMT-0400 (Eastern Daylight Time)

// 6 numbers specify year, month, day, hour, minute, second
// 5 numbers specify year, month, day, hour, minute
// 4 numbers specify year, month, day, and hour
// 3 numbers specify year, month, day
// 2 numbers specify year and month

// You cannot omit month. If you supply only one parameter it will be treated as milliseconds
const z = new Date(2018)
console.log(z);
// returns Wed Dec 31 1969 19:00:02 GMT-0500


// One and two digit years will be interpreted as 19xx
const g = new Date(99, 11, 24)
console.log(g)
// returns Wed Dec 31 1969 19:00:02 GMT-0500

const b = new Date(9,11,24);
console.log(b);
// returns Fri Dec 24 1909 00:00:00 GMT-0500 (Eastern Standard Time)

// get milliseconds for current time
const nowMilliseconds = Date.now();
console.log(nowMilliseconds)
// returns 1702530162092

// Get millisconds for specific time
const bornDate = new Date("02-26-1993");
console.log(bornDate.getTime())
console.log(bornDate.valueOf())
// returns 730702800000

// Get date of milliseconds
const millisecondsToDate = new Date(730702800000);
console.log(millisecondsToDate);
// returns Fri Feb 26 1993 00:00:00 GMT-0500 (Eastern Standard Time)


const date = new Date();

// get year
console.log(date.getFullYear())

// get month
console.log(date.getMonth())

// get day
console.log(date.getDay())

// get hours
console.log(date.getHours())

// get minutes
console.log(date.getMinutes())

// get seconds
console.log(date.getSeconds())

// get milliseconds
console.log(date.getMilliseconds())

// locale date
console.log(Intl.DateTimeFormat('en-US').format(date));
console.log(Intl.DateTimeFormat('en-GB').format(date));

// Optioned locale method
console.log(Intl.DateTimeFormat('default', { hour: '2-digit' }).format(date));

// shorter optioned locale method
console.log(date.toLocaleString('default', { day: '2-digit' }))
console.log(date.toLocaleString('default', { month: 'long', day: 'numeric' }))