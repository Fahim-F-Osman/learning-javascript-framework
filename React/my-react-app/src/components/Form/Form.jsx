import "./Form.css"
import { useState } from "react";

function Form() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  const handleChange = (e) => setText(e.target.value);

  return (
    <div className="form">
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <hr/>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Preview: {text}</p>
    </div>
  );
}

export default Form;
