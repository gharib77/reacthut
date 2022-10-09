import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../contexts/DataContext'
import { Container, Table,Row,Button,Modal } from 'react-bootstrap'
import PostOne from './PostOne'
import ReactPaginate from 'react-paginate'
import FormAddUser from './FormAddUser'
import "../composants/users.css"
import { Personne } from '../interfaces/interfaces'
const Users = () => {
  const { state, dispatch } = useContext(DataContext)
  const [show,setShow]=useState(false)
  const { users } = state
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  

  const onDelete = (id: number) => {
    dispatch({ type: "DELETE", payload: id })
    setCurrentPage(1)
  }
  //start pagination
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  //const [startIndexPage, setStartIndexPage] = useState(0)
  const [itemsPerPage] = useState(12)
  const lastIndexPage = currentPage * itemsPerPage
  const startIndexPage = lastIndexPage - itemsPerPage

  useEffect(() => {
    setPageCount(Math.ceil(users.length / itemsPerPage))
  }, [users.length, itemsPerPage])
  // end pagination
  const handlePageClick = ({selected}: { selected: number }): void => {
    console.log(selected)
    setCurrentPage(selected+1)
  }
  return (
    <>
        <Container className='mt-5'>
          <Row className='no-gutters justify-content-end'>
            <Button variant="success mb-2" size="sm" onClick={handleShow} >Add User</Button>
          </Row>
          <Table striped bordered size="sm">
            <thead>
              <tr>
                <th>id</th>
                <th>nom</th>
                <th>prenom</th>
                <th>age</th>
                <th>date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users && users.slice(startIndexPage,lastIndexPage).map((user:Personne) => (
                <tr key={user.id}>
                  <PostOne user={user} onDelete={onDelete} />
                </tr>
              ))}
            </tbody>
          </Table>
          <ReactPaginate
                      previousLabel={"prev"}
                      nextLabel={"next"}
                      breakLabel={"..."}
                      pageCount={pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={2}
                      onPageChange={handlePageClick}
            
                      containerClassName={'pagination pagination-sm justify-content-center'}
                      pageClassName={'page-item'}
                      pageLinkClassName={'page-link'}
                      previousClassName={'page-item'}
                      previousLinkClassName={'page-link'}
                      nextClassName={'page-item'}
                      nextLinkClassName={'page-link'}
                      breakClassName={'page-item'}
                      breakLinkClassName={'page-link'}
                      activeClassName={'active'}
                      forcePage={currentPage-1}
            



          />
        </Container>

        <Modal show={show} onHide={handleClose} backdrop="static"  keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Form d'Ajout</Modal.Title>
          </Modal.Header>
          <Modal.Body><FormAddUser /></Modal.Body>
          <Modal.Footer className='d-flex justify-content-center'>
            <Button variant="danger" size="sm" onClick={handleClose}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </>

  )
}

export default Users
