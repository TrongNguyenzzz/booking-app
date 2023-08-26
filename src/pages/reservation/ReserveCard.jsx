import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./reservation.css";
import {Row, Col} from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReserveCard = (props) => {

    const notification = () => toast.success("Delete reservation successfully!",  {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const deleteReservation = () => {
        try{
            axios.delete(`http://54.67.36.133:5050/api/reservation/${props.reserveId}/${props.userId}`);
            notification();
        } catch(err) {}
    }

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
            {props.current && <Button className="cancel" onClick={deleteReservation}> Cancel reservation </Button>}
            <ToastContainer />
        </Card.Body>
      </Card> 
      );
}

export default ReserveCard;
