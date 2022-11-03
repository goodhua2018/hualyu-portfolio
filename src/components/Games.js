import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { homeImages } from '../homeImages';

export default function Games() {
  const { tictactoe, rockpaperscissor } = homeImages;

  const games = [
    {
      name: 'Tic Tac Toe',
      url:'https://goodhua2018.github.io/Tic-Tac-Toe/',
      img: tictactoe
    }, 
    {
      name: 'Rock Paper Scissor',
      url: 'https://goodhua2018.github.io/Rock-paper-Scissor/',
      img: rockpaperscissor
    }
  ]
  return (
    <div >
      <h2 style={{marginTop: '30px', marginBottom: '20px', color:'#e8603c', }}>FUN GAMES</h2>
      <section className="show-projects">
        {
        games.map( (game, index) => 
        <Card style={{ width: '18rem' }} key={index}>
      <Card.Img variant="top" src={ game.img } height={'180px'}/>
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button  style={{ backgroundColor: "#E7663C"}}>
          <a href={game.url} target="_blank"  style={{color: "#fff", textDecoration: "none"}}>Details</a></Button>
      </Card.Body>
    </Card>
        
        
        
        )   }
      </section>
      
   
      </ div>
  )}
    