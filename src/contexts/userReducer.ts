import {StatePost, User } from "../interfaces/interfaces";

export type UserType=
  | {type:'ADD',payload:User}
  | {type:'DELETE',payload:number}
  | {type:'LISTDATA',payload:StatePost}

export const userReducer = (state:StatePost,action:UserType):StatePost=>{
  switch (action.type) {
    case "ADD":
      return state;
    case "DELETE":
      console.log(action.payload)
      console.log({...state,posts:state.posts.filter(post=>post.id !== action.payload)})
      return {...state,posts:state.posts.filter(post=>post.id !== action.payload)}
    case "LISTDATA":
      return {...state,...action.payload};

    default:
      return state;
  }
}