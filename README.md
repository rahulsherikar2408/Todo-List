# React Todo List with Firebase

## Project Link
https://todo-list-react-24.netlify.app/

A dynamic Todo List application built with React and Firebase. This application allows users to manage their tasks by adding, editing, deleting, and reordering them, with real-time updates powered by Firebase Firestore.

## Features

- **Add Todos:** Users can add new tasks to the list.
- **Edit Todos:** Tasks can be edited to update the content.
- **Delete Todos:** Remove tasks from the list when they're completed or no longer needed.
- **Reorder Todos:** Move tasks up or down the list to prioritize them.
- **Real-time Updates:** All changes are reflected instantly across all devices using Firebase Firestore.

## Technologies Used

- **React:** Frontend library for building user interfaces.
- **Firebase Firestore:** NoSQL cloud database to handle real-time data.
- **HTML5 & CSS3:** For structuring and styling the application.
- **JavaScript (ES6+):** The programming language used for logic and interactivity.

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/react-todo-list-firebase.git
   cd react-todo-list-firebase
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   
3. **Create a .env file:**

   Add your Firebase configuration details to a .env file in the root of your project. Your .env file should look like this:
   
   ```env
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```
   
4. **Run the application:**
   ``` bash
   npm run dev
   ```
   
5. **Deploy (Optional):**

   You can deploy the app to platforms like Vercel, Netlify, or Firebase Hosting.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.
   
