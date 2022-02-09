export const fetchPosts = async() => {
    const data = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
    return data;
}