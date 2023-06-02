import "./Text.css";

function Text (props) {

    return (

        <div className = "hero-container">

            <h2 className = {"hero glitch layers " + props.size} data-text = {props.text}><span>{props.text}</span></h2>

        </div>

    );
}

export default Text;