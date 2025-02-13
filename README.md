### Getting Started

**Pre Requisits**

- Node.js and npm

### Setup Instructions

1. Clone the repository form [Github](git@github.com:Mrinal-xx-Singha/doctor_appointment.git)
2. cd doctor_appointment
3. Install dependencies

```bash

npm install

if deep peer dependencies error occur

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

- To make a doctor dashboard where doctors can login and view monthly appointment we can make a backend with jwt authentication
- We can create a protected route to allow doctor only authentication
- We can log in the user separately and store their data in a separate document
- We can create a schema to store the details of doctors in mongodb
- Can create a form for users(Patients) to fillout their symptoms and personal details

## Future Implementations and Todos

- Need to have a backend
- Can implement real time chat feature using socket.io
- Can send mails of appointment using Node mailer on submission of appointment
