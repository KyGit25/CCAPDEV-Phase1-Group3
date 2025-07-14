const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const reservationRoutes = require('./routes/reservation');
app.use('/reservation', reservationRoutes);

const userRoutes = require('./routes/user');
app.use('/profile', userRoutes);

const searchRoutes = require('./routes/search');
app.use('/search', searchRoutes);
