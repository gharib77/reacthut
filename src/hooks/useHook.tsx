import {useEffect, useState} from 'react'
import axios from "axios"
import { Post } from '../interfaces/interfaces'

export const useHook = ()=>{
  const [results,setResults]=useState<Post[]>([])
  useEffect(()=>{
    const getPosts = async ()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const data:Post[] = res.data
    setResults(data)
  }
    getPosts()
  },[])
    
  return {results}
}