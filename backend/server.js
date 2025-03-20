const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const complaintRoutes = require('./routes/complaintRoutes');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({ 
    origin: 'http://localhost:3000', // Frontend URL during dev
    credentials: true 
}));

// Static folder for uploaded files
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/complaint', complaintRoutes);
app.use('/api/auth', authRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
