import React, { useState, useEffect } from "react";

function InputForm(props) {
  const [isForm, setIsForm] = useState(true);
  const [count, setCount] = useState(1);

  const showOrHide = () => {
    setIsForm(!isForm);
  };
  const countHandler = () => {
    setCount(count + 5);
  };

  useEffect(() => {
    console.log("first loading and update");
    return setCount(count + 100);
  }, [isForm]);

  return (
    <div className="formBlock">
      {isForm ? (
        <form>
          <label>
            Name:
            <br />
            <input type="text" />
          </label>
          <br />
        </form>
      ) : null}
      <button onClick={showOrHide}>Show or Hide</button>
      <h1>Counter: {count}</h1>
      <button onClick={countHandler}>+5</button>
    </div>
  );
}

export { InputForm };
