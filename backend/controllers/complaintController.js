const Complaint = require('../models/Complaint');

exports.createComplaint = async (req, res) => {
    const { text } = req.body;
    const file = req.file ? req.file.path : null;
    const complaint = await Complaint.create({ text, file });
    res.json(complaint);
};

exports.getAllComplaints = async (req, res) => {
    const complaints = await Complaint.find();
    res.json(complaints);
};

exports.resolveComplaint = async (req, res) => {
    await Complaint.findByIdAndUpdate(req.params.id, { status: 'resolved' });
    res.json({ message: 'Complaint resolved' });
};
