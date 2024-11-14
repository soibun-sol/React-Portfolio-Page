import React from 'react'
import myImage from '../assets/image.png'
import '../styles/about.css'

function About() {
    return (
        <section className="about">
            <div>
                <img id="photo" src={myImage} alt="Kenneth Kuffler" />
            </div>
            <h1>About Me</h1>
            <h2>Keegan Hinton</h2>
            <p>
                Hi, my name is Keegan Hinton and i am a fullstack web developer. this is a portfolio application that i developed to showcase my work. I have experience with HTML, CSS, JavaScript, Node.js, Express.js, React, and MongoDB. I am currently looking for a full-time position as a web developer. Please feel free to reach out to me if you have any questions or would like to work together.
            </p>

            <h2>Skills</h2>
            <ul className="skills">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>React</li>
                <li>MongoDB</li>
            </ul>
        </section>
    );
}

export default About;