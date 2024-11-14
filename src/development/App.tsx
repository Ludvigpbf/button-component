import "./App.css";
import Button from "../component/Button";
/* import { useState, useEffect } from "react"; */

function App() {
  /*  const [buttonState, setButtonState] = useState<
    "normal" | "loading" | "success" | "error"
  >("normal");

  useEffect(() => {
    if (buttonState === "loading") {
      // Simulate a network request
      setTimeout(() => {
        setButtonState("success");
        setTimeout(() => {
          setButtonState("error");
        }, 2000);
      }, 2000);
    }
  }, [buttonState]);

  const handleClick = () => {
    setButtonState("loading");
  };

  const adaptiveText = {
    normal: "Click me",
    loading: "Loading...",
    success: "Success!",
    error: "Error!",
  }; */
  return (
    <>
      <Button
       
     
        borderColor="white"
        variant="outlined"
        borderStyle="dashed"
        


        size="small"

      />
    </>
  );
}

export default App;
