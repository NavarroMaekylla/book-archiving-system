import { useState } from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddBook from "./AddBook";
import BooksList from "./BookList";
import { useUserContext } from "../context/userContext";


function Dashboard() {
  const [bookId, setBookId] = useState("");
  const { user, logoutUser } = useUserContext();

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  };
 
  return (
    <>
    
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Book System</Navbar.Brand>       
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
      <div>
      <h2>Welcome {user.displayName}!</h2>
      <button onClick={logoutUser}>Log out</button>
    </div>
        <Row>
          <Col>
            <AddBook id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList getBookId={getBookIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
