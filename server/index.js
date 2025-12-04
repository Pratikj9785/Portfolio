const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const portfolioRoutes = require('./routes/portfolio');

app.use(cors());
app.use(express.json());

app.use('/api/portfolio', portfolioRoutes);

// Basic route
app.get('/', (req, res) => {
    res.send('Portfolio API is running');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Only listen if not running on Vercel (Vercel handles the server)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
