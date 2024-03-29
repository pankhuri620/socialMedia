import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    // Temporary
  const comments = [
    {
      id: "1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, delectus voluptatum quidem facere quaerat eius ut exercitationem commodi sit culpa animi hic quasi repellendus ipsum consectetur quisquam veniam praesentium rerum obcaecati quis reprehenderit magni.",
      name: "Pankhuri",
      userId: "1",
      profilePic:
        "https://images.pexels.com/photos/4353618/pexels-photo-4353618.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: "2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa provident distinctio assumenda!",
      name: "Pankhuri",
      userId: "2",
      profilePic:
        "https://images.pexels.com/photos/19861151/pexels-photo-19861151/free-photo-of-a-mountain-stream-is-flowing-through-a-forest.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
  ];
  return (
    <div className="comments">
        <div className="write">
           <img src={currentUser.profilePic} alt="" />
           <input type="text" placeholder="Write a comment" />
           <button>Send</button>
        </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
