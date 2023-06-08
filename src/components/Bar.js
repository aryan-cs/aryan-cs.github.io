import "./Bar.css";
import Button from "./Button";
import { Link, animateScroll as scroll } from "react-scroll";
// import { FaRegFolder, FaFolder } from "react-icons/fa";
// import { RiAccountCircleLine, RiAccountCircleFill } from "react-icons/ri";
// import { IoHomeOutline, IoHome } from "react-icons/io5";
import {
    HiOutlineHome,
    HiHome,
    HiOutlineUser,
    HiUser,
    // HiOutlineCommandLine,
    // HiCommandLine,
    HiOutlineCubeTransparent,
    HiCube,
    HiOutlineMail,
    HiMail
} from "react-icons/hi";

function Bar () {

    return (

        <div className = "Bar">

            <Button icon = {<HiOutlineHome />}
                    label = "home" />

            <Button icon = {<HiOutlineUser />}
                    label = "about" />

            <Button icon = {<HiOutlineCubeTransparent />}
                    label = "projects" />

            <Button icon = {<HiOutlineMail />}
                    label = "contact" />

        </div>

    );

}

export default Bar;