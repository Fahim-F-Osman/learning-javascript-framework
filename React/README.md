# ReactJS

ReactJS is a Frontend JavaScript Library. IT  creates Virtual DOM (Document Object Model) in memory before making changes in browser DOM; allowing faster and more responsive web apps.

## Single Page & Multi Page Application

### Single Page Application
- App with only one HTML page.
- Navigation does not reload the page; however, React changes the view dynamically.

It provides a smooth, app-like experience but initial load can be slower and SEO needs extra setup

### Multi Page Application
- Each page is a separate HTML file.

Simpler, SEO friendly, reloads entire page on navigation and slower interaction.

## Components
- Indepented, reusable pieces of UI.

### Class Components (Earlier Version)
- Used in older codebases.
- [Resource For Learning Class Components](https://www.w3schools.com/react/react_class.asp)

### Function Components
- JavaScript Function returning JSX (HTML-like syntax inside JavaScript).

### Props - Component Inputs
- Props are data passed into components.
- Props are read-only. 
- A component cannot change its own props.

### State - Component Memory
- State is internal data that a component can update.
- Mutable (you can update it)
- Causes re-renders when changed
- Private to the component.

### Component LifeCycle

1. **Mounting:** component is created and added to the DOM

    Used for:
    - Fetch data from an API
    - Start timers
    - Subscribe to events
    - Initialize values

    ```js
    useEffect(() => {
        // Runs only once when the component appears
        console.log(" Component mounted "); 
    }, []); // Empty array tells React to run it only once
    ```

2. **Updating:** component re-renders because props or state changed

    Used for:
    - React recalculates the JSX output
    - React updates the DOM only where needed

    ```js
    useEffect(() => {
        console.log("Count has changed!");
    }, [count]);
    ```

3. **Unmounting:** component is removed from the DOM

    Used for:
    - Clean up event listeners
    - Cancel API calls
    - Stop timers
    - Unsubscribe from sockets

    ```js
    useEffect(() => {
        console.log("Mounted!");

        return () => {
            // Runs when the component is removed
            console.log("Unmounted!"); 
        };
    }, []);
    ```

## Starting React

```bash
# Create project
npm create vite@latest my-react-app -- --template react

# Go into folder
cd my-react-app

# Install dependencies
npm install

# Start development server
npm run dev
```
---

## React Component - Props

Props allow you to pass data from a parent component to a child component.

```js
// src/components/Card.jsx
function Card( { name, description } ) {
  return (
    <div className="card">
      <h2>{name}</h2> <p>{description}</p>
    </div>
  );
}

// src/App.jsx
function App() {
  return (
    <div>
      <Card name="Card Name" description="This is a card" />
    </div>
  );
}
```

### React Component - Children

The special `children` prop lets you pass nested elements into a component.

It allows you to create wrapper components like:
- Layouts
- Modals
- Cards
- Tooltips
- Reusable containers
- Navigation bars

```js
// src/components/Card.jsx
function Card({ children }) {
  return (
    <div style={{ border: "1px solid #000", padding: "1rem", margin: "0.5rem" }}>
      {children}
    </div>
  );
}

// src/App.jsx
<Card>
  <h2>Hi!</h2>
  <p>Content from App.jsx</p>
</Card>
```
### Looping through Arrays
- `key` prop: React uses it to track elements efficiently. 
- Must be unique.

```js
const cardData = [
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
];

function App() {
  return (
    <div>
      {cardData.map((card) => (
        <Card key={card.id} title={card.title}  />
      ))}
    </div>
  );
}
```

---

## Hooks
In React hooks allow functions to have access to state and other React features without using classes.

### `useState`

useState` is a React Hook that lets you add state to a functional component. 

Allows a component to remember values between renders and update the UI when those values change.

**Syntax**
```js
import { useState } from "react";

const [stateVariable, setStateFunction] = useState(initialValue);
```

- stateVariable: current value stored in the state

- setStateFunction: function to update the value

- initialValue: value when the component first renders

Every time you call setStateFunction(newValue), React re-renders the component automatically with the new state.

## Event-Handlers

React uses camelCase props to handle events.
- `onClick:` click event
- `onChange:` input changes
- `onSubmit:` form submission
- `onMouseEnter` / `onMouseLeave:` hover events

```js
const [message, setMessage] = useState("Hi");

<button onClick={() => setMessage("Welcome back!")}>Login</button>
<p>{message}</p>
```

- **[Resources for Event Handling](https://react.dev/learn/responding-to-events)**

## Controlled Inputs & Two-way Binding
- Controlled inputs are inputs whose value is bound to state.
- Two-way binding where UI and state are always in sync.

```js
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
```