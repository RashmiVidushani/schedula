🎉 Event Organizer App

A modern Event Management App built with React Native, allowing users to seamlessly create, explore, and manage events in their community. 
Integrated with Firebase Authentication and Cloud Firestore, the app provides real-time data storage, user authentication, and personalized features like favorites and event editing.

📱 Features

Authentication
- Users can Sign Up or Log In using email and password via Firebase Authentication. Authenticated users are seamlessly routed to the main dashboard.

Dashboard
- View a list of all upcoming events with clean UI, organized presentation, and options to view details, favorite, or explore.

Event Management
- 📝 Create new events by entering essential details like title, date, location, and description.
- ✏️ Edit or update your own events anytime.
- 🗑️ Delete your own events with confirmation prompts to avoid accidental deletion.

Favorites System
- ❤️ Mark events as favorites to save them to a personalized list.
- 📁 View and manage your list of favorite events.
- ❌ Remove events from favorites with confirmation alerts.

Navigation & UX
- Implemented using React Navigation for smooth screen transitions.
- Bottom tab navigation for quick access to Dashboard, Create Event, Favorites, Profile, and Settings.
- Responsive design with a consistent dark theme for an elegant, modern look.

🔧 Tech Stack

React Native – Cross-platform mobile development

Firebase Authentication – Secure user sign-up and sign-in
Firestore – Real-time NoSQL database to store user and event data
React Navigation – Multi-screen navigation with custom tab styling
Expo – For rapid development and testing

✅ Goals & Best Practices

Feature Implementation
- All core features like event creation, editing, deletion, and favorites have been fully implemented and tested.
Data Validation
- User input is validated during Sign Up, Sign In, and Event Creation/Edit to ensure clean and reliable data.
Data Handling
- All event and user data is dynamically fetched and updated from Firebase Firestore.
- Hooks and state management ensure reactive and consistent UI updates.
UI/UX Design
- Clean layout with consistent spacing, color palette, and typography.
- Responsive across various screen sizes with accessible buttons and prompts.
- Smooth and intuitive user flow across the app.

  
📸 Screenshots
Sign In Screen
<img width="304" alt="Screenshot 2025-04-11 at 7 33 32 PM" src="https://github.com/user-attachments/assets/3420b28e-b63c-49a8-9092-9a36ab137604" />

Sign Up Screen
<img width="304" alt="Screenshot 2025-04-11 at 7 33 37 PM" src="https://github.com/user-attachments/assets/1c518abe-e702-4b5d-8893-9fe2864e63d3" />

Dashboard Screen
<img width="304" alt="Screenshot 2025-04-11 at 7 31 13 PM" src="https://github.com/user-attachments/assets/28187752-09f9-4371-8a2b-3f3c24242a73" />

Create Event screen
<img width="304" alt="Screenshot 2025-04-11 at 7 31 19 PM" src="https://github.com/user-attachments/assets/e0db4aa4-88db-4b73-9934-ac46c53a6142" />

Favorites Screen
<img width="304" alt="Screenshot 2025-04-11 at 7 31 23 PM" src="https://github.com/user-attachments/assets/4fe440f6-7867-4d29-86d3-82ec891c94da" />

Settings Screen
<img width="304" alt="Screenshot 2025-04-11 at 7 31 31 PM" src="https://github.com/user-attachments/assets/04381261-fab7-42d6-9a4b-2460870fea22" />

Profile Screen
<img width="304" alt="Screenshot 2025-04-11 at 7 31 27 PM" src="https://github.com/user-attachments/assets/432e6b34-0ac3-4565-b703-b7f9d155145f" />

Event Details Screen
<img width="304" alt="Screenshot 2025-04-11 at 8 05 42 PM" src="https://github.com/user-attachments/assets/237a02f0-1b69-47ab-af4f-f01ba97c752d" />

🚀 Setup & Installation

Clone this repository:

git clone https://github.com//EventOrganizerApp.git

cd EventOrganizerApp

Install dependencies:
npm install

Run the app:
npx expo start

Make sure to set up your Firebase project and update firebaseConfig.js with your own Firebase credentials.

🙌 Contribution
Contributions are welcome! Feel free to submit a pull request or open an issue to suggest improvements or new features.
