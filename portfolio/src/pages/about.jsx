import React from 'react'
import myImage from '../assets/Preview.png'
import '../styles/about.css'

function About() {
    return (
        <section className="about">
            <div>
                <img id="photo" src={myImage} alt="Kenneth Kuffler" />
            </div>
            <h1>About Me</h1>
            <h2>Keegan Hinton</h2>
            <p>Hello and welcome to my portfolio page! My name is Keegan and I am excited to embark on a new chapter as a Full Stack Developer, leveraging my extensive background in technical and hands-on roles to bring a unique perspective to software development. For years, I thrived as a Service Technician, A/C Technician, and Site Foreman, where I mastered the art of diagnosing complex systems, implementing precise solutions, and leading teams under tight deadlines. These experiences instilled in me a methodical approach to problem-solving and a knack for breaking down intricate challenges—skills that are invaluable when writing clean, efficient code and debugging applications. Now, I’m channeling that same dedication into building dynamic, user-centric web applications.</p>  

            <p>My journey into tech began with immersive training at Edex Coding Bootcamp, where I gained proficiency in JavaScript, HTML/CSS, React, Node.js, Express, and databases like Postgres and MongoDB. Beyond technical tools, my prior roles taught me the importance of clear documentation, adaptability, and collaborative leadership—qualities that directly translate to development workflows. Whether it’s architecting a backend system or optimizing a UI component, I combine my technical expertise with a relentless curiosity to learn and innovate. I’m particularly passionate about bridging the gap between logic and creativity, crafting solutions that are as functional as they are elegant.</p>  

            <p>Away from the screen, I’m a devoted father to two incredible girls and am engaged to my Amazing fiancé, who keep me grounded and motivated. When I’m not coding, you’ll find me lost in the pages of manga and manhwa, drawing inspiration from their storytelling and artistry. I also thrive on solving puzzles—whether it’s a coding challenge, a mechanical repair, or a strategic board game with my family. Building connections, both personally and professionally, is at the heart of who I am, and I approach software development with the same collaborative spirit. From brainstorming ideas to deploying full-scale applications, I love the entire process of creating something meaningful that resonates with users. </p> 
            

            <h2>Skills</h2>
            <ul className="skills">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>postgreSQL</li>
                <li>sequalize</li>
                <li>C#</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>CI/CD pipeline</li>
                <li>Apollo Server</li>
                <li>Git</li>
                <li>GitHub</li>
                
            </ul>
        </section>
    );
}

export default About;