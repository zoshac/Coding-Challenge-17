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


