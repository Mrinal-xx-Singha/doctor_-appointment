import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAppointmentsStore = create(
  persist(
    (set) => ({
      appointments: [],
      addAppointment: (appointment) =>
        set((state) => ({
          appointments: [...state.appointments, appointment],
        })),
      removeAppointment: (id) => {
        set((state) => ({
          appointments: state.appointments.filter((apt) => apt.id !== id),
        }));
      },
    }),
    {
      name: "appointment-storage",
      getStorage: () => localStorage,
    }
  )
);
export default useAppointmentsStore;
