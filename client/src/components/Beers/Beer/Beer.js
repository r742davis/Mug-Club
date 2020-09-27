import React from "react";

const Beer = (props) => {
  const listClasses = [props.styles.Item];

  if (props.finished) {
    listClasses.push(props.styles.Completed);
  }

  let image = (
    <img
      className={props.styles.Avatar}
      alt={`${props.brewery}`}
      src={`${props.url}`}
    />
  );

  let name = (
    <div className={props.styles.NameContainer}>
      <h1>{`${props.brewery}`}</h1>
      <h2>{`${props.name}`}</h2>
    </div>
  );

  return (
    <li
      key={props.name}
      onClick={props.complete}
      className={listClasses.join(" ")}
    >
      {image}
      {name}
      <div>{props.checkForIcon}</div>
    </li>
  );
};

export default Beer;
