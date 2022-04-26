import React, { useState } from 'react'
import {Card} from 'react-bootstrap';
import './App.css';

function Nav(){
    const[userData,setUsers]=useState([]);
    const loadUsers=async()=>{
        const response=await fetch("https://reqres.in/api/users?page=1")
        const jsonResponse=await response.json();
        setUsers(jsonResponse.data)
    };
    return(
        <div className='content'>
            <div>
            <header className='head'>
                <h1>Awesome.</h1>
                <button className='btn btn-success' onClick={loadUsers}>Get users</button>
            </header>
            {userData.map((data) => (
                
                <Card style={{ width: '18rem' }} className='card'>
                <Card.Img variant="top" src={data.avatar} alt="Avatar"/>
                <Card.Body className='body'>
                    <Card.Title className='title'>{data.first_name}{data.last_name}</Card.Title>
                    <Card.Text className='email'>
                    {data.email}
                    </Card.Text>
                </Card.Body>
                </Card>
            ))}
            </div>
        </div>
    )
        }
export default Nav