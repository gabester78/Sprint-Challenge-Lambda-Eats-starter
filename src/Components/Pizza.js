import React from "react";

const Pizza = () => {
  return (
    <form>
      <div>
        <h3>Create your pizza.</h3>
        <div>
          <label htmlFor="name">
            Name:
            <input type="text" id="name" name="name" />
          </label>

          <label for="size">
            <h4>Choose your pizza size:</h4>
          </label>
          <select id="pizzaSize">
            <option value="small">Small - Feeds 1 - 2 People</option>
            <option value="medium">Medium - Feeds 2 - 3 People</option>
            <option value="large">Large - Feeds 3 - 4 People</option>
            <option value="x-large">X-Large - Feeds 4 - 6 People</option>
          </select>
        </div>

        <div>
          <h4>Choose your toppings</h4>
          <form className="toppings">
            <input id="onions" type="checkbox" name="onions" />
            <label htmlFor="topping1">Onions</label>
            <input id="mushrooms" type="checkbox" name="mushrooms" />
            <label htmlFor="topping2">Mushrooms</label>
            <input id="sausage" type="checkbox" name="sausage" />
            <label htmlFor="topping3">Sausage</label>
            <input id="pepperoni" type="checkbox" name="pepperoni" />
            <label htmlFor="topping3">Pepperoni</label>
          </form>
        </div>

        <label htmlFor="instructions">
          <h4>Special Instructions </h4>
        </label>
        <input id="instructions" type="text" name="instructions" />

        <button>Submit</button>
      </div>
    </form>
  );
};

export default Pizza;
