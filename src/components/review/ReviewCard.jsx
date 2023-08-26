import React from "react";
import { Card } from "react-bootstrap";
import "./review.css";
import {Row, Col} from "react-bootstrap";

const ReviewCard = (props) => {
    return (
        <Card className="review-card">
            <Card.Img className="card-img1" variant="top" src={"https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"} alt="" />
          <Card.Body className="review-body">
            <Row className="row1">
                <Col>
                    <Card.Text className="card-user"> <p className="temp">User</p> {props.user} </Card.Text> 
                </Col>
                <Col className="endCol1">
                    <Card.Text className="card-user"> <p className="temp">Rate</p> {props.rate} </Card.Text>
                </Col>
            </Row>

            <Row className="row2">
                <Col>
                    <Card.Text className="card-user"> <p className="temp">Comment</p> {props.comment} </Card.Text>
                </Col>
            </Row>
        </Card.Body>
      </Card> 
      );
}

export default ReviewCard;