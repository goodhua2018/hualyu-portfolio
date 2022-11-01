import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Projects() {

  const projects = [
    {
      name: 'Gym My Way',
      url:'https://gymmyway.herokuapp.com/'
    }, 
    {
      name: 'Baker Finder',
      url: 'https://baker-finder.herokuapp.com/'
    }, 
    {
      name: 'Furniture Market',
      url: 'https://fathomless-fortress-15915.herokuapp.com/'
    }
  ]
  return (
    <div >
      <h1>Recent Projects</h1>
      <section className="show-projects">
        {
        projects.map( (project, index) => 
        <Card style={{ width: '18rem' }} key={index}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><a href={project.url}>Details</a></Button>
      </Card.Body>
    </Card>
        
        
        
        )   }
      </section>
      
   
      </ div>
  )}
    