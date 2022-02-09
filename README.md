# Welcome to React!

### 1. What is React?

React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) components of mobile and web applications as it follows the component-based approach. It’s ‘V’ in MVC.

The important features of React are:

-   It supports server-side rendering.
-   It will make use of the virtual DOM rather than real DOM (Data Object Model) as RealDOM manipulations are expensive.
-   It follows unidirectional/one-way data binding or data flow.
-   It uses reusable or composable UI components for developing the view.

Webpack is a static module bundler for JavaScript applications. When Webpack processes your application, it builds a dependency graph which maps out the modules that your project needs and generates one or more bundles. It can handle not only combination and minification of JavaScript and CSS files, but also other assets such as image files (spriting) through the use of plugins.

Babel is a transpiler i.e. it converts the JSX to vanilla JavaScript. You can view babel as an intermediate step between your code and "executable" code. React also uses ES6, which is not supported by most of the browsers. Babel converts the ES6 code to a code which is compatible with the browsers mostly ES5.

### 2. What are the advantages of using React?

MVC is generally abbreviated as Model View Controller.

-   **Use of Virtual DOM to improve efficiency:** React uses virtual DOM to render the view. As the name suggests, virtual DOM is a virtual representation of the real DOM. Each time the data changes in a react app, a new virtual DOM gets created. Creating a virtual DOM is much faster than rendering the UI inside the browser. Therefore, with the use of virtual DOM, the efficiency of the app improves.
-   **Gentle learning curve:**  React has a gentle learning curve when compared to frameworks like Angular. Anyone with little knowledge of javascript can start building web applications using React.
-   **SEO friendly:**  React allows developers to develop engaging user interfaces that can be easily navigated in various search engines. It also allows server-side rendering, which boosts the SEO of an app.
-   **Reusable components:** React uses component-based architecture for developing applications. Components are independent and reusable bits of code. These components can be shared across various applications having similar functionality. The re-use of components increases the pace of development.
-   **Huge ecosystem of libraries to choose from:** React provides you with the freedom to choose the tools, libraries, and architecture for developing an application based on your requirement.

### 3. What are keys in React?

A key is a special string attribute that needs to be included when using lists of elements.

**Importance of keys -**
-   Keys help react identify which elements were added, changed or removed.
-   Keys should be given to array elements for providing a unique identity for each element.
-   Without keys, React does not understand the order or uniqueness of each element.
-   With keys, React has an idea of which particular element was deleted, edited, and added.
-   Keys are generally used for displaying a list of data coming from an API

### 4. What is JSX?

JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).

### 5. What is react state?

Every component in react has a built-in state object, which contains all the property values that belong to that component.  
In other words, the state object controls the behavior of a component. Any change in the property values of the state object leads to the re-rendering of the component.
|Props  |State  |
|--|--|
| Immutable | Owned by its component |
|Has better performance|Locally scoped|
|Can be passed to child components|Writeable/Mutable|
||Changes to state can be asynchronous|
||can only be passed as props

### 6. What is prop drilling in React?
Sometimes while developing React applications, there is a need to pass data from a component that is higher in the hierarchy to a component that is deeply nested. To pass data between such components, we pass props from a source component and keep passing the prop to the next component in the hierarchy till we reach the deeply nested component.

The  **disadvantage**  of using prop drilling is that the components that should otherwise be not aware of the data have access to the data.

### 7. How to pass data from child component back to parent/higher component?
Using **callback**

### 8. What are Higher Order Components?

Simply put, Higher-Order Component(HOC) is a function that takes in a component and returns a new component.

**When do we need a Higher Order Component?**

While developing React applications, we might develop components that are quite similar to each other with minute differences. In most cases, developing similar components might not be an issue but, while developing larger applications we need to keep our code  **DRY**, therefore, we want an  **abstraction**  that allows us to define this logic in a single place and share it across components. HOC allows us to create that abstraction.

### 9. What are the lifecycle methods of React?

The various lifecycle methods are:

-  `componentWillMount()`: Deprecated, Move logic to `constructor` or `componentDidMount()`
-  `constructor()`: This method will be called when the component is initiated before anything has been done. It helps to set up the initial state and initial values.
-  `static getDerivedStateFromProps()`: This method will be called just before element(s) rendering in the DOM. It helps to set up the state object depending on the initial props. The getDerivedStateFromProps() method will have a state as an argument and it returns an object that made changes to the state. This will be the first method to be called on an updating of a component.
-   `render()`: This method will output or re-render the HTML to the DOM with new changes. The render() method is an essential method and will be called always while the remaining methods are optional and will be called only if they are defined.
-   `componentDidMount()`: This method will be called after the rendering of the component. Using this method, you can run statements that need the component to be already kept in the DOM.
-   `shouldComponentUpdate()`: The Boolean value will be returned by this method which will specify whether React should proceed further with the rendering or not. The default value for this method will be True.
-   `getSnapshotBeforeUpdate()`: This method will provide access for the props as well as for the state before the update. It is possible to check the previously present value before the update, even after the update.
-   `componentDidUpdate()`: This method will be called after the component has been updated in the DOM.
-   `componentWillUnmount()`: This method will be called when the component removal from the DOM is about to happen

### 10. Explain about types of Hooks in React.

There are two types of Hooks in React. They are:

**1. Built-in Hooks:**  The built-in Hooks are divided into 2 parts as given below:

-   **Basic Hooks:**
    -   `useState()`: This functional component is used to set and retrieve the state.
    -   `useEffect()`: It enables for performing the side effects in the functional components.
    -   `useContext()`: It is used for creating common data that is to be accessed by the components hierarchy without having to pass the props down to each level.
-   **Additional Hooks:**
    -   `useReducer()`  : It is used when there is a complex state logic that is having several sub-values or when the upcoming state is dependent on the previous state. It will also enable you to optimization of component performance that will trigger deeper updates as it is permitted to pass the dispatch down instead of callbacks.
    -   `useMemo()`  : This will be used for recomputing the memoized value when there is a change in one of the dependencies. This optimization will help for avoiding expensive calculations on each render.
    -   `useCallback()`  : This is useful while passing callbacks into the optimized child components and depends on the equality of reference for the prevention of unneeded renders.
    -   `useImperativeHandle()`: It will enable modifying the instance that will be passed with the ref object.
    -   `useDebugValue()`: It is used for displaying a label for custom hooks in React DevTools.
    -   `useRef()`  : It will permit creating a reference to the DOM element directly within the functional component.
    -   `useLayoutEffect()`: It is used for the reading layout from the DOM and re-rendering synchronously.

**2. Custom Hooks:** A custom Hook is basically a function of JavaScript. The Custom Hook working is similar to a regular function. The “use” at the beginning of the Custom Hook Name is required for React to understand that this is a custom Hook and also it will describe that this specific function follows the rules of Hooks. Moreover, developing custom Hooks will enable you for extracting component logic from within reusable functions.

## Rules of hooks

### Only Call Hooks at the Top Level

**Don’t call Hooks inside loops, conditions, or nested functions.**  Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple  `useState`  and  `useEffect`  calls. (If you’re curious, we’ll explain this in depth  [below](https://reactjs.org/docs/hooks-rules.html#explanation).)

### [](https://reactjs.org/docs/hooks-rules.html#only-call-hooks-from-react-functions)Only Call Hooks from React Functions

**Don’t call Hooks from regular JavaScript functions.**  Instead, you can:

-   ✅ Call Hooks from React function components.
-   ✅ Call Hooks from custom Hooks

By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.