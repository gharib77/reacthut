import {UserState1, Personne } from "../interfaces/interfaces";

export type UserType=
  | {type:'ADD',payload:Personne}
  | {type:'DELETE',payload:number}
  | {type:'LISTDATA',payload:UserState1}

export const userReducer = (state:UserState1,action:UserType):UserState1=>{
  switch (action.type) {
    case "ADD":
      console.log(action.payload)
      return {...state,users:[...state.users,action.payload]};
    case "DELETE":
       return {...state,users:state.users.filter(user=>user.id !== action.payload)}
    case "LISTDATA":
      return {...state,...action.payload}
    default:
      return state;
  }
}