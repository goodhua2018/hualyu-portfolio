import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { homeImages } from '../homeImages';

export default function Projects() {
  const { baker, furniture, gym2 } = homeImages;

  const projects = [
    {
      name: 'Gym My Way',
      url:'https://gymmyway.herokuapp.com/',
      img: gym2
    }, 
    {
      name: 'Baker Finder',
      url: 'https://baker-finder.herokuapp.com/',
      img: baker
    }, 
    {
      name: 'Furniture Market',
      url: 'https://fathomless-fortress-15915.herokuapp.com/',
      img: furniture
    }
  ]
  return (
    <div >
      <h2 style={{marginTop: '30px', marginBottom: '20px', color:'#e8603c', }}>RECENT PROJECTS</h2>
      <section className="show-projects">
        {
        projects.map( (project, index) => 
        <Card style={{ width: '18rem' }} key={index}>
      <Card.Img variant="top" src={ project.img } height={'180px'}/>
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Button  style={{ backgroundColor: "#E7663C"}}>
          <a href={project.url} target="_blank"  style={{color: "#fff", textDecoration: "none"}}>Details</a></Button>
      </Card.Body>
    </Card>
        
        
        
        )   }
      </section>
      
   
      </ div>
  )}
    