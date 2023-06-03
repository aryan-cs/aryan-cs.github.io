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
                            &gt; Cofounded <a href = "https://runforwater5k.org/" target = "_blank" rel = "noreferrer">Run for Water</a>, a nonprofit organization dedicated to raising money in support for remote villages around the world -- successfully raised <p1>over $7,000</p1>
                            <br/><br/>
                            &gt; Taught students with learning disabilities both <p1>math and science</p1> and how to code
                            <br/><br/>
                            &gt; <a href = "https://github.com/aryan-cs/red-line" target = "_blank" rel = "noreferrer"> Created an app for local car guys</a> to connect and share their passion
                            <br/><br/>
                            &gt; Built planes using lightweight materials and 3D printed parts, topped out at <p1>117 mph</p1>
                        </p>
                    </div>

                </div>

            </div>

            <div className = "container">

                <div className = "section">

                    <p> Awards & Affiliations </p>
                    
                    <div className = "description">
                        <p>
                            &gt; BPA <p1>Regional Champion</p1> for Global Marketing Team, invited to compete at the State Leadership Conference and placed <p1>4th overall in the state of Illinois</p1>
                            <br/><br/>
                            &gt; Inducted into the Gerald A. McElroy Chapter of the <p1>National Honor Society</p1> based on scholarship, leadership, service, and character
                            <br/><br/>
                            &gt; Recognized by the <p1>United Nations Association</p1> for service to others with dedication to clean water and sanitation
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