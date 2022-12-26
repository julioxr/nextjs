export default function Post({ params }) {
    const { id } = params;
    return <h1>El post {id}</h1>;
}
