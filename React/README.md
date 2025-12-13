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

---

## Hooks
In React hooks allow functions to have access to state and other React features without using classes.

### Side Effects

Any operation that interacts with the "outside world" outside the scope of a component's rendering process such as:
- Fetch data from an API
- Update document title
- Set localStorage
- Listen to scroll events
- Start a timer
- Console logs 

The `useEffect` hook is used to handle side-effects.

### `useEffect`

```js
useEffect(() => {
  // side effect code goes here
}, [dependencies]);
```
- The first argument is a function (the effect).
- The second argument is the dependency array (controls WHEN the effect runs).

---

## CSS Modules

A CSS Module is a CSS file where every class name and identifier is scoped ONLY to the component that imports it.
- No name conflicts
- No global leakage
- No overriding styles accidentally

### Folder Structure
```cpp
components/
  Button.jsx
  Button.module.css
  Card.jsx
  Card.module.css
```

### Usage
```js
import './CSSTest.css'
import styles from './CSSTest.module.css'

function CSSTest() {
    return (
        <>
        <div className='container'></div>
        <div className={styles.container}></div>
        </>
    )
    
}

export default CSSTest
```

---

## Forms & Validation

### Uncontrolled Input
The DOM controls the input value for which React does NOT update the value so it's harder to validate.

### Controlled Input
React controls the input value. Value stored in React state.

```js
const [name, setName] = useState("");

<input value={name} onChange={(e) => setName(e.target.value)} />
```

### Event Handlers in Forms
- `onChange:` for updating input.
- `onSubmit:` form submission.
- `onBlur:` check field when leaving input.
- `onFocus:` when input is clicked.

---

## React - Router

React Router is the standard third-party library for managing routing and navigation in React applications. It allows developers to create single-page applications (SPAs) that can switch between different views or "pages" without requiring a full browser page reload, providing a seamless, multi-page user experience. 

- Each “page” is a route.
- Navigation is handled by Link instead of `<a>` to prevent full-page reloads.
- You can define dynamic parameters in URLs like `/product/:id`.
- You can show a 404 page for unknown routes.

**Installing React Router**
```bash
npm install react-router-dom
```

### Router Components
| Component                                   | Purpose                         |
| ------------------------------------------- | ------------------------------- |
| `<BrowserRouter>`                           | Wraps your app; enables routing |
| `<Routes>`                                  | Wraps all `<Route>`s            |
| `<Route path="" element={<Component />} />` | Defines a route                 |
| `<Link to="">`                              | Navigate without page reload    |
| `<Outlet>`                                  | Placeholder for nested routes   |
| `useParams()`                               | Access dynamic URL parameters   |
| `useNavigate()`                             | Programmatic navigation         |
| `<Navigate to="" />`                        | Redirect to another route       |

---

## Context

Context API is React’s built-in way to share data across many components without having to pass props through every level of the component tree.

Used to globally store:
- Theme (light/dark)
- User authentication
- Language/localization
- Settings

### Context Components
| Concept           | Purpose                                           |
| ----------------- | ------------------------------------------------- |
| `createContext()` | Creates a context object                          |
| `<Provider>`      | Wraps components, giving them access to context   |
| `useContext()`    | Hook to consume context in a component            |
| `<Consumer>`      | Older API for consuming context (less common now) |

### Usage
- Create a context folder.

**Create Context**

```js
// src/context/Theme/ThemeContext.js
import { createContext } from "react";

// Default value (optional but good for auto-complete / safety)
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {}
});

```

**Create Provider**

```js
// src/context/Theme/ThemeProvider.js
import { useState, useMemo } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  // Memoize to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
```

**Create Custom-Hook**
```js
// src/context/Theme/useTheme.js
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
```

---

## React Performance

Re-renders in React occur 
- Every time state or props change, the component re-renders.
- All children of that component also re-render by default.

Avoid Unneeded State
- Store minimal state. Compute everything else as needed.

### React.memo (Component Memoization)
- **Purpose:** Prevent re-rendering a component if props didn’t change.
- **Use case:** Lists, cards, tables, complex components.

Example
```js
const Item = React.memo(({ name, onClick }) => {
  console.log("Rendering:", name);
  return <li onClick={() => onClick(name)}>{name}</li>;
});
```
Now Item only re-renders when name changes

### useMemo (Value Memoization)
- **Purpose:** Memoizes expensive calculations to avoid recalculating on every render.
- **Use case:** Filtering, sorting, mapping large arrays.

Example
```js
const sortedList = useMemo(() => {
  return list.sort((a, b) => a - b);
}, [list]);
```
Only recalculates when list changes.

### useCallback (Function Memoization)

- **Purpose:** Prevents creating a new function instance every render, which can break React.memo in child components.
- **Use case:** Lists, Forms, Modals, Tables, Charts, Maps, Dashboards, Real-time apps, Heavy UI components.

Example
```js
const handleClick = useCallback(() => {
  console.log("Clicked!");
}, []);
```
Now the function stays the same between renders, so memoized children won’t re-render.

### Using Memoziation and Callback

**E-Commerce (Product Lists)**

In a product lists with filters, sorting, and add-to-cart actions, changing a filter or cart state can cause all product cards to re-render, slowing the UI. 
- Use **React.memo** to prevent product cards from re-rendering unless their data changes. 
- Use **useMemo** to avoid re-running expensive filter and sort logic on every render.
- Use **useCallback** to keep add-to-cart handlers stable so they don’t trigger unnecessary re-renders. 

**Chat Applications (Messages)**

In chat apps with hundreds of messages and real-time updates, typing or sending a message can cause all message components to re-render, leading to lag and flicker.

* Use **React.memo** to ensure message bubbles re-render only when the message data changes.
* Use **useMemo** to keep the message list reference stable and avoid unnecessary processing.
* Use **useCallback** to keep interaction handlers stable so they don’t trigger re-renders.

**Tables & Dashboards**

In dashboards with large tables, pagination, sorting, and filtering, changing pages or sort order can cause the entire table to re-render, slowing the UI.

* Use **React.memo** to prevent table rows from re-rendering unless row data changes.
* Use **useMemo** to recompute pagination, filtering, and sorting only when inputs change.
* Use **useCallback** to keep row action handlers stable and avoid unnecessary re-renders.

**When to Use Performance Enhancers**

Use performance enhancers when rendering large lists, passing functions to memoized child components, performing expensive calculations, or building real-time and data-heavy UIs. Do not use them blindly—only apply them when unnecessary re-renders or performance issues are observed.

---

## Custom Hook

A custom hook is a normal JavaScript function that:

- Uses React hooks (useState, useEffect, etc.)
- Starts with the prefix use
- Extracts reusable logic, not UI

Custom hooks do not return JSX.  
They return state, data, and functions.

### Why Custom Hooks
Many components repeat the same logic:
- Fetching data
- Loading and error handling
- Syncing state with localStorage
- Managing forms or browser events

Without custom hooks:
- Logic is duplicated
- Components become large and hard to read
- Bugs are repeated in multiple places

Custom hooks solve this by separating logic from UI.

### Example
Fetching data is always repeated and needs:
- loading state
- error handling
- cleanup logic
- re-fetch when URL changes

**`useFetch()`**

```js
import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    setLoading(true);
    setError(null);

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then(data => {
        if (isMounted) setData(data);
      })
      .catch(err => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}

```

**Note:** When useFetch unmounts, isMounted becomes False. When async finishes, isMounted is false so no memory leak occurs.

---