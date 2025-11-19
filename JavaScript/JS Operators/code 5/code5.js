let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

let secure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;

if (secure) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Test other cases
isOwnerInside = false;
secure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;
console.log("Test 2:", secure ? "Secure" : "Unsafe");
