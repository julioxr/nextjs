import { LikeButton } from "./LikeButton";

const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await res.json();
};

export async function ListOfPosts() {
    const posts = await fetchPosts();
    const handleClick = () => {
        alert("me gusta este post");
    };

    return posts.slice(0, 5).map(({ id, title, body }) => (
        <>
            <article key={id}>
                <h1>{title}</h1>
                <p>{body}</p>
            </article>
            <br />
            <LikeButton id={id} />
            <br />
            <br />
        </>
    ));
}
