import { useState } from "react";

const Greeting = () => {
  const [textChanged, setTextChanged] = useState(false);

  const ChangeTextHandler = () => {
    setTextChanged(!textChanged);
    console.log("clicked");
  };

  return (
    <>
      <h1>Hello world</h1>
      {!textChanged && <p>It's good to see you</p>}
      {textChanged && <p>Changed!</p>}
      <button onClick={ChangeTextHandler}>Text Change</button>
    </>
  );
};

export default Greeting;
