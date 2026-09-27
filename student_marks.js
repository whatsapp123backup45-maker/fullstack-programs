const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Promise function
function checkResult(name, marks) {
    return new Promise((resolve) => {

        if (marks >= 40) {
            resolve(
                "Student Name: " + name +
                "\nMarks: " + marks +
                "\nResult: PASS"
            );
        } else {
            resolve(
                "Student Name: " + name +
                "\nMarks: " + marks +
                "\nResult: FAIL"
            );
        }

    });
}


// Async/Await function
async function displayResult(name, marks) {

    const result = await checkResult(name, marks);

    console.log("\n" + result);
}


// Get student name
rl.question("Enter student name: ", function (name) {

    // Get student marks
    rl.question("Enter marks: ", function (marks) {

        marks = Number(marks);

        displayResult(name, marks);

        rl.close();
    });

});