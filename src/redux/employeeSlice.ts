import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

// Define a type for the slice state
type employeeState = {
  employees: {
    admin_id: number;
    title: string;
    mobile: string;
    avatar: string;
    color: string;
  }[];
};

// Define the initial state using that type
const initialState: employeeState = {
  employees: [
    {
      admin_id: 1,
      title: "John",
      mobile: "555666777",
      avatar: "https://picsum.photos/200/300",
      color: "#ab2d2d",
    },
    {
      admin_id: 2,
      title: "Gideon Cyber",
      mobile: "555666777",
      avatar: "https://picsum.photos/200/300",
      color: "#2dabab",
    },
  ],
};

export const employeeSlice = createSlice({
  name: "employee",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectEmployee = (state: RootState) => state.employee.employees;

export default employeeSlice.reducer;
