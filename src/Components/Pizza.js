import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  name: yup.string().required("Please enter your name."),
  size: yup.string(),
  topping1: yup.string(),
  topping2: yup.string(),
  topping3: yup.string(),
  topping4: yup.string(),
  instructions: yup.string(),
});

const Pizza = () => {
  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    topping1: "",
    topping2: "",
    topping3: "",
    topping4: "",
    instructions: "",
  });

  // error states
  const [error, setError] = useState({
    name: "",
    size: "",
    topping1: "",
    topping2: "",
    topping3: "",
    topping4: "",
    instructions: "",
  });

  // button state
  const [buttonDisabled, setButtonDisabled] = useState(true);
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const validateChange = (event) => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setError({
          ...error,
          [event.target.name]: "",
        });
      })
      .catch((err) => {
        setError({
          ...error,
          [event.target.name]: err.errors,
        });
      });
  };

  // set post state
  const [post, setPost] = useState([]);

  // onSubmit function
  const formSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => {
        setPost(response.data); // get just the form data from the REST api
        setFormState({
          // reset form if successful
          name: "",
          size: "",
          topping1: "",
          topping2: "",
          topping3: "",
          topping4: "",
          instructions: "",
        });
      })
      .catch((err) => console.log(err.response));
  };

  // onChange function
  const inputChange = (event) => {
    event.persist();
    const newFormData = {
      ...formState,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    };
    validateChange(event);
    setFormState(newFormData);
  };

  return (
    <form onSubmit={formSubmit}>
      <div>
        <h3>Create your pizza.</h3>
        <div>
          <label htmlFor="name">
            Please enter your name:<br></br>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={inputChange}
            />
            {error.name.length > 0 ? (
              <p className="error">{error.name}</p>
            ) : null}
          </label>

          <label htmlFor="size">
            <h4>Choose your pizza size:</h4>
            <select id="size" name="size" onChange={inputChange}>
              <option value="small">Small - Feeds 1 - 2 People</option>
              <option value="medium">Medium - Feeds 2 - 3 People</option>
              <option value="large">Large - Feeds 3 - 4 People</option>
              <option value="x-large">X-Large - Feeds 4 - 6 People</option>
            </select>
          </label>
        </div>
        <div>
          <h4>Choose your toppings</h4>
          <label htmlFor="topping1">
            Onions
            <input
              id="topping1"
              type="checkbox"
              name="topping1"
              checked={formState.topping1}
              onChange={inputChange}
            />
          </label>
          <br></br>

          <label htmlFor="topping2">
            Mushrooms
            <input
              id="topping2"
              type="checkbox"
              name="topping2"
              checked={formState.topping2}
              onChange={inputChange}
            />
          </label>

          <br></br>

          <label htmlFor="topping3">
            Sausage
            <input
              id="topping3"
              type="checkbox"
              name="topping3"
              checked={formState.topping3}
              onChange={inputChange}
            />
          </label>

          <br></br>

          <label htmlFor="topping4">
            Pepperoni
            <input
              id="topping4"
              type="checkbox"
              name="topping4"
              checked={formState.topping4}
              onChange={inputChange}
            />
          </label>
        </div>
        <label htmlFor="instructions">
          <h4>Special Instructions </h4>
          <textarea
            id="instructions"
            type="text"
            name="instructions"
            value={formState.instructions}
            onChange={inputChange}
          />
        </label>
        <br></br>
        <pre>{JSON.stringify(post, null, 2)}</pre> {/* displays form data */}
        <button disabled={buttonDisabled}>Place Order</button>
      </div>
    </form>
  );
};

export default Pizza;
