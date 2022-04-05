import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Order = () => {
  const { id } = useParams();
  const { user } = useAuth();

  const [bookings, setBookings] = useState([]);
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch("/foodMenu.json")
      .then((res) => res.json())
      .then((dt) => setBookings(dt));
  }, []);

    
    useEffect(() => {
        const foundDetails = bookings?.find(booking => booking?.id === id)
        setDetails(foundDetails) 
    },[bookings, id])

  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center FoodHeading">
        Our Mission is To Fulfill Your Expectations
      </h1>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <Card>
            <Card.Img variant="top" src={details?.img} />
            <Card.Body>
                          <Card.Title>Name: { details?.name }</Card.Title>
              <Card.Text>
                {details?.desc}
              </Card.Text>
            </Card.Body>
        
          </Card>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6"></div>
      </div>
    </div>
  );
};

export default Order;
