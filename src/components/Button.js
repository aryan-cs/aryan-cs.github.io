import "./Button.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Bar (props) {

    return (

        <div className = "Button">

            <Link
                activeClass = "active"
                to = {props.label}
                spy = {true}
                smooth = {true}
                offset = {0}
                duration = {750}>

                <div className = "icon">{props.icon}</div>
                <p className = "label">{props.label.toUpperCase()}</p>

            </Link>
            
        </div>

    );

}

export default Bar;