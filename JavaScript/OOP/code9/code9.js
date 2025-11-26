class FitnessAnalytics {
    constructor(data) {
        if (!data || data.length === 0) {
            throw new Error("Workout dataset cannot be empty");
        }
        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(d => d.steps > 7000);
    }

    getAverageCalories() {
        const total = this.data.reduce((sum, d) => sum + d.calories, 0);
        return total / this.data.length;
    }

    getUserSummary() {
        return this.data.map(d => 
            `${d.user} walked ${d.steps} steps and burned ${d.calories} calories.`
        );
    }
}

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    const analytics = new FitnessAnalytics(workoutData);

    console.log("Active Users:", analytics.getActiveUsers());
    console.log("Average Calories:", analytics.getAverageCalories());
    console.log("User Summary:", analytics.getUserSummary());

} catch (e) {
    console.log("Error:", e.message);
}
