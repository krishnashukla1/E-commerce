// server.js
const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 5000; // Choose a port for your backend

app.use(cors()); // Enable CORS for all routes

const products = [
    { id: 1, name: 'Patanjali Chyawanprash', price: 300.99, image: 'https://images.apollo247.in/pub/media/catalog/product/P/A/PAT0254_1-AUG23_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w', description: 'An ancient ayurvedic herbal formulation with many health benefits', quantity: 1 },
    { id: 2, name: 'Patanjali Pachak Sodhit', price: 149.99, image: 'https://i0.wp.com/jalaramayurveda.com/wp-content/uploads/2021/08/Patanjali-Pachak-Shodhit-Harad-100-Gm.png?fit=900%2C900&ssl=1', description: 'Digestive products range helps soothe common stomach', quantity: 1 },
    { id: 3, name: 'Patanjali Honey', price: 199.99, image: 'https://assets.truemeds.in/Images/ProductImage/TM-PANG1-000208/patanjali-honey-500-gm_patanjali-honey-500-gm--TM-PANG1-000208_1.png', description: 'Minimal processing to retain nutritional benefits', quantity: 1 },
    { id: 4, name: 'Patanjali Aloe Vera Gel', price: 250.00, image: 'https://www.patanjaliayurved.net/assets/product_images/400x500/17395051310-01(2).webp', description: 'Natural aloe vera gel for skin and hair care', quantity: 1 },
    { id: 5, name: 'Patanjali Dant Kanti Toothpaste', price: 80.50, image: 'https://www.patanjaliayurved.net/assets/product_images/400x500/1739858231DantKantiNatural100g-1.webp', description: 'Herbal toothpaste for strong teeth and healthy gums', quantity: 1 },
    { id: 6, name: 'Patanjali Amla Juice', price: 180.75, image: 'https://www.patanjaliayurved.net/assets/product_images/400x500/1690962063AmlaJuice500ml1.png', description: 'Pure amla juice, rich in vitamin C and antioxidants', quantity: 1 },
    { id: 7, name: 'Patanjali Kesh Kanti Shampoo', price: 120.00, image: 'https://images.apollo247.in/pub/media/catalog/product/k/e/kes0069_1-april3.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w', description: 'Herbal shampoo for healthy and shiny hair', quantity: 1 },
    { id: 8, name: 'Patanjali Cow Ghee', price: 550.00, image: 'https://m.media-amazon.com/images/I/614DT5y3VHL.jpg', description: 'Pure cow ghee, rich in nutrients and flavor', quantity: 1 },
    { id: 9, name: 'Patanjali Divya Peya Tea', price: 90.25, image: 'https://www.patanjaliayurved.net/assets/product_images/400x500/1689752234DivyaHerbalTea50g1.png', description: 'Herbal tea for a refreshing and healthy beverage', quantity: 1 },
    { id: 10, name: 'Patanjali Tejus Tailum Oil', price: 220.00, image: 'https://cdn.zeptonow.com/production/tr:w-640,ar-1021-1021,pr-true,f-auto,q-80/cms/product_variant/6063d6db-8a27-4378-83bc-b376d61ba914.jpeg', description: 'Ayurvedic oil for body massage and relaxation', quantity: 1 },
    { id: 11, name: 'Patanjali Multani Mitti Face Pack', price: 60.00, image: 'https://www.patanjaliayurved.net/assets/product_images/400x500/17416755091.webp', description: 'Natural multani mitti face pack for clear and glowing skin', quantity: 1 },
    { id: 12, name: 'Patanjali Triphala Churna', price: 110.50, image: 'https://www.patanjaliayurved.net/assets/blog_images/Triphala_Churna.png', description: 'Ayurvedic herbal powder for digestive health', quantity: 1 },
    { id: 13, name: 'Patanjali Rose Water', price: 70.00, image: 'https://images.apollo247.in/pub/media/catalog/product/p/a/pat0376_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w', description: 'Pure rose water for skin toning and refreshment', quantity: 1 },
    { id: 14, name: 'Patanjali Oats', price: 160.00, image: 'https://www.patanjaliayurved.net/assets/product_images/400x500/1708335712oats500g1.png', description: 'Healthy and nutritious oats for a balanced breakfast', quantity: 1 },
    { id: 15, name: 'Patanjali Mustard Oil', price: 280.00, image: 'https://bisarga.com/wp-content/uploads/2021/06/61b7y3Fz1bL._SX425_.jpg', description: 'Pure mustard oil for cooking and massage', quantity: 1 }
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});