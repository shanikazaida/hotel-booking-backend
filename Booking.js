// models/Booking.js
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
   guestName: {
      type: String,
      required: true,
   },
   roomType: {
      type: String,
      required: true,
      enum: ['Single', 'Double', 'Suite'],
   },
   checkInDate: {
      type: Date,
      required: true,
   },
   checkOutDate: {
      type: Date,
      required: true,
   },
   status: {
      type: String,
      default: 'Booked',
   },
});

module.exports = mongoose.model('Booking', BookingSchema);
