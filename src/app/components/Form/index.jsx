import React, { useContext, useState } from "react";
import "src/app/components/Form/index.css";
import { InputContext } from "src/app/context/formContext";

const Form = () => {
  const context = useContext(InputContext);
  const { items, setItems } = context;

  const [tempItem, setTempItem] = useState({
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    id: Math.random() * 10000,
  });
  const inputHandler = (e) => {
    tempItem[e.target.name] = e.target.value;
  };
  const reset = () => {
    setTempItem({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(tempItem.firstName, "firsst name");
    if (
      tempItem.firstName === "" ||
      tempItem.lastName === "" ||
      tempItem.street === "" ||
      tempItem.city === ""
    ) {
      alert("Fill all data");
    } else {
      setTempItem({
        ...tempItem,
        id: Math.random() * 10000,
      });
      setItems([...items, tempItem]);
    }
  };

  return (
    <div className="form">
      <div>
        <p className="align-left">Firstname</p>
        <input
          name="firstName"
          onChange={inputHandler}
          className="form-input"
          placeholder="Firstname"
          type="text"
        />
      </div>
      <div>
        <p className="align-left">Lastname</p>
        <input
          name="lastName"
          onChange={inputHandler}
          className="form-input"
          placeholder="Lastname"
          type="text"
        />
      </div>
      <div>
        <p className="align-left">Street</p>
        <input
          name="street"
          onChange={inputHandler}
          className="form-input"
          placeholder="Street"
          type="text"
        />
      </div>
      <div>
        <p className="align-left">City</p>
        <input
          name="city"
          onChange={inputHandler}
          className="form-input"
          placeholder="City"
          type="text"
        />
      </div>
      <div>
        <button onClick={handleSubmit} className="button-submit" type="submit">
          Insert
        </button>
      </div>
    </div>
  );
};

export default Form;
