const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const labRoutes = require('./routes/lab');
app.use('/lab', labRoutes);

const reservationRoutes = require('./routes/reservation');
app.use('/reservation', reservationRoutes);

const userRoutes = require('./routes/user');
app.use('/profile', userRoutes);

const searchRoutes = require('./routes/search');
app.use('/search', searchRoutes);
