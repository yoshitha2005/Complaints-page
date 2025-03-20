const express = require('express');
const { createComplaint, getAllComplaints, resolveComplaint } = require('../controllers/complaintController');
const upload = require('../middleware/upload');

const router = express.Router();

router.post('/create', upload.single('file'), createComplaint);
router.get('/all', getAllComplaints);
router.put('/resolve/:id', resolveComplaint);

module.exports = router;
