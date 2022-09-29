import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../contexts/DataContext'
import { Container, Table,Row,Button } from 'react-bootstrap'
import PostOne from './PostOne'
import ReactPaginate from 'react-paginate'
const Users = () => {
  const { state, dispatch } = useContext(DataContext)
  const { posts } = state
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
    setPageCount(Math.ceil(posts.length / itemsPerPage))
  }, [posts.length, itemsPerPage])
  // end pagination
  const handlePageClick = ({selected}: { selected: number }): void => {
    console.log(selected)
    setCurrentPage(selected+1)
  }
  return (
    <>
        <Container className='mt-5'>
          <Row className='no-gutters justify-content-end'>
            <Button variant="success mb-2" size="sm">Add User</Button>
          </Row>
          <Table striped bordered>
            <thead>
              <tr>
                <th>id</th>
                <th>Title</th>
                <th>Body</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts && posts.slice(startIndexPage,lastIndexPage).map(post => (
                <tr key={post.id}>
                  <PostOne post={post} onDelete={onDelete} />
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
      </>

  )
}

export default Users
