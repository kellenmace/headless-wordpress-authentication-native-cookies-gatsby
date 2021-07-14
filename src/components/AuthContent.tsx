import * as React from "react";
import { useEffect, ReactNode } from "react";
import { navigate } from "gatsby";

import useAuth from "../hooks/useAuth";

export default function AuthContent({ children }: { children: ReactNode }) {
  const { loggedIn, loading } = useAuth();

  // Navigate unauthenticated users to Log In page.
  useEffect(() => {
    if (!loading && !loggedIn) {
      navigate('/log-in');
    }
  }, [loggedIn, loading, navigate]);

  if (loggedIn) {
    return <>{children}</>;
  }

  return <p>Loading...</p>;
}
