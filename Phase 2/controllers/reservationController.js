const Reservation = require('../models/Reservation');
const Lab = require('../models/Lab');
const User = require('../models/User');

/**
 * Create reservation (student or technician)
 */
exports.createReservation = async (req, res) => {
  try {
    const { labId, seatNumber, startTimes, isAnonymous } = req.body;

    const slots = startTimes.map((start) => {
      const startTime = new Date(start);
      const endTime = new Date(startTime.getTime() + 30 * 60 * 1000);
      return { startTime, endTime };
    });

    const reservations = slots.map(({ startTime, endTime }) => ({
      user: req.session.userId,
      lab: labId,
      seatNumber,
      startTime,
      endTime,
      isAnonymous: isAnonymous === 'on'
    }));

    await Reservation.insertMany(reservations);

    res.redirect('/dashboard');
  } catch (err) {
    console.error(err);
    res.status(500).send('Reservation failed');
  }
};

/**
 * Edit reservation (student or technician)
 */
exports.editReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const { seatNumber, startTime } = req.body;

    const reservation = await Reservation.findById(id);
    if (!reservation) return res.status(404).send('Not found');

    const isOwner = reservation.user.toString() === req.session.userId;
    const isTech = req.session.role === 'technician';
    if (!isOwner && !isTech) return res.status(403).send('Forbidden');

    reservation.seatNumber = seatNumber;
    reservation.startTime = new Date(startTime);
    reservation.endTime = new Date(reservation.startTime.getTime() + 30 * 60 * 1000);
    await reservation.save();

    res.redirect('/dashboard');
  } catch (err) {
    console.error(err);
    res.status(500).send('Edit failed');
  }
};

/**
 * Delete reservation (by student or technician with 10-min grace)
 */
exports.deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;

    const reservation = await Reservation.findById(id);
    if (!reservation) return res.status(404).send('Not found');

    const now = new Date();
    const isOwner = reservation.user.toString() === req.session.userId;
    const isTech = req.session.role === 'technician';
    const withinGrace = now >= reservation.startTime && now <= new Date(reservation.startTime.getTime() + 10 * 60 * 1000);

    if (!isOwner && !(isTech && withinGrace)) return res.status(403).send('Not authorized');

    await Reservation.deleteMany({ user: reservation.user, startTime: reservation.startTime });
    res.redirect('/dashboard');
  } catch (err) {
    console.error(err);
    res.status(500).send('Delete failed');
  }
};

/**
 * View reservations for logged-in user
 */
exports.viewMyReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({ user: req.session.userId }).populate('lab');
    res.render('dashboard/student', { reservations });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error loading reservations');
  }
};
