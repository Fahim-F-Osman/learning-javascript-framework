import React, { useState, useCallback, useMemo } from "react";

const Item = React.memo(({ name, onClick }) => {
  console.log("Rendering:", name);
  return <li onClick={() => onClick(name)}>{name}</li>;
});

export default function Performance() {
  const [count, setCount] = useState(0);

  const items = useMemo(() => ["Apple", "Banana", "Cherry"], []);

  const handleItemClick = useCallback((itemName) => {
    console.log("Clicked:", itemName);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment: {count}
      </button>

      <ul>
        {items.map((item) => (
          <Item key={item} name={item} onClick={handleItemClick} />
        ))}
      </ul>
    </div>
  );
}
