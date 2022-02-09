import React, { useEffect, useState } from "react";
import { fetchPosts } from "../../apis";

const countInitialState = () => {
    console.log("countInitialState");
    return 5;
}

const FunctionalComp = () => {
    // const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(countInitialState());
    // const [count, setCount] = useState(() => countInitialState());

    useEffect(() => {
        console.log("useEffect");

        return () => {
            console.log("useEffect cleanup");
        }
        
    }, [window.location.pathname, count]);

    const increment = () => {
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(prev => prev + 1);
        // setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default FunctionalComp;