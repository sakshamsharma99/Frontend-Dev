class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance < 0) {
            throw new Error("Invalid distance for trip");
        }

        const ratePerKm = 12;
        return this.distance * ratePerKm;
    }
}

const user = new User("Pratik", 4.8);
const driver = new Driver("Aman", 4.9, "Sedan");

const trip1 = new Trip("Airport", "City Center", 15);
const trip2 = new Trip("Mall", "Home", -5);

try {
    console.log("Fare for Trip 1:", trip1.calculateFare());
} catch (e) {
    console.log("Error:", e.message);
}

try {
    console.log("Fare for Trip 2:", trip2.calculateFare());
} catch (e) {
    console.log("Error:", e.message);
}
