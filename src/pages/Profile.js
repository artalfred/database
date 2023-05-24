import React, { useContext, useState } from "react";
import sampleContext from "./Data";

export default function Profile() {
  const { user, setUser } = useContext(sampleContext);

  return (
    <div>
      <h1>Profile Page {user}</h1>
    </div>
  );
}
