import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { homeImages } from '../homeImages';

export default function Projects() {
  const { baker, furniture, gym2 } = homeImages;
  const projects = [
    {
      name: 'Gym My Way',
      url:'https://gymmyway.onrender.com/',
      img: gym2,
      src: 'https://github.com/goodhua2018/gym-app'
    }, 
    {
      name: 'Baker Finder',
      url: 'https://baker-finder.onrender.com/',
      img: baker,
      src: 'https://github.com/goodhua2018/Baker-Finder'

    }, 
    {
      name: 'Furniture Market',
      url: 'https://fathomless-fortress-15915.herokuapp.com/',
      img: furniture,
      src: 'https://github.com/goodhua2018/Furnitures-Market'
    }
  ]

  return (
    <div id="projects">
      <h2 style={{marginTop: '30px', marginBottom: '20px', color:'#e8603c', }}>RECENT PROJECTS</h2>
      <section className="show-projects">
        {
          projects.map( (project, index) =>
            <Card style={{ width: '18rem' }} key={index}>
              <Card.Img variant="top" src={ project.img } height={'180px'}/>
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <section className="card-buttons">
                  <Button  style={{ backgroundColor: "#E7663C"}}>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      style={{color: "#fff", textDecoration: "none"}}
                    >
                      Demo
                    </a>
                  </Button>
                  <Button  style={{ backgroundColor: "#E7663C"}}>
                    <a 
                      href={project.src} 
                      target="_blank" 
                      rel="noreferrer" 
                      style={{color: "#fff", textDecoration: "none"}}
                    >
                      Code
                    </a>
                  </Button>
                </section>
              </Card.Body>
            </Card>
          )
        }
      </section>
    </ div>
  );
}
    