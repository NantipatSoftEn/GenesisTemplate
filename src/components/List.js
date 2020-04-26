import React from "react";
const List = (props) => {
  const { items } = props;

  if (!items) return null;
  if (!items.length && !Object.keys(items).length) return <p>No items, sorry</p>;
  return (
    <ul>
      {Object.keys(items).map((key, index) => {
        return <li key={index}>key:{items[key]}</li>;
      })}
    </ul>
  );
};
export default List;
