# Event Connection Platform

## Overview

The **Event Connection Platform** fosters meaningful interactions during social gatherings. By using uniquely generated participant codes linked to wearable bands, attendees can:
- Create profiles
- Discover like-minded individuals
- Initiate connections seamlessly

This platform ensures secure user verification, simplifies in-person networking, and integrates AI to enhance user experience and compatibility insights.

---

## Features

- **Unique Code-Based Profiles:** Securely link participant codes to profiles.
- **Connection and Interaction:** Effortlessly discover and connect with like-minded individuals.
- **AI-Powered Compatibility Insights:** Gain insights into compatibility with other attendees.
- **User Verification and Privacy:** Robust user authentication and data security measures.
- **Event Organizer Dashboard:** Manage participants, monitor connections, and access event insights.
- **Gamification:** Engage users with points and rewards for interactions.
- **Comprehensive Security Measures:** Data encryption and secure token-based authentication.

---

## Tech Stack

### Frontend:
- React
- Tailwind CSS
- HTML, CSS
- Axios
- React Router DOM
- Context API
- JavaScript

### Backend:
- Express
- Mongoose
- Nodemon
- JWT
- Argon2
- CORS
- Dotenv
- Node.js
- Nodemailer

---

## Admin Panel

### Admin Panel Link:
[Admin Panel](https://socialsync-admin.netlify.app/)
### Deployed Link:
[Website](https://socialsync-1.netlify.app/)


### Instructions:

1. **Clone the Repository:**
   ```bash
   git clone (https://github.com/rajgit5/2198.git)
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd 2198
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Set Up Environment Variables:**
   - Create a `.env` file in the project root and add the necessary environment variables.
     ```plaintext
     DATABASE_URL=your-database-url
     JWT_SECRET=your-jwt-secret
     EMAIL_USER=your-email-address
     EMAIL_PASS=your-email-password
     ```
5. **Start the Backend Server:**
   ```bash
   npm run start:backend
   ```
6. **Start the Frontend Server:**
   ```bash
   npm run start:frontend
   ```

---

## User Instructions

### Registration and Profile Creation:

1. **Register for the Event:**
   - Attendees receive a unique 4-digit code on their wearable band upon registering for the event.
2. **Link Code to Profile:**
   - Use the app to link the code to your profile, which includes:
     - Name
     - Age
     - Profile Picture
     - Hobbies & Interests
     - Short Bio
     - Optional: Social media or professional links

### Connecting with Other Attendees:

1. **View Profiles:**
   - Scan the code or manually enter it into the app to view another participant’s profile.
2. **Send Connection Requests:**
   - If interested in someone, send a "Let's Connect" request via the app.
3. **Accept Connection Requests:**
   - Both participants must accept the request before they can chat.
4. **Book a Date:**
   - Use the app to book a date at a nearby location or venue integrated into the platform.
   - Enjoy pre-negotiated discounts at partner venues for event attendees.
---

## License

This project is licensed under the [MIT License](LICENSE).

---
