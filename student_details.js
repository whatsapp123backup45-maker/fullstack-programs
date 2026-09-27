const fs = require("fs");

// Student details
const students = [
    {
        name: "Anu",
        email: "anu@gmail.com",
        marks: 85
    },
    {
        name: "Rahul",
        email: "rahul@gmail.com",
        marks: 78
    },
    {
        name: "Meera",
        email: "meera@gmail.com",
        marks: 92
    }
];


// Convert JavaScript object into JSON string
const jsonData = JSON.stringify(students, null, 2);


// Write student details to JSON file
fs.writeFile("students.json", jsonData, (err) => {

    if (err) {
        console.log("Error writing file:", err);
        return;
    }

    console.log("Student details stored successfully.");


    // Read student details from JSON file
    fs.readFile("students.json", "utf8", (err, data) => {

        if (err) {
            console.log("Error reading file:", err);
            return;
        }


        // Convert JSON string back to JavaScript object
        const studentsData = JSON.parse(data);


        console.log("\nStudent Details:");
        console.log("-------------------------");


        studentsData.forEach((student, index) => {

            console.log("Student " + (index + 1));
            console.log("Name  :", student.name);
            console.log("Email :", student.email);
            console.log("Marks :", student.marks);
            console.log("-------------------------");

        });

    });

});