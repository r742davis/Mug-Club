import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import classes from "../Icons.module.css";

const deleteIcon = (props) => (
  <button className={classes.DeleteButton} onClick={props.delete}>
    <FontAwesomeIcon icon={faTrashAlt} />
  </button>
)

export default deleteIcon;
