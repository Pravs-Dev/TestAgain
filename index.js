import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import passport from 'passport';
import session from 'express-session';
import authRoutes from './Authentication/RouteA.js'; 
import userRoutes from './Routes/User_Routes/UserR.js'; 
import resourceRoutes from './Routes/Resource_Routes/ResourceR.js';
import resourcefileRoutes from './Routes/Resourcefile_Routes/ResourcefileR.js'
import bookingRoutes from './Routes/Booking_Routes/BookingR.js';
import notificationRoutes from './Routes/Notification_Routes/NotificationR.js';
import virtualtutoringRoutes from './Routes/VirtualTutoring_Routes/VirtualTutoringR.js';
import availabilityRoutes from './Routes/Availability_Routes/AvailabilityR.js'
import './Authentication/passport.js';
import { authenticateToken} from './tokenmiddleware.js'; 
import feedbackRoutes from './Routes/Feedback_Routes/FeedbackR.js';
import availability from './Routes/Booking_Routes/AvailabilityR.js';

const app = express();

const test = 'mongodb+srv://2456518:dEXFE6Pt36oJVqxb@cluster0.d8pfd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongoURI = 'mongodb+srv://pravirstudy:l9bCqH0MJzLQOtFl@backenddb.li8va.mongodb.net/?retryWrites=true&w=majority&appName=BackEndDB';

mongoose.connect(test, {
  serverSelectionTimeoutMS: 50000 
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use(express.json());


// Passport session setup
app.use(session({
  secret: process.env.SESSION_SECRET || 'your_session_secret',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/virtualtutoring', virtualtutoringRoutes);
app.use('/api/resourcesfile', resourcefileRoutes);
<<<<<<< Updated upstream
app.use('/api/feedback', feedbackRoutes);
app.use('/api/availability', availability);
=======
app.use('/api/availability', availabilityRoutes);
>>>>>>> Stashed changes

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/',  (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});

<<<<<<< Updated upstream
app.get('/tutor_dashboard.html', (req, res) => {
=======

app.get('/', (req, res) => {
>>>>>>> Stashed changes
  res.sendFile(path.join(__dirname, 'views', 'tutor_dashboard.html'));
});

app.get('/test',  (req, res) => {
  res.send('test');
});


const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

 
