import * as React from "react";
import { Link } from "gatsby";

import useAuth from "../hooks/useAuth";

export default function Nav() {
  const { loggedIn } = useAuth();

  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        {!loggedIn ? (
          <>
            <li>
              <Link to="/log-in">
                Log In
              </Link>
            </li>
            <li>
              <Link to="/sign-up">
                Sign Up
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/members">
                Members
              </Link>
            </li>
            <li>
              <Link to="/create-post">
                Create Post
              </Link>
            </li>
            <li>
              <Link to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/log-out">
                Log Out
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
