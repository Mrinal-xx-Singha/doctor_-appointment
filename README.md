### Getting Started

**Pre Requisits**

- Node.js and npm

### Setup Instructions

1. Clone the repository from Github
2. cd doctor_appointment
3. Install dependencies

```bash

npm install

if legacy peer dependencies error occur

npm install --legacy-peer-deps

```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# UI
![Screenshot (337)](https://github.com/user-attachments/assets/f92e15ee-de7d-48b8-b6ca-a086d452dfd4)
![Screenshot (338)](https://github.com/user-attachments/assets/6cb814bb-48ab-40fe-9123-e76720b61fe9)
![Screenshot (339)](https://github.com/user-attachments/assets/ad83af04-5f7f-40ad-8e74-4802d3448301)
![Screenshot (340)](https://github.com/user-attachments/assets/75265b99-06b2-46eb-8830-3fc41488f97d)


## STEPS

- created a landing page with a searchbar
- Added a link to view list of all the available doctors
- Created a separate page to display all the doctors available to book for appointment
- Can book appointment using time and date picker
- Users can enter a query in the search bar and see the filtered doctor cards.
- Used mock data for doctor information

## Appointment Management

- Implemented a calender view where users can see their scheduled appointments
- Added a modal to display detailed information about a users appointment
- Intregated global state management using zustand to dynamically addAppointment, removeAppointment in the calender .
- Displayed a list of user appointments in the **Dashboard**,allowing users to cancel appointments if needed

## Note

- To make a doctor dashboard where doctors can login and view monthly appointment we can make a backend server using express
- We can create a protected route to allow doctor only authentication using jwt authentication
- We can log in the user separately and store their data in a separate document
- We can create a schema to store the list of doctors in mongodb
- We can create a form for users(Patients) to fillout their symptoms and personal details

## Future Implementations and Todos

- Can implement real time chat feature using socket.io
- Can send mails of appointment using Node mailer on submission of appointment
