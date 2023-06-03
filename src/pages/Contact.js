import "./Contact.css";

import Text from "../components/Text";

function Contact () {

    const download = () => {

        alert("Available soon!");

        // fetch("../assets/items/resume.pdf").then(response => {

        //     response.blob().then(blob => {

        //         const fileURL = window.URL.createObjectURL(blob);
        //         let alink = document.createElement('a');
        //         alink.href = fileURL;
        //         alink.download = "resume.pdf";
        //         alink.click();

        //     });

        // });

    }

    return (

        <div className = "Contact" id = "contact">

            <Text text = {"Contact"} size = "medium"/>

            <div className = "container">

                <div className = "section">

                    <p> &gt; Contact me via <a href = "https://www.linkedin.com/in/aryan-g/" target = "_blank" rel = "noreferrer">LinkedIn</a> </p>

                </div>

            </div>

            <div className = "container">

                <div className = "section">

                    <p> &gt; Download my <p1 onClick = {download} className = "fakeLink">resume</p1> </p>

                </div>

            </div>

        </div>

    );

}

export default Contact;