import "./UserCard.css";
import TabButton from "../TabButton/TabButton.jsx";
import { useState } from "react";

export default function UserCard({ picture, name, email }) {
  const [liked, setLiked] = useState(false); // حالة اللايك
  const [likesCount, setLikesCount] = useState(0); // عداد اللايك
  const [showEmail, setShowEmail] = useState(true); // حالة عرض الايميل

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikesCount((prev) => (liked ? prev - 1 : prev + 1)); // إذا كان مسبقاً لايك، نقص واحد، وإلا زد واحد
  };

  const toggleEmail = () => setShowEmail((prev) => !prev);

  return (
    <li className="user-card">
      <img src={picture.large} alt={`${name.first} ${name.last}'s avatar`} />
      <h3>{`${name.first} ${name.last}`}</h3>

      {showEmail && <p>{email}</p>}

      <div className="user-card-buttons">
        <TabButton
          label={
            liked ? `👍 ${likesCount}` : `👎 ${likesCount}`
          }
          onClick={toggleLike}
        />
        <TabButton
          label={showEmail ? "Hide Email" : "Show Email"}
          onClick={toggleEmail}
        />
      </div>
    </li>
  );
}
