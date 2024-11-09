// routes/bookingRoutes.js
const express = require('express');
const {
   createBooking,
   getAllBookings,
   getBookingById,
   updateBooking,
   deleteBooking,
} = require('../controllers/bookingController');

const router = express.Router();

router.post('/', createBooking);
router.get('/', getAllBookings);
router.get('/:id', getBookingById);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);

module.exports = router;
