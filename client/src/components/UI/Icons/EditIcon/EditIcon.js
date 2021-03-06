import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import classes from "../Icons.module.css";

const editIcon = ({ edit }) => (
  <button className={classes.EditButton} onClick={edit}>
    <FontAwesomeIcon icon={faPencilAlt} />
  </button>
);

export default editIcon;
