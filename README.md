# DLSU Lab Reservation System

A comprehensive web application for managing computer laboratory seat reservations at De La Salle University.

## Features

### User Management
- **Registration**: Users can register with DLSU email as either Student or Lab Technician
- **Login**: Secure authentication with "remember me" option (extends session by 3 weeks)
- **Profile Management**: Users can view and edit their profiles, including profile picture and description
- **Account Deletion**: Students can delete their accounts and all associated reservations

### Lab Management
- **View Labs**: Browse all available computer labs with descriptions and seat counts
- **Slot Availability**: View real-time availability for specific labs on any date/time
- **7-Day View**: Check availability for the next 7 days

### Reservation System
- **Student Reservations**: Students can reserve available seats in 30-minute intervals
- **Anonymous Reservations**: Option to make reservations anonymously
- **Multiple Slots**: Reserve multiple time slots in a single booking
- **Technician Reservations**: Lab technicians can make reservations for walk-in students
- **Edit Reservations**: Students can edit their own reservations, technicians can edit any reservation
- **Remove Reservations**: Technicians can remove no-show reservations (10-minute grace period)

### Search & Discovery
- **Search Free Slots**: Find available slots by date, time, and lab
- **Search Users**: Find users by email or description
- **User Profiles**: View public profiles and reservation history (non-anonymous)

## Technical Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **View Engine**: Handlebars (express-handlebars)
- **Frontend**: Bootstrap 5 for responsive design
- **Session Management**: Express-session for authentication

## Project Structure

```
Phase 2/
├── app.js                 # Main application file
├── package.json           # Dependencies and scripts
├── models/               # Database models
│   ├── User.js           # User model (students, technicians)
│   ├── Lab.js            # Lab model (computer labs)
│   └── Reservation.js    # Reservation model
├── controllers/          # Route controllers
│   ├── authController.js      # Authentication logic
│   ├── labController.js       # Lab management
│   ├── reservationController.js  # Reservation management
│   ├── userController.js      # User profile management
│   └── searchController.js    # Search functionality
├── routes/               # Express routes
│   ├── auth.js           # Authentication routes
│   ├── lab.js            # Lab routes
│   ├── reservation.js    # Reservation routes
│   ├── user.js           # User routes
│   └── search.js         # Search routes
├── views/                # Handlebars templates
│   ├── layouts/          # Layout templates
│   ├── partials/         # Partial templates
│   ├── auth/             # Authentication views
│   ├── lab/              # Lab views
│   ├── reservation/      # Reservation views
│   └── profile/          # Profile views
├── public/               # Static assets
│   ├── css/              # Stylesheets
│   ├── js/               # Client-side JavaScript
│   └── assets/           # Images, fonts, etc.
└── seed/                 # Database seeding
    └── seed.js           # Sample data loader
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CCAPDEV-Phases-Group3/Phase\ 2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up MongoDB**
   - Install MongoDB locally or set up MongoDB Atlas
   - Ensure MongoDB is running on `mongodb://localhost:27017/lab_reservation`
   - Or update the connection string in `app.js` and `seed/seed.js`

4. **Environment Variables (Optional)**
   Create a `.env` file in the root directory:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/lab_reservation
   SESSION_SECRET=your-secret-key
   ```

5. **Seed the database**
   ```bash
   npm run seed
   ```

6. **Start the application**
   ```bash
   npm start
   ```

   For development with auto-reload:
   ```bash
   npm run dev
   ```

7. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## Database Schema

### Users
- `email`: String (required, unique) - DLSU email address
- `password`: String (required) - User password
- `role`: String (required) - Either 'student' or 'technician'
- `profilePic`: String - Path to profile picture
- `description`: String - User description/bio
- `anonymous`: Boolean - Default anonymity preference

### Labs
- `name`: String (required, unique) - Lab name
- `description`: String - Lab description
- `seats`: Array of Numbers - Available seat numbers

### Reservations
- `user`: ObjectId (required) - Reference to User
- `lab`: ObjectId (required) - Reference to Lab
- `seatNumber`: Number (required) - Reserved seat number
- `startTime`: Date (required) - Reservation start time
- `endTime`: Date (required) - Reservation end time
- `isAnonymous`: Boolean - Whether reservation is anonymous

## Sample Data

The system includes sample data for testing:
- 5 users (3 students, 2 technicians)
- 3 computer labs (Lab A, Lab B, Lab C) with 5 seats each
- 5 sample reservations across different labs and times

## API Endpoints

### Authentication
- `GET /auth/login` - Login page
- `POST /auth/login` - Process login
- `GET /auth/register` - Registration page
- `POST /auth/register` - Process registration
- `GET /auth/logout` - Logout user

### Labs
- `GET /lab` - List all labs
- `GET /lab/:id/availability` - View lab availability

### Reservations
- `POST /reservation/create` - Create new reservation
- `POST /reservation/:id/edit` - Edit reservation
- `GET /reservation/:id/delete` - Delete reservation
- `GET /reservation/my` - View user's reservations

### User Profile
- `GET /profile` - View own profile
- `GET /profile/:id/public` - View public profile
- `GET /profile/edit` - Edit profile page
- `POST /profile/edit` - Update profile
- `GET /profile/delete` - Delete account

### Search
- `GET /search/slots` - Search available slots
- `GET /search/users` - Search users

## Features by User Role

### Students
- Register and login
- View lab availability
- Make reservations (with anonymity option)
- Edit own reservations
- View own profile and reservations
- Delete own account

### Lab Technicians
- All student features
- Make reservations for walk-in students
- Edit any reservation
- Remove no-show reservations (10-minute grace period)
- View all user profiles

## Security Features

- Session-based authentication
- Password storage (to be enhanced with hashing in future phases)
- Role-based access control
- Anonymous reservation options
- Secure session management with configurable timeout

## Future Enhancements

- Password hashing with bcrypt
- Email verification for registration
- Real-time updates with WebSockets
- File upload for profile pictures
- Advanced search and filtering
- Notification system
- Calendar integration
- Mobile responsive design improvements

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is developed as part of the CCAPDEV course at De La Salle University.