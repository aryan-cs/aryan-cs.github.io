import "./Landing.css";

function About () {

    return (

        <div className = "Landing" id = "landing">

            <h1 className = "symbol"> Ag </h1>
            <h2 className = "title"> ARYAN GUPTA </h2>
            <p> Creating a better world through technology. </p>

            <div className = "logo-container">
                <img src = {require("../assets/images/icon.png")} alt = "uh oh" />
            </div>

        </div>

    );

}

export default About;