let str = prompt("Please input the string:");
let substr = prompt("Please input the substring:");
let pos = -1;
let count = 0;
while ((pos = str.indexOf(substr, pos + 1)) != -1) {
    count++;
}
console.log("String is " + str);
console.log("Substring is " + substr);
console.log("The substring appears " + count + " times");

