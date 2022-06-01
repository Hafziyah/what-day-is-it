let userName = prompt("What is your name?");

prompt (`${userName}, do you know what day of the week it is? Y/N?`);

 prompt(`Okay, ${userName}, what day is it?`);
 alert("Are you sure? Let me check - does scientific magic");
 let weekday = new Date().toLocaleString("en-US", { weekday: "long" });
// console.log(weekday);

 if (weekday=== "Monday") {
     alert(`${userName}, it is Monday! Let's get the week started!`);
 } else if (weekday==="Tuesday") {
     alert(`${userName}, it is Tuesday! So lets keep hustling!`);
 } else if (weekday ==="Wednesday") {
     alert(`${userName},it is Wednesday! TGIW?...nah, doesn't sound right, so keep working! :-)`)
 } else if (weekday === "Thursday") {
     alert (`${userName}, it is Thursday! Ayyyyy! You are one day closer to Friyay! Have a wonderful work day`);
 } else if (weekday==="Friday") {
     alert (`${userName}, it is Friyayyyy! Here is to the weekend's almost here!`)
 } else (`${userName}, WEEKEND! Whoop! Whoop!`)