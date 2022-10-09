import React, { FC } from 'react'
import { Personne } from '../interfaces/interfaces'
import { Button } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';

type PostProps = {
  user: Personne
  onDelete:(id:number)=>void
}
const PostOne: FC<PostProps> = ({ user,onDelete }) => {
  return (
    <>
      <td >{user.id}</td>
      <td>{user.nom}</td>
      <td>{user.prenom}</td>
      <td>{user.age}</td>
      <td>{new Date(user.test).toLocaleDateString('Fr')}</td>
      <td>
        <Button variant="light" size="sm" onClick={()=>onDelete(user.id)}><Icon.XCircleFill color="red" size={20} /></Button>
        &nbsp;&nbsp;
        <Button variant="light" size="sm" onClick={()=>onDelete(user.id)}><Icon.Pencil color="#ffc107" size={20}/></Button>

        </td>
    </>
  )
}

export default PostOne
