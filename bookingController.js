// controllers/bookingController.js
const Booking = require('../models/Booking');

// Create a new booking
exports.createBooking = async (req, res) => {
   try {
      const newBooking = new Booking(req.body);
      await newBooking.save();
      res.status(201).json(newBooking);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
   try {
      const bookings = await Booking.find();
      res.status(200).json(bookings);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

// Get booking by ID
exports.getBookingById = async (req, res) => {
   try {
      const booking = await Booking.findById(req.params.id);
      if (!booking) return res.status(404).json({ message: 'Booking not found' });
      res.status(200).json(booking);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

// Update booking
exports.updateBooking = async (req, res) => {
   try {
      const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedBooking) return res.status(404).json({ message: 'Booking not found' });
      res.status(200).json(updatedBooking);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

// Delete booking
exports.deleteBooking = async (req, res) => {
   try {
      const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
      if (!deletedBooking) return res.status(404).json({ message: 'Booking not found' });
      res.status(200).json({ message: 'Booking deleted' });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};
