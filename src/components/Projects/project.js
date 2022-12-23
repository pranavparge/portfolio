import React from "react";
import "./project.css";
import "./index.css";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
// import Browser from "../Browser";
import Arrow from "../../assets/right-arrow.svg";
import Separator from "../Separator";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Project({
  projectName,
  projectRole,
  projectObj,
  projectBrowser,
  projectSize,
  projectStack,
  projectDescription,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Toolbar
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            size="large"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>

        <div className="dialog">
          <h1 className="project-header-dialog">
            {projectName}
            <span className="dotColorTheme">.</span>
          </h1>
          <Separator
            style={{
              width: "100%",
              margin: "0",
              marginTop: "4vh",
              marginBottom: "2vh",
            }}
          />
          <section className="project-brief-dialog">
            Role<span className="dotColorTheme"> - </span> {projectRole}
            <br /> Team Size <span className="dotColorTheme"> - </span>
            {projectSize} members
            <br />
            Technology Stack <span className="dotColorTheme"> - </span>
            {projectStack}
            <br />
            Description <span className="dotColorTheme"> - </span>
            {projectDescription}
          </section>
        </div>
      </Dialog>

      <section className="project-info">
        <h2 className="project-header">
          {projectName}
          <span className="dotColorTheme">.</span>
          <div className="project-role">{projectRole}</div>
        </h2>
        <p className="project-objective">
          {projectObj}
          <button className="learn-more" onClick={handleClickOpen}>
            Learn more{" "}
            <img
              style={{
                height: "5vh",
                width: "5vw",
              }}
              src={Arrow}
              alt="Twilio"
            ></img>
          </button>
        </p>
      </section>
      <section className="project-details">
        {/* <Browser>{projectBrowser}</Browser> */}
      </section>
    </>
  );
}

export default Project;
