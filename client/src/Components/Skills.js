import React from 'react';
import Pdf from '../samples/MOHAMED KHAFFOU KHAFFOU (EN).pdf';

class Skills extends React.Component {
  render() {
    return (
        <div className='divcontainer2'>
            <h3><hr/> My Skills <hr/></h3>
            <p>Scroll -----&gt; and hover</p>
            <span>
                <a id='pdflink' href={Pdf} target="_blank" rel='noreferrer'>Resume</a>
            </span>
            <div id="skillscontainer">
                <div className="container">
                    <img src="https://img.icons8.com/color/200/000000/html-5--v1.png" alt=""/>
                    <p className="title">HTML</p>
                    <p className="content">
                        - Full knwoledge
                        <br/>
                        - Well syntax
                    </p>
                </div>
                <div className="container">
                    <img src="https://img.icons8.com/color/200/000000/css3.png" alt=""/>
                    <p className="title">CSS / SCSS</p>
                    <p className="content">
                        - Well knowledge
                        <br/>
                        - Good order
                        <br/>
                        - Animations
                        <br/>
                        - UI / UX
                    </p>
                </div>
                <div className="container">
                    <img src="https://img.icons8.com/color/200/000000/javascript--v1.png" alt=""/>
                    <p className="title">JS</p>
                    <p className="content">
                        - DOM
                        <br/>
                        - All type of functions
                        <br/>
                        - Array
                        <br/>
                        - API fetch
                        <br/>
                        - OOP
                    </p>
                </div>
                <div className="container">
                    <img src="https://img.icons8.com/color/200/000000/react-native.png" alt=""/>
                    <p className="title">React</p>
                    <p className="content">
                        First Framework I used, I have just started with React.
                        <br/>
                        - Routing
                        <br/>
                        - Redux
                        <br/>
                        - Hooks
                        <br/>
                        - Form Control
                    </p>
                </div>
                <div className="container">
                    <img src="https://img.icons8.com/fluency/200/000000/node-js.png" alt=""/>
                    <p className="title">NodeJs</p>
                    <p className="content">
                        I used it to create a server with Express.
                        <br/>
                        - HTTP requests
                        <br/>
                        - DataBase control (GET, POST, PUT, DELETE)
                        <br/>
                        - Socketio
                    </p>
                </div>
                <div className="container">
                    <img src="https://img.icons8.com/color/200/000000/mysql-logo.png" alt=""/>
                    <p className="title">MySQL</p>
                    <p className="content">
                        Midle knowledge of DataBase
                        <br/>
                        - CREATE
                        <br/>
                        - UPDATE
                        <br/>
                        - DELETE
                    </p>
                </div>
                <div className="container">
                    <img src="https://img.icons8.com/color/200/000000/git.png" alt=""/>
                    <p className="title">Git</p>
                    <p className="content">
                        - Create a Repository
                        <br/>
                        - Branches
                        <br/>
                        - Pull 
                        <br/>
                        - Push
                        <br/>
                        - Checkout
                        <br/>
                        - Clone
                        <br/>
                        - Commit
                        <br/>
                        - Fetch,
                        <br/>
                        - Init
                        <br/>
                        - Merge
                        <br/>
                        - Remote
                    </p>
                </div>
                <div className="container">
                    <img src="https://img.icons8.com/color/200/000000/visual-studio-code-2019.png" alt=""/>
                    <p className="title">VSC</p>
                    <p className="content">
                        - Create a project
                        <br/>
                        - Connect DataBases
                        <br/>
                        - ...
                    </p>
                </div>
                <div className="container">
                    <img src="https://img.icons8.com/color/200/000000/npm.png" alt=""/>
                    <p className="title">npm package</p>
                    <p className="content">
                        - Install dependencies
                        <br/>
                        - Start a server
                        <br/>
                        - Build the project
                    </p>
                </div>
                <div className="container">
                    <img src="https://www.apachefriends.org/images/xampp-logo-ac950edf.svg" alt=""/>
                    <p className="title">XAMPP</p>
                    <p className="content">
                        - Create a local server
                        <br/>
                        - Connect with DataBase
                        <br/>
                        - Manage PhpMyAdmin
                    </p>
                </div>
                <div className="container">
                    <img src="https://img.icons8.com/color/200/000000/bootstrap.png" alt=""/>
                    <p className="title">Bootstrap </p>
                    <p className="content">
                        Midle knowledge, I prefer using pure CSS with SCSS
                    </p>
                </div>
                <div className="container">
                    <img src="https://img.icons8.com/color/200/000000/tailwind_css.png" alt=""/>
                    <p className="title">Thailwind </p>
                    <p className="content">
                        Midle knowledge, I prefer using pure CSS with SCSS
                    </p>
                </div>
                <div className="container">
                    <img src="https://img.icons8.com/color/200/000000/adobe-photoshop.png" alt=""/>
                    <p className="title">Photoshop</p>
                    <p className="content">
                        I use it for delete things from photos, for adding elements or  remove backgrounds.
                    </p>
                </div>
                <div className="container">
                    <img src="https://img.icons8.com/fluency/48/000000/affinity-designer.png" alt=""/>
                    <p className="title">Affinity Designer</p>
                    <p className="content">
                        With Affinity Designer I created my own NFT collection and uploaded it to OpenSea.
                    </p>
                </div>
                <div className="container">
                    <img src="https://img.icons8.com/color/200/000000/adobe-lightroom.png" alt=""/>
                    <p className="title">Lightroom</p>
                    <p className="content">
                        I used Lightroom for a long time, in those times I liked photography.
                        <br/>
                        - Good knowledge of all parameters
                    </p>
                </div>
                
            </div>

        </div>
    );
  }

}

export default Skills;