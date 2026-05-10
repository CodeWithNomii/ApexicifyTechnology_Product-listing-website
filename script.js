// Array 1: Main Product List
const products = [
    {
        id: "p1",
        title: "X-Series Wireless Drone",
        category: "Electronics",
        price: "499.00",
        owner: "SkyHigh Tech",
        image: "https://images.unsplash.com/photo-1586920740199-47ce35183cfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVsZWN0cm9uaWN8ZW58MHx8MHx8fDA%3D",
        orderUrl: "https://unsplash.com/s/photos/jacket"

    },
    {
        id: "p2",
        title: "Urban Explorer Parka",
        category: "Apparel",
        price: "120.00",
        owner: "Nordic Wear",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800",
        orderUrl: "https://unsplash.com/s/photos/jacket"
    },
    {
        id: "p3",
        title: "Modernist Oak Desk",
        category: "Design",
        price: "350.00",
        owner: "Artisan Co.",
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=800",
        orderUrl: "https://unsplash.com/s/photos/desk"
    }
];

// Array 2: Deep Details List (linked by ID)
const productDetails = [
    {
        id: "p1",
        specs: ["4K Video Support", "5km Range", "Dual GPS Mode"],
        delivery: "Delivered in 3-5 Days",
        warranty: "24 Months Protection"
    },
    {
        id: "p2",
        specs: ["Waterproof Fabric", "Down Insulation", "Hidden Pockets"],
        delivery: "Next Day Delivery",
        warranty: "Lifetime Stitch Warranty"
    },
    {
        id: "p3",
        specs: ["Solid White Oak", "Cable Management", "Scratch Resistant"],
        delivery: "Ships in 1 Week",
        warranty: "5 Year structural Warranty"
    }
];

let currentIndex = 0;

// Function to update the UI
function renderProduct() {
    const item = products[currentIndex];
    
    // Elements
    document.getElementById('product-image').src = item.image;
    document.getElementById('product-title').innerText = item.title;
    document.getElementById('product-price').innerText = item.price;
    document.getElementById('product-owner').innerText = item.owner;
    document.getElementById('category-tag').innerText = item.category;
    
    // Default Description
    document.getElementById('product-desc').innerHTML = "This is a premium product built with modern standards of quality and aesthetics.";

    // Animate
    const display = document.getElementById('product-display');
    display.classList.remove('fade-in');
    void display.offsetWidth; 
    display.classList.add('fade-in');
}

// Logic for "Order Now" to show details and open tab
document.getElementById('order-btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    const currentProd = products[currentIndex];
    const details = productDetails.find(d => d.id === currentProd.id);
    
    if (details) {
        // Update Description area with Details from the second array
        const descArea = document.getElementById('product-desc');
        descArea.innerHTML = `
            <div style="font-size: 0.9rem; border-left: 3px solid #2563eb; padding-left: 15px;">
                <strong>Specs:</strong> ${details.specs.join(' • ')} <br>
                <strong>Delivery:</strong> ${details.delivery} <br>
                <strong>Warranty:</strong> ${details.warranty}
            </div>
        `;

        // Open in next tab after a tiny delay so user sees the text change
        setTimeout(() => {
            window.open(currentProd.orderUrl, '_blank');
        }, 300);
    }
});

// Controls
document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % products.length;
    renderProduct();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + products.length) % products.length;
    renderProduct();
});

// Start
renderProduct();