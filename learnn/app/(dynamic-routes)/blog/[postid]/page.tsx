import axios from "axios";

export default async function blog({ params }: any) {
    console.log("Params:", params);  // 🔍 Debugging line
    const postId = params.postid;    // ✅ Correctly accessing `postid`
    
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${postId}`);
        const data = response.data;
        console.log("data:", data);

        return (
            <>
                <h1>Hi Nikhil, post ID is {postId}</h1>
                <p>Title: {data.title}</p>
            </>
        );
    } catch (error) {
        console.error("Error fetching data:", error);

        return (
            <>
                <h1>Post not found for ID: {postId}</h1>
            </>
        );
    }
}