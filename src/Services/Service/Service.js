import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id,pack,click,time,team_member,price} = service;
    const navigate = useNavigate();
    const navigateCheck= id =>{
navigate(`/checkout/${id}`)
    }
    return (
        <div className='col-md-4'>
       <div className="card text-center">
  <div className="card-header h3">
    {pack}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item bg-success text-light h2">{price} TK</li>
    <li className="list-group-item">Total Clicks: {click}</li>
    <li className="list-group-item">Time: {time} Hours</li>
    <li className="list-group-item">Members: {team_member}</li>
    <li className="list-group-item"><button onClick={()=>navigateCheck(id)} className='btn btn-success'>Order Now</button></li>

  </ul>
</div>
        </div>
    );
};

export default Service;