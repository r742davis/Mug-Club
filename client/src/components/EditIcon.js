import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import classes from "./styles/Icons.module.css";

const EditIcon = (props) => {
  return (
    <button className={classes.EditButton} onClick={props.edit}>
      <FontAwesomeIcon icon={faPencilAlt} />
    </button>
  );
};

export default EditIcon;
