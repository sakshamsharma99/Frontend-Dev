"use strict";



// Input
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

// Outputs / collectors
const cleanRecords = [];   
const errors = [];         
const under18 = [];

// Loop and parse
for (let i = 0; i < rawData.length; i++) {
  const raw = rawData[i];

  try {
  
    if (typeof raw !== "string") {
      throw new Error("Input is not a string");
    }

    // Try parsing JSON
    let obj;
    try {
      obj = JSON.parse(raw);
    } catch (parseErr) {
      throw new Error("Invalid JSON");
    }

    // Validate required keys
    const missingKeys = [];
    if (!Object.prototype.hasOwnProperty.call(obj, "user")) missingKeys.push("user");
    if (!Object.prototype.hasOwnProperty.call(obj, "age")) missingKeys.push("age");

    if (missingKeys.length > 0) {
      throw new Error("Missing key(s): " + missingKeys.join(", "));
    }

    // Convert age to Number
    const ageNum = Number(obj.age);
    if (Number.isNaN(ageNum)) {
      throw new Error("Invalid age value (cannot convert to Number)");
    }

    // Build cleaned record (ensure types are normalized)
    const cleaned = {
      user: String(obj.user),
      age: ageNum
    };

    // Push to cleanRecords
    cleanRecords.push(cleaned);

    // Bonus: collect under-18 users
    if (ageNum < 18) {
      under18.push(cleaned);
    }

  } catch (err) {
    // Record the error with line number (1-based)
    const entry = {
      line: i + 1,
      raw: raw,
      message: err.message
    };
    errors.push(entry);

    // Also log to console in readable format
    console.error(`Line ${entry.line} — ${entry.message}:`, entry.raw);
  }
}

// Final formatted reports
console.log("\n=== CLEAN RECORDS ===");
console.table(cleanRecords);

console.log("\n=== ERRORS ===");
console.table(errors);

console.log("\n=== UNDER 18 USERS (BONUS) ===");
console.table(under18);

console.log("\nSummary:");
console.log("Total input lines:", rawData.length);
console.log("Valid records:", cleanRecords.length);
console.log("Invalid records:", errors.length);
console.log("Under-18 count:", under18.length);
