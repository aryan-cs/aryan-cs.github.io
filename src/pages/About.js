import "./About.css";

import Text from "../components/Text";

function About () {

    return (

        <div className = "About" id = "about">

            <Text text = {"About"} size = "medium"/>

            <div className = "container">

                <div className = "section">

                    <p> Interests </p>
                    
                    <div className = "description">
                        <p>
                            &gt; Integrated, Remote, and Assistive Robotics
                            <br/><br/>
                            &gt; Virtual & Augmented Reality
                            <br/><br/>
                            &gt; AI/ML
                            <br/><br/>
                            &gt; Fundamental Particle Research
                        </p>
                    </div>

                </div>

            </div>

            <div className = "container">

                <div className = "section">

                    <p> Experience </p>
                    
                    <div className = "description">
                        <p>
                            &gt; Software Development, Event & Sponsorship Management, Robotics & Circuitry, Teaching
                            <br/><br/>
                            &gt; <a href = "https://runforwater5k.org/" target = "_blank" rel = "noreferrer">Cofounded a nonprofit organization</a> to raise money in support for remote villages around the world, successfully raising over $7,000
                            <br/><br/>
                            &gt; Taught students with learning disabilities both math and science and how to code
                            <br/><br/>
                            &gt; <a href = "https://github.com/aryan-cs/red-line" target = "_blank" rel = "noreferrer"> Created an app for local car guys</a> to connect and share their passion
                            <br/><br/>
                            &gt; Built planes using lightweight materials and 3D printed parts, topped out at 117 mph
                        </p>
                    </div>

                </div>

            </div>

            <div className = "container">

                <div className = "section">

                    <p> Awards & Affiliations </p>
                    
                    <div className = "description">
                        <p>
                            &gt; BPA Regional Champion for Global Marketing Team, invited to compete at the State Leadership Conference and placed 4th overall in the state of Illinois
                            <br/><br/>
                            &gt; Inducted into the Gerald A. McElroy Chapter of the National Honor Society based on scholarship, leadership, service, and character
                            <br/><br/>
                            &gt; Recognized by the United Nations Association for service to others with dedication to clean water and sanitation
                            <br/><br/>
                        </p>
                    </div>

                </div>

            </div>

            <div className = "container">

                <div className = "section">

                    <p> Hobbies </p>
                    
                    <div className = "description">
                        <p>
                            &gt; Building things, breaking things, and fixing things!
                            <br/><br/>
                            &gt; Cruising, coding, and cooking
                            <br/><br/>
                        </p>
                    </div>

                </div>

            </div>

        </div>

    );

}

export default About;