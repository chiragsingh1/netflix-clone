import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Nav from "../components/Nav";
import "./ProfileScreen.css";
import { signOut } from "@firebase/auth";
import { auth } from "../firebase";
import Plans from "../components/Plans";

function ProfileScreen() {
  // selecting user from redux store
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png"
            alt="user-avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <Plans />
              <button
                onClick={() => signOut(auth)}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
