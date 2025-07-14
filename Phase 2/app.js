const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const reservationRoutes = require('./routes/reservation');
app.use('/reservation', reservationRoutes);
