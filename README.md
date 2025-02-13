
### Getting Started

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
## STEPS 
- created a landing page with a searchbar
- Added a link to view list of all the available doctors
- i have also created a separate page to display all the doctors available to book for appointment and can book appointment using time and date picker 
- Users can enter a query in the search bar and see the filtered doctor cards.
- Used mock data for doctor information

## Appointment Management
- Implemented a calender view where users can see their scheduled appointments
- Added a modal to display detailed information about a users appointment
- Intregated global state management using zustand to dynamically  addAppointment, removeAppointment  in the calender . 
- Displayed a list of user appointments in the **Dashboard**,allowing users to cancel appointments if needed