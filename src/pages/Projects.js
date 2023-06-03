import "./Projects.css";

import Text from "../components/Text";

function Projects () {

    return (

        <div className = "Projects" id = "projects">

            <Text text = {"Projects"} size = "medium"/>

            <div className = "container">

                <div className = "section">

                    <p> <a href = "https://github.com/aryan-cs/red-line" target = "_blank" rel = "noreferrer"> Redline </a> </p>
                    
                    <div className = "description">
                        <p>
                            &gt; An app for car guys, by a car guy.
                            <br/><br/>
                            &gt; Allows users to share car meet & auto industry info and see what's going on in their area.
                            <br/><br/>
                            &gt; Will soon be available on the App Store and Google Play Store!
                            <br/><br/>
                        </p>
                    </div>

                </div>

                <div className = "section">

                    <p> <a href = "https://github.com/aryan-cs/sudoku" target = "_blank" rel = "noreferrer"> Sudoku Solver </a> </p>
                    
                    <div className = "description">
                        <p>
                            &gt; Side by side comparison of a brute force and entropy based sudoku solver.
                            <br/><br/>
                            &gt; Entropy based system is 65% faster than the backtracker and 11 times as fast as the world champion!
                            <br/><br/>
                        </p>
                    </div>

                </div>

                <div className = "section">

                    <p> <a href = "https://github.com/aryan-cs/maze" target = "_blank" rel = "noreferrer"> Maze Solver </a> </p>
                    
                    <div className = "description">
                        <p>
                            &gt; Generates a maze and solves it using a depth first search algorithm.
                            <br/><br/>
                        </p>
                    </div>

                </div>

                <div className = "section">

                    <p> <a href = "https://github.com/aryan-cs/uno-dos" target = "_blank" rel = "noreferrer"> Digit Detecter </a> </p>
                    
                    <div className = "description">
                        <p>
                            &gt; Built using TensorFlow and trained on the MNIST dataset.
                            <br/><br/>
                            &gt; Allows users to compare average accuracy based on different levels of training.
                            <br/><br/>
                        </p>
                    </div>

                </div>

                <div className = "section">

                    <p> <a href = "https://github.com/aryan-cs/aryan-cs.github.io" target = "_blank" rel = "noreferrer"> Personal Website </a> </p>
                    
                    <div className = "description">
                        <p>
                            &gt; This website!
                            <br/><br/>
                        </p>
                    </div>

                </div>

                <div className = "container">

                    <div className = "section">

                        <p> See more on my <a href = "https://github.com/aryan-cs" target = "_blank" rel = "noreferrer">Github</a> </p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Projects;