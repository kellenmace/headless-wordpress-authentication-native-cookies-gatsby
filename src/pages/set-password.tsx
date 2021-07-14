import * as React from "react";

import Layout from "../components/Layout";
import SetPasswordForm from "../components/SetPasswordForm";

export default function SetPassword() {
  const params = new URLSearchParams(window.location.search);
  const resetKey = params.get('key') || '';
  const login = params.get('login') || '';

  return (
    <Layout>
      <h1>Set Password</h1>
      <SetPasswordForm resetKey={resetKey} login={login} />
    </Layout>
  )
}
