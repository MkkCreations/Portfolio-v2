import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div className='divcontainer2'>
        <h3><hr/>My Projects <hr/></h3>

        <section className='projectsection'>
            <a 
                className='projectfigure' 
                href='https://islamsalat.com/' target='_blank' rel="noreferrer">
            </a>
            <article className='projectarticle'>
                <h3>Prayer Times API</h3>
                <div>
                    <p>
                        This Web App, you can get the next prayer times, in real time and in the exact location.
                        The web is connected to a API which gives us the prayer times when we give him the location by the longitude and latitude coordinates.
                    </p>
                </div>
                <p>HTML SCSS JS(API/fetch)</p>
                
            </article>
        </section>
        <section className='projectsection'>
            <a 
                className='projectfigure' 
                href='https://khaffoum.com/inversiones/index.html' target='_blank' rel="noreferrer">
            </a>
            <article className='projectarticle'>
                <h3>Tools for Investment</h3>
                <div>
                    <p>
                        This is a web app which help us to calculate our investements, like dividends, compound interest and Crypto price changed in the time.
                    </p>
                </div>
                <p>HTML SCSS JS(API/fetch)</p>
                
            </article>
        </section>
        <section className='projectsection'>
            <a 
                className='projectfigure' 
                href='https://crud-api-mysql-nodejs.herokuapp.com/' target='_blank' rel="noreferrer">
            </a>
            <article className='projectarticle'>
                <h3>CRUD Tasks</h3>
                <div>
                    <p>
                        In this case I am very excited because this web was the first time I used a BackEnd and a DataBase connection.
                        This web app is for create tasks, modify and delete them. You can see the same info where ever you are to remember the tasks you have to do.
                    </p>
                </div>
                <p>HTML CSS NodeJs MySQL Heroku</p>
                
            </article>
        </section>
        <section className='projectsection'>
            <a 
                className='projectfigure' 
                href='https://khaffoum.com/webCars/index.html' target='_blank' rel="noreferrer">
            </a>
            <article className='projectarticle'>
                <h3>Web News</h3>
                <div>
                    <p>
                        Public News is a news page, related to cars.
                        This was the first project I have made, it's a clone of a web page but it's made with pure HTML,CSS and JS.
                    </p>
                </div>
                <p>HTML CSS JS</p>
                
            </article>
        </section>
        <section className='projectsection'>
            <a 
                className='projectfigure' 
                href='https://react-socketio-moha.herokuapp.com/' target='_blank' rel="noreferrer">
            </a>
            <article className='projectarticle'>
                <h3>Chat Socketio</h3>
                <div>
                    <p>
                        This is a Chat web app made with socketio, it allows us to chat in real time with others browser tabs.
                    </p>
                </div>
                <p>React NodeJs(Socketio/Express)</p>
                
            </article>
        </section>
        <section className='projectsection'>
            <a 
                className='projectfigure' 
                href='https://khaffoum.com/' target='_blank' rel="noreferrer">
            </a>
            <article className='projectarticle'>
                <h3>First portfolio</h3>
                <div>
                    <p>
                        Was my first portfolio, it's an interesting project because it's made with pure HTML CSS and JS, and it has a variety of transitions like the card witch turns to the back side whene you hover it.
                    </p>
                </div>
                <p>HTML SCSS JS</p>
                
            </article>
        </section>
      </div>
    );
  }

}

export default Projects;