This project is a Hotel Booking Frontend Application developed using React.js. The application allows users to enter their booking details such as name, email, phone number, number of adults, children, check-in and check-out dates, and rooms. It communicates with a backend API to fetch existing booking details and submit new bookings.

Features
Responsive Form: The booking form is user-friendly and works seamlessly across various devices.
Dynamic Room Selector: Users can increment or decrement the number of rooms dynamically.
Form Validation: Ensures required fields are filled and valid inputs are provided.
API Integration: Fetches existing bookings and posts new bookings to the backend.
State Management: Utilizes React's useState for managing form inputs and Redux for global state updates.
Styling: CSS for modern, clean, and responsive design.

Technologies Used
React.js: For building the user interface.
Redux: For state management.
JavaScript (ES6): For logic and functionality.
CSS: For styling the application.
Bootstrap Icons: For adding intuitive icons.
REST API: Communicates with the backend API hosted at https://jsonplaceholder.typicode.com/posts.


How to Use
Fill the Form:

Enter the required fields: Name, Email, Phone, Adults, Children, Check-In, and Check-Out Dates.
Adjust the number of rooms using the plus and minus buttons.
Submit Booking:

Once all fields are filled, click the Submit Button (showing the total amount).
Booking data will be sent to the backend API.
Fetch Bookings:

The app automatically fetches and displays the latest booking data upon load.
