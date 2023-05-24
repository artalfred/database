import { useRef, useEffect } from "react";

// TO FOCUS ON THE INPUT ONCE THE BUTTON IS CLICKED

export default function SampleFocus() {
  const inputReference = useRef();

  const sampleRef = () => {
    inputReference.current.focus();
  };

  //   useEffect(() => {
  //     inputReference.current.focus();
  //   });

  return (
    <div>
      <h2>useRef Sample</h2>
      <button onClick={sampleRef}>Register Now</button>
      <input type="text" id="sampleInput" ref={inputReference} />
    </div>
  );
}
