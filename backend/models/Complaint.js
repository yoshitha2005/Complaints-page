const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true,
        trim: true
    },
    file: {
        type: String, // Stores file path
        default: null
    },
    fileType: {
        type: String,
        enum: ['image', 'audio', 'text'],
        default: 'text'
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'resolved'],
        default: 'pending'
    }
}, { timestamps: true });

module.exports = mongoose.model('Complaint', complaintSchema);
