class DataSlider {
    constructor(containerId, items, interval = 3000) {
        this.container = document.getElementById(containerId);
        this.items = items;
        this.index = 0;
        this.interval = interval;
        this.init();
    }

    init() {
        this.container.classList.add('data-slider');
        this.render();
        this.start();
    }

    render() {
    const item = this.items[this.index]; // Example: "a***@o***.com deposited "

    // Extract email + amount using split or regex
    const email = item.split(' deposited ')[0] || 'Unknown';
    const amount = item.split(' deposited ')[1] || 'USDT0';

    this.container.innerHTML = `
        <div class="slide-item">
            <span>${email} deposited</span>
            <span class="amount-badge">${amount}</span>
        </div>
    `;
}


    start() {
        setInterval(() => {
            this.index = (this.index + 1) % this.items.length;
            this.render();
        }, this.interval);
    }

    static generateRandomDeposits(count = 10) {
        const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'example.com'];
        const names = ['john', 'mike', 'anna', 'sara', 'alex', 'emma', 'luke', 'olivia', 'noah', 'ava'];
        const deposits = [];

        for (let i = 0; i < count; i++) {
            const name = names[Math.floor(Math.random() * names.length)];
            const domain = domains[Math.floor(Math.random() * domains.length)];
            const amount = Math.floor(Math.random() * 1000) + 50; // USDT50 to USDT1049

            // Mask email: first letter + *** + @ + first letter of domain + *** + .com
            const maskedEmail = `${name[0]}***@${domain[0]}***.${domain.split('.')[1]}`;

            deposits.push(`${maskedEmail} deposited USDT${amount}`);
        }

        return deposits;
    }
}

export default DataSlider;

