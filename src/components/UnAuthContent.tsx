import * as React from "react";
import { useEffect, ReactNode } from "react";
import { navigate } from "gatsby";

import useAuth from "../hooks/useAuth";

export default function UnAuthContent({ children }: { children: ReactNode }) {
  const { loggedIn, loading } = useAuth();

  // Navigate authenticated users to Members page.
  useEffect(() => {
    if (!loading && loggedIn) {
      navigate('/members');
    }
  }, [loggedIn, loading, navigate]);

  if (!loggedIn) {
    return <>{children}</>;
  }

  return <p>Loading...</p>;
}
