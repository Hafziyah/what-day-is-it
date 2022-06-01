alert("Do you know what day of the week it is?");
prompt("What day is it?");
alert('Are you sure? Let me check - "does scientific magic"');
let weekday = new Date().toLocaleString("en-US", { weekday: "long" });
// console.log(weekday);

if (weekday=== "Monday") {
    alert("It is Monday! Let's get the week started!");
} else if (weekday==="Tuesday") {
    alert("It is Tuesday! So lets keep hustling!");
} else if (weekday ==="Wednesday") {
    alert("It is Wednesday! TGIW?...nah, doesn't sound right, so keep working! :-)")
} else if (weekday === "Thursday") {
    alert ("Thursday! Ayyyyy! You are one day closer to Friyay! Have a wonderful work day");
} else if (weekday==="Friday") {
    alert ("It is Friyayyyy! Here is to the weekend's almost here!")
} else ("WEEKEND! YAYYY!")