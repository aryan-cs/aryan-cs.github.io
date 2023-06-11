import "./About.css";

import { BiRightArrow } from "react-icons/bi";


function About () {

    return (

        <div className = "About" id = "about">

            <h1 className = "item"> Interests </h1>
            <p className = "description"> <BiRightArrow className = "bullet"/> Integrated, Remote, and Assistive Robotics </p>
            <p className = "description"> <BiRightArrow className = "bullet"/> AI/ML </p>
            <p className = "description"> <BiRightArrow className = "bullet"/> Fundamental Particle Research </p>
            <p className = "description"> <BiRightArrow className = "bullet"/> Virtual & Augmented Reality </p>

            <h1 className = "item"> Experience </h1>
            <p className = "description"> <BiRightArrow className = "bullet"/> Software Development, Event & Sponsorship Management, Robotics & Circuitry, Teaching </p>
            <p className = "description"> <BiRightArrow className = "bullet"/> Cofounded&nbsp;<a href = "https://runforwater5k.org/" target = "_blank" rel = "noopener noreferrer">Run for Water</a>, a nonprofit organization to support remote villages around the world which has successfully raised over $7,000 </p>
            <p className = "description"> <BiRightArrow className = "bullet"/> Taught students with learning disabilities both math and science and how to code </p>
            <p className = "description"> <BiRightArrow className = "bullet"/> <a href = "https://github.com/aryan-cs/red-line" target = "_blank" rel = "noopener noreferrer">Created an app for local car guys</a> &nbsp;to connect and share their passion </p>
            <p className = "description"> <BiRightArrow className = "bullet"/> Built planes using lightweight materials and 3D printed parts, topped out at 117 mph </p>

            <h1 className = "item"> Awards & Affiliations </h1>
            <p className = "description"> <BiRightArrow className = "bullet"/> BPA Regional Champion for Global Marketing Team, invited to the State Leadership Conference </p>
            <p className = "description"> <BiRightArrow className = "bullet"/> Placed 4th overall in the state of Illinois for GMT </p>
            <p className = "description"> <BiRightArrow className = "bullet"/> Inducted into the Gerald A. McElroy Chapter of the National Honor Society based on scholarship, leadership, service, and character </p>
            <p className = "description"> <BiRightArrow className = "bullet"/> Recognized by the United Nations Association for service to others with dedication to clean water and sanitation </p>

        </div>

    );

}

export default About;