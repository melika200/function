import { useState } from "react";
import VisualComponent from "../Components/VisualComponent";

export default function Visual() {
  const [show, setShow] = useState(false);
  const VisualHandler = (title, value) => {
    if (title == "visual") {
      setShow(value);
    }
    if (title == "close") {
      setShow(value);
    }
  };
  return (
    <>
      <div className="VisualState">
        <h6>Visual Station</h6>
        <p>
          Visual Studio Code is a free and open-source code editor developed by
          Microsoft for Windows , Linux, and macOS. It is a popular choice for
          developers due to its extensibility and features like syntax
          highlighting, debugging, and version control.
        </p>
        <button
          className="btnVisual"
          onClick={(title, value) =>
            VisualHandler(title = "visual",value = true)
          }
        >
          View More
        </button>
        <VisualComponent
          show={show}
          handleclose={(title,value)=> VisualHandler(title="close",value=false)}
        />
      </div>
    </>
  );
}
