// Task 1 Creating a Customer Class 

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];

        console.log(`New Customer: ${this.name} (${this.email})`);
    }
    //Adding purchase amount 
addPurchase(amount) {
    if (typeof amount === "number" && amount > 0) {
        this.purchaseHistory.push(amount);
        console.log(`${this.name} made a purchase of: $${amount}`);
    } else {
        console.error("Invalid purchase amount.");
    }
}
// getting total spend 
getTotalSpent () {
const total = this.purchaseHistory.reduce((sum, amount) => sum + amount, 0);
console.log(`${this.name} has spent $${total}`);
return total;
}
}

//Testing123
const customer1 = new Customer ("Nicholas", "nicholaspreston@outlook.com");
customer1.addPurchase(55.99);
customer1.addPurchase(67.99);
customer1.getTotalSpent();

// Task 2