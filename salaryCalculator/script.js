



class WageCalculator {
    constructor() {
        this.basicWage = 0;
        this.normalRate = 0;
        this.doubleRate = 0;
        this.tripleRate = 0;
        this.grossWage = 0;
        // Other properties as needed
    }

    // Method to initialize event listeners
    initialize() {
        document.getElementById('wageForm').addEventListener('input', this.calculateWages.bind(this));
    }

    calculateWages() {
        // Get form values
        this.basicWage = parseFloat(document.getElementById('basicWage').value) || 0;
        this.normalRate = parseFloat(document.getElementById('normalRate').value) || 0;
        this.doubleRate = parseFloat(document.getElementById('doubleRate').value) || 0;
        this.tripleRate = parseFloat(document.getElementById('tripleRate').value) || 0;
        
        // Other calculations as needed

        // Update UI
        document.getElementById('hourlyPay').textContent = this.calculateHourlyPay().toFixed(2);
        document.getElementById('epfPay').textContent = this.epfContribution().toFixed(2);
        document.getElementById('socsoPay').textContent = this.socsoContribution().toFixed(2);
        document.getElementById('netPay').textContent = this.netPayAll().toFixed(2);
        document.getElementById('normalPay').textContent = this.normalOTPay().toFixed(2);
        document.getElementById('doublePay').textContent = this.doubleOTPay().toFixed(2);
        document.getElementById('triplePay').textContent = this.tripleOTPay().toFixed(2);
        document.getElementById('grossPay').textContent = this.grossWages().toFixed(2);
        // Update other UI elements
    }

    calculateHourlyPay() {
        return this.basicWage / (22 * 8); // Assuming 22 working days and 8 hours per day
    }

    epfContribution() {
        return this.basicWage * 0.12;
    }

    socsoContribution() {
        return this.basicWage * 0.0175;
    }

    netPayAll() {
        return this.basicWage - this.epfContribution() - this.socsoContribution();
    }

    // switch (key) {
    //     case value:
            
    //         break;
    
    //     default:
    //         break;
    // }
    normalOTPay(){
        return this.calculateHourlyPay() * this.normalRate * 1.5;
    }

    doubleOTPay(){
        return this.calculateHourlyPay() * this.doubleRate * 2;
    }

    tripleOTPay(){
        return this.calculateHourlyPay() * this.tripleRate * 2;
    }

    grossWages(){
        return this.netPayAll() + this.normalOTPay() + this.doubleOTPay() + this.tripleOTPay();
    }





    // Other methods for overtime calculation, etc.
}

// Instantiate the WageCalculator class
const wageCalculator = new WageCalculator();
wageCalculator.initialize(); // Initialize event listeners