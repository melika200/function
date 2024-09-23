import "./VisualComponent.css";
const VisualComponent = ({ show, handleclose }) => {
  return (
    <>
      <div className={`component ${show ? "show" : ""}`}>
        <h6>Visual Info</h6>
        <p>
          "Visyal" likely refers to Visual Studio, a popular integrated
          development environment (IDE) for software development. Visual Studio
          offers a range of features for building, debugging, and deploying
          applications across multiple platforms. There are two main versions:
        </p>
        <p>
          Visual Studio Code: A lightweight, open-source code editor primarily
          used for web and cloud development.
        </p>
        <p>
          Visual Studio IDE: A more comprehensive IDE for building a wider range
          of applications, including desktop, mobile, and web.
        </p>
        <button
          className="close"
          onClick={handleclose}
          aria-label="close modal"
        >
          <span aria-hidden="true">close</span>
        </button>
      </div>
    </>
  );
}
export default VisualComponent
