
export interface User{
  id:number;
  nom:string;
  age:number
}

export  interface UserState{
  users:User[],
  isLoading:boolean
}

export interface Post{
  userId:number
  id:number
  title:string
  body:string
}
export interface StatePost{
  posts:Post[],
  compteur:number
}