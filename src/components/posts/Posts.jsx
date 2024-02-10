import Post from "../post/Post";
import "./posts.scss"

const Posts = () => {

    // Temporary
    const posts = [
        {
            id: "1",
            name: "Pankhuri",
            userId: "1",
            profilePic: "https://images.pexels.com/photos/4353618/pexels-photo-4353618.jpeg?auto=compress&cs=tinysrgb&w=400",
            desc: "Lorem ipsum dolor sit, /pexelamet consectetur adipisicing.",
            img:"https://images.pexels.com/photos/267403/pexels-photo-267403.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
            id: "2",
            name: "Pankhuri",
            userId: "2",
            profilePic: "https://images.pexels.com/photos/19861151/pexels-photo-19861151/free-photo-of-a-mountain-stream-is-flowing-through-a-forest.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa provident distinctio assumenda!"
        },
       
    ];

    return <div className="posts">
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
        </div>;
    
};

export default Posts