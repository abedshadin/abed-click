import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {pack,click,time,team_member,price,img,desc} = service;
    const navigate = useNavigate();
    const navigateCheck= (pack) =>{
navigate(`/checkout/${pack}`)
    }
    return (
        <div className='col-md-4'>
       <div className="card text-center">
  <div className="card-header h3">
    {pack}
  </div>
  <ul className="list-group list-group-flcush">
    <li className="list-group-item"><img src={img} className='w-25' alt="" /> </li>
    <li className="list-group-item bg-success text-light h2">{price} TK</li>
    <li className="list-group-item">Total Clicks: {click}</li>
    <li className="list-group-item">Time: {time} Hours</li>
    <li className="list-group-item">Members: {team_member}</li>
    <li className="list-group-item"> {desc}</li>
    <li className="list-group-item"><button onClick={()=>navigateCheck(pack)} className='btn btn-success'>Order Now</button></li>

  </ul>
</div>
        </div>
    );
};

export default Service;