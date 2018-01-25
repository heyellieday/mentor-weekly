import React from "react";
import Link from "next/link";
import SignIn from "../pages/auth/sign-in";

export default () => (
  <div>
    <h1>You can't see this!</h1>
    <p>
      You're not authenticated yet. Maybe you want to{" "}
      <Link href="/pages/auth/sign-in">
        <a>sign in</a>
      </Link>{" "}
      and see what happens?
    </p>
  </div>
);
