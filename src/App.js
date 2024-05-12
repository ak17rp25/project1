import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };
  const [myStyle, setmyStyle] = useState({
    color: "black",
  });
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setmyStyle({
        color: "white",
      });
      showAlert("Light Mode has been Enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      setmyStyle({
        color: "black",
      });
      showAlert("Dark Mode has been enabled", "success");
    }
  };

  setTimeout(() => {
    if(alert){
      setalert(null);
    }
  }, 1000);

  return (
    <>
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode}></NavBar>
      <Alert alert={alert}></Alert>
      <div className="container">
        <TextForm
          heading="Enter Your Text"
          showAlert={showAlert}
          myStyle={myStyle}
        ></TextForm>
      </div>
    </>
  );
}

export default App;
