import React from "react";

const Pizza = () => {
  return (
    <form>
      <div>
        <h3>Create your pizza.</h3>
        <div>
          <label htmlFor="name">
            Please enter your name:<br></br>
            <input type="text" id="name" name="name" />
          </label>

          <label htmlFor="size">
            <h4>Choose your pizza size:</h4>
            <select id="size" name="size">
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
            <input id="topping1" type="checkbox" name="topping1" />
          </label>

          <br></br>

          <label htmlFor="topping2">
            Mushrooms
            <input id="topping2" type="checkbox" name="topping2" />
          </label>

          <br></br>

          <label htmlFor="topping3">
            Sausage
            <input id="topping3" type="checkbox" name="topping3" />
          </label>

          <br></br>

          <label htmlFor="topping4">
            Pepperoni
            <input id="topping4" type="checkbox" name="topping4" />
          </label>
        </div>

        <label htmlFor="instructions">
          <h4>Special Instructions </h4>
          <textarea id="instructions" type="text" name="instructions" />
        </label>
        <br></br>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Pizza;
