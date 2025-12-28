let students = ["Dania", "Omar", "Lina", "Rami"];
students.push("Sara");
students.unshift("Adam");
students[students.indexOf("Lina")] = "Lamar";
let removedLast = students.pop();
let removedFirst = students.shift();
console.log(`Rami in the list ? ${students.includes("Rami")}`);//
console.log(`the index of the student Omar ${students.indexOf("Omar")}`);//
let groupA = students.slice(0,2);
let groupB = ["Nour", "Tala"];
let allGroups = groupA.concat(groupB);
let groupString = allGroups.join(" | ");
students.sort();
console.log(students.reverse());//
let seats = [1, 2, 3, 4, 5];
let reservedSeats = seats.splice(1,3,"Reserved", "Reserved", "Reserved");
console.log(seats);//
console.log(students);//
console.log(removedLast);
console.log(removedFirst);
console.log(groupA);
console.log(allGroups);
console.log(groupString);
console.log(reservedSeats);
console.log(students.join(", "))




