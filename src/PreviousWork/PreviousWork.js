import React from 'react';
import { Card } from 'react-bootstrap';

const PreviousWork = ({work}) => {
    const {id,event,img} = work;
    return (
        <div className='col-md-4'>
      <Card>
  <Card.Img variant="top w-100" src={img} />
  <Card.Body>
    <Card.Title>{event} Event</Card.Title>

  </Card.Body>
</Card>
        </div>
    );
};

export default PreviousWork;