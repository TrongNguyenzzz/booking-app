import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import "./reservation.css";
import {Row, Col} from "react-bootstrap";

const ReserveCard = (props) => {
    return (
        <Card className="project-card-view">
            <Card.Img className="card-img" variant="top" src={props.photo} alt="card-img" />
          <Card.Body className="card-body">
            <Card.Title className="card-hotel">Hotel: {props.hotel}</Card.Title>  
            <Card.Text className="card-roomNum">Room number: {props.roomNumber} </Card.Text>
            <Row className="row">
                <Col>
                    <Card.Text className="card-roomNum">Start date: {props.start} </Card.Text> 
                </Col>
                <Col className="endCol">
                    <Card.Text className="card-roomNum">End date: {props.end} </Card.Text>
                </Col>

                <Col className="endCol">
                    <Card.Text className="card-roomNum">Total price: ${props.price} </Card.Text>
                </Col>
            </Row>
            <Button className="cancel"> Cancel reservation </Button>
        </Card.Body>
      </Card> 
      );
}

export default ReserveCard;
