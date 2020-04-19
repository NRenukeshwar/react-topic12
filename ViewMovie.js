import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Button } from "reactstrap";
function ViewDetail(props) {

  let { id } = useParams();

  const movie = props.movies.filter(m => m.movieId === id);
  return (
    <div className="container">
      <h4 className="text-center">Movie Details</h4>
      <Card
        body
        outline
        color="white"
        className="row col-sm-6 mx-auto"
        style={{backgroundColor:'#B2FEE3'}}
      >
        <CardHeader
          className="text-white text-center"
          style={{backgroundColor:'#29D293'}}
          tag="h4"
        >
          {movie[0].movieName}
        </CardHeader>
        <CardBody className="text-center">
          <b>Movie ID:</b> {movie[0].movieId}
          <br />
          <b>Movie Name:</b> {movie[0].movieName}
          <br />
          <b>Lead Actor:</b> {movie[0].leadActor}
          <br />
          <b>Lead Actres:</b> {movie[0].leadActress}
          <br />
          <b>Year of Release:</b> {movie[0].yearOfRelease}
          <br />
          <b>Language:</b> {movie[0].language}
          <br />
          <b>Collections:</b> {movie[0].collection}
        </CardBody>
        <Link to="/" className="text-center">
          <Button color="info">Back</Button>
        </Link>
      </Card>
    </div>
  );
}

export default ViewDetail;
