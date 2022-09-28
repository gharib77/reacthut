import React, { FC } from 'react'
import { Post } from '../interfaces/interfaces'
import { Button } from 'react-bootstrap'
type PostProps = {
  post: Post
  onDelete:(id:number)=>void
}
const PostOne: FC<PostProps> = ({ post,onDelete }) => {
  return (
    <>
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.body}</td>
      <td><Button variant='danger' onClick={()=>onDelete(post.id)}>X</Button></td>
    </>
  )
}

export default PostOne
