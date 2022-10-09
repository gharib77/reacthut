// export interface User{
//   id:number;
//   nom:string;
//   prenom:string;
//   age:number;
//   test:string;
// }
// export  interface UserState{
//   users:User[],
// }
export interface Personne{
  id:number;
  nom:string;
  prenom:string;
  age:number;
  test:string;
}

export  interface UserState1{
  users:Personne[],
}


// export interface Post{
//   userId:number
//   id:number
//   title:string
//   body:string
// }
// export interface StatePost{
//   posts:Post[],
//   compteur:number
// }