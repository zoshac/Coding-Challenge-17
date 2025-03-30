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


// Task 2 Creating a Sales Rep task 
class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
        console.log(`Sales Representative: $${this.name}`);
    }
    // addidng client 
addClient(Customer) {
    if (customer instanceof Customer) {
        this.clients.push(customer);
        this.console.log(`${customer.name} added to client list.`)
    } else {
        console.error ("Invalid Client")
    }
}
// creating client total
getClientTotal(name) {
const client = this.clients.find(c => c.name === name);
if (client) {
    const total = client.getTotalSpent();
    console.log(`${this.name} is ${client.name}'s client and has spent $${total}`);
    return total; 
} else {
    console.error(`Client name not found.`);
    return 0;
}
}
}

// Test Cases 
const customer1 = new Customer("Nicholas", "nicholaspreston@outlook.com");
customer1.addPurchase(20);
customer1.addPurchase(35);

const customer2 = new Customer("Chris", "chrispreston@email.com");
customer2.addPurchase(50);

const salesRep = new SalesRep("Tasha");
salesRep.addClient(customer1);
salesRep.addClient(customer2);

salesRep.getClientTotal("Nicholas");  
salesRep.getClientTotal("Chris"); 


// Task 3 Vip Customer 

//creating VIP customer
class VIPcustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel
        console.log(`VIP CUSTOMER: ${this.name} (${this.vipLevel})`);
    }
//adding loyalty bonus
getTotalSpent() {
    const baseTotal = this.purchaseHistory.reduce((sum, amount) => sum + amount, 0);
    const bonus = baseTotal * 0.10;
    const totalWithBonus = baseTotal + bonus; 

    console.log(`${this.name} (${this.vipLevel}) total with 10% bonus: $${totalWithBonus.toFixed(2)}`);
    return totalWithBonus;
}
}

//Testing Testing 
const vip = new VIPCustomer("Nicholas", "nicholaspreston@outlook.com", "Platinum");
vip.addPurchase(100);
vip.addPurchase(50);
vip.getTotalSpent();  

//Task 4: Build a Client Report System

const customer1 = new Customer("Brenda", "Brenda@email.com");
customer1.addPurchase(270);
customer1.addPurchase(250);

const customer2 = new VIPCustomer("Jada", "jada@email.com", "Gold");
customer2.addPurchase(305);
customer2.addPurchase(350);

const customer3 = new Customer("Lila", "lila@email.com");
customer3.addPurchase(175);

const customer4 = new VIPCustomer("Maya", "maya@email.com", "Platinum");
customer4.addPurchase(640);

// putting customers in an array
const allCustomers = [customer1, customer2, customer3, customer4];

const totalRevenue = allCustomers.reduce((sum, customer) => {
    return sum + customer.getTotalSpent();
}, 0);
console.log(`Total Revenue: $${totalRevenue.toFixed(2)}`);

//filter for over $500
const highSpenders = allCustomers.filter(customer => customer.getTotalSpent() > 500);
console.log(" High-Spending Customers (Over $500):");
highSpenders.forEach(c => console.log(`- ${c.name}: $${c.getTotalSpent().toFixed(2)}`));

// customer summary 
const customerSummary = allCustomers.map(customer => {
    return {
        name: customer.name,
        totalSpent: customer.getTotalSpent()
    };
});
console.log("Customer Summary:");
console.log(customerSummary);
