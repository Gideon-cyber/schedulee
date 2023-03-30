import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  events: {
    event_id: number;
    title: string;
    start: string | Date;
    end: string | Date;
    admin_id: number;
    description: string;
    employeeName: string;
  }[];
};

const initialState: initialState = {
  events: [
    {
      event_id: 1,
      title: "Event 1",
      start: new Date(new Date(new Date().setHours(9)).setMinutes(30)),
      end: new Date(new Date(new Date().setHours(10)).setMinutes(30)),
      admin_id: 1,
      description: "new event",
      employeeName: "John",
    },
    {
      event_id: 2,
      title: "Event 2",
      start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
      end: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
      admin_id: 2,
      description: "new event",
      employeeName: "Gideon",
    },
    {
      event_id: 3,
      title: "Event 3",
      start: new Date(
        new Date(new Date(new Date().setHours(9)).setMinutes(0)).setDate(
          new Date().getDate() - 1
        )
      ),
      end: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
      admin_id: 1,
      description: "new event",
      employeeName: "John",
    },
    {
      event_id: 4,
      title: "Event 4",
      start: new Date(
        new Date(new Date(new Date().setHours(9)).setMinutes(0)).setDate(
          new Date().getDate() - 2
        )
      ),
      end: new Date(
        new Date(new Date(new Date().setHours(10)).setMinutes(0)).setDate(
          new Date().getDate() - 2
        )
      ),
      admin_id: 2,
      description: "new event",
      employeeName: "Gideon",
    },
  ],
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addToEvents: (state, action) => {
      state.events.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToEvents } = eventSlice.actions;

export default eventSlice.reducer;
