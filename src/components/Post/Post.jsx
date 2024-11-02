import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title, body} = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid red',
        padding: '10px',
        borderRadius: '20px',
        marginBottom: '5px'
    }

    const handleShowDetail = () => {
            navigate(`/post/${id}`)
    }


    return (
        <div style={postStyle}>
            <h3>Post of Id: {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;