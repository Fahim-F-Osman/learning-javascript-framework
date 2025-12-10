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
- [Resource For Class Components](https://www.w3schools.com/react/react_class.asp)

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