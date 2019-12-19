import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  project_hover: {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.9)",
    transform: "translateX(-50%)",
    transition: "0.5s",
    opacity: "0",
    overflow: "hidden"
  },
  project: {
    position: "relative",
    marginBottom: "20px",
    overflow: "hidden",
    width: "410px",
    height: "410px",
    "@media (min-width: 1200px)": {
      width: "550px",
      height: "550px"
    },
    "@media (max-width: 576px)": {
      width: "340px",
      height: "340px"
    },
    "&:hover $project_hover": {
      transform: "translateX(0%)",
      opacity: "1"
    }
  },
  project_thumb: {
    width: "100%",
    height: "100%",
    display: "block",
    margin: "auto",
    "& $img": {
      width: "100%"
    },
    "@media (min-width: 1200px)": {
      width: "550px",
      height: "550px"
    },
    "@media (max-width: 576px)": {
      width: "340px",
      height: "340px",
      "& $img": {
        width: "100%"
      }
    }
  },
  title: {
    position: "absolute",
    top: "15%",
    left: "0",
    right: "0",
    textAlign: "center"
  },
  col: {
    width: "auto",
    "@media (min-width: 1600px)": {
      flex: "0 0 33.3%",
      maxWidth: "33%"
    }
  },
  text: {
    padding: "20px",
    fontSize: "22px",
    "@media (max-width: 576px)": {
      fontSize: "16px",
      padding:'10px'
    },
  },
  link: {
    display: "inline-block",
    minWidth: "30px",
    minHeight: "30px",
    margin: "10px"
  },
  icon: {
    width: "auto !important",
    height: "auto"
  }
});

export default useStyles;
