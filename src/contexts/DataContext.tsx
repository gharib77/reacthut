import React, { createContext } from "react";
import {UserState1 } from "../interfaces/interfaces";
import { UserType } from "./userReducer";

type DataContextProps={
  state:UserState1
  dispatch:React.Dispatch<UserType>
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps)