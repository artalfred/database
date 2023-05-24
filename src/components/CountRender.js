import { useState, useRef } from "react";

export default function CountRender() {
  const [value, setValue] = useState("");
  const RenderCount = useRef(0);

  const ChangeInput = (e) => {
    setValue(e.target.value);
    RenderCount.current++;
  };

  return (
    <div>
      <h1>Count render Sample</h1>
      <input type="text" onChange={ChangeInput} />
      <br /> <br /> {value} <br />
      <br />
      <p>Times rendered: {RenderCount.current} </p>
    </div>
  );
}
