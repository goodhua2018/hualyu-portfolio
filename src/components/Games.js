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
      img: tictactoe, 
      src: 'https://github.com/goodhua2018/Tic-Tac-Toe'
    }, 
    {
      name: 'Rock Paper Scissor',
      url: 'https://goodhua2018.github.io/Rock-paper-Scissor/',
      img: rockpaperscissor,
      src: 'https://github.com/goodhua2018/Rock-paper-Scissor'
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
        <section className="card-buttons">
          <Button  style={{ backgroundColor: "#E7663C"}}>
            <a href={game.url} target="_blank"  style={{color: "#fff", textDecoration: "none"}}>
              Demo
            </a>
          </Button>
          <Button  style={{ backgroundColor: "#E7663C"}}>
            <a href={game.src} target="_blank"  style={{color: "#fff", textDecoration: "none"}}>
              Code
            </a>
          </Button>
        </section>
        
        
      </Card.Body>
    </Card>
        
        
        
        )   }
      </section>
      
   
      </ div>
  )}
    