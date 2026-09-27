const { MongoClient } = require("mongodb");

// MongoDB connection URL
const url = "mongodb://localhost:27017";

// Create MongoDB client
const client = new MongoClient(url);

// Database name
const dbName = "EmployeeDB";

async function main() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(dbName);
        const employees = db.collection("Employee");

        // ------------------------------------------------
        // 1. ADD EMPLOYEE
        // ------------------------------------------------

        await employees.insertMany([
            {
                empid: 101,
                name: "Anu",
                department: "Computer Science",
                salary: 35000,
                email: "anu@college.edu"
            },
            {
                empid: 102,
                name: "Rahul",
                department: "Mathematics",
                salary: 32000,
                email: "rahul@college.edu"
            },
            {
                empid: 103,
                name: "Meena",
                department: "Computer Science",
                salary: 40000,
                email: "meena@college.edu"
            }
        ]);

        console.log("\nEmployees added successfully.");

        // ------------------------------------------------
        // 2. SEARCH EMPLOYEE
        // ------------------------------------------------

        const searchResult = await employees.findOne({
            empid: 101
        });

        console.log("\nSearch Result:");
        console.log(searchResult);

        // ------------------------------------------------
        // 3. UPDATE EMPLOYEE
        // ------------------------------------------------

        const updateResult = await employees.updateOne(
            {
                empid: 101
            },
            {
                $set: {
                    salary: 38000
                }
            }
        );

        console.log("\nEmployee updated successfully.");
        console.log("Modified records:", updateResult.modifiedCount);

        // Display updated employee
        const updatedEmployee = await employees.findOne({
            empid: 101
        });

        console.log(updatedEmployee);

        // ------------------------------------------------
        // 4. DELETE EMPLOYEE
        // ------------------------------------------------

        const deleteResult = await employees.deleteOne({
            empid: 102
        });

        console.log("\nEmployee deleted successfully.");
        console.log("Deleted records:", deleteResult.deletedCount);

        // ------------------------------------------------
        // DISPLAY FINAL COLLECTION
        // ------------------------------------------------

        console.log("\nFinal Employee Records:");

        const allEmployees = await employees.find().toArray();

        console.log(allEmployees);

    } catch (error) {
        console.log("Error:", error);

    } finally {
        await client.close();
        console.log("\nMongoDB connection closed.");
    }
}

main();