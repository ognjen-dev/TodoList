import React, { useContext } from "react";
import "src/app/components/List/ListItem/index.css";
import { InputContext } from "src/app/context/formContext";

const ListItem = (item, key) => {
  console.log(item, 'ITEM');
  const context = useContext(InputContext);
  const { items, setItems } = context;
  const deleteHandler = () => {
    setItems(items.filter((el) => el.id !== item.item.id));
  };
  return (
    <div key={key} className="list-item">
      <p className="list-prop">{item.item.firstName}</p>
      <p className="list-prop">{item.item.lastName}</p>
      <p className="list-prop">{item.item.street}</p>
      <p className="list-prop">{item.item.city}</p>
      <button onClick={() => {deleteHandler()}} className="button-submit">
        Remove
      </button>
    </div>
  );
};

export default ListItem;
