// filepath: credit-card-validator/credit-card-validator/src/index.js

const express = require('express');
const { validateCard } = require('./utils/cardValidator');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/validate-card', (req, res) => {
    const { cardNumber } = req.body;

    if (!cardNumber) {
        return res.status(400).json({ error: 'Card number is required' });
    }

    const cardBrand = validateCard(cardNumber);

    if (!cardBrand) {
        return res.status(400).json({ error: 'Invalid card number' });
    }

    return res.json({ brand: cardBrand });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});