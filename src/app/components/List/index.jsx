import React, { useContext } from "react";
import { InputContext } from "src/app/context/formContext";
import ListItem from "src/app/components/List/ListItem";

const List = () => {
  const context = useContext(InputContext);
  const { items, setItems } = context;
  return (
    <div className="">
      <div className="">
        {items.map((item) => (
          <ListItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
