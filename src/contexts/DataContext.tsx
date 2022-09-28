import React, { createContext } from "react";
import {StatePost } from "../interfaces/interfaces";
import { UserType } from "./userReducer";

type DataContextProps={
  state:StatePost
  dispatch:React.Dispatch<UserType>
}

export const DataContext = createContext<DataContextProps>({} as DataContextProps)