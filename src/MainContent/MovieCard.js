import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const MovieCard = props => {
  const { movie } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>
          id: {movie.id} - created: {movie.created.substring(0, 10)}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem><span style={{textAlign:""}}>Status</span><span>{movie.status}</span></ListGroupItem>
        <ListGroupItem><span>Species</span><span>{movie.species}</span></ListGroupItem>
        <ListGroupItem><span>Gender</span><span>{movie.gender}</span></ListGroupItem>
        <ListGroupItem><span>Origin</span><span>{movie.origin.name}</span></ListGroupItem>
        <ListGroupItem><span>Location</span><span>{movie.location.name}</span></ListGroupItem>

     
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
