import './Project.css';
import React from "react";
import { BsGithub } from "react-icons/bs";

function Project (props) {

  return (

    <div className = "Project"
         id = {props.id}
         onClick = {()=> { if (props.id !== "noSite") { window.open(props.src, "_blank") }}}>

      <iframe className = "Project-iframe"
             src = { props.src }
             title = { props.title }
             loading = "lazy"
             scrolling = "no" />

      <div className = "Project-description">

        <h className = "Project-title">{ props.title }</h>

        <p className = "Project-text">{ props.desc }</p>

      </div>

      <BsGithub onClick = {()=> { window.open(props.repo, "_blank") }} className = "Project-link"/>

    </div>

  );

}

export default Project;
