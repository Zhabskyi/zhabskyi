import Trello from "../images/portfolio_trello.png";
import NextJS from "../images/portfolio_nextJS.png";
import Decisions from "../images/portfolio_decisions.png";
import Scheduler from "../images/portfolio_scheduler.png";
import Tweeter from "../images/portfolio_tweeter.png";
import TinyApp from "../images/portfolio_tinyapp.png";


const data = [
  {
    title: "Trello Clone",
    description:
      " Used technology: HTML, CSS, JavaScript, React, Redux. React app with some functionality as a real Trello web app. Uses Trello API and  Trello authentication",
    github: "https://github.com/Zhabskyi/trello-clone",
    website: "https://trello-clone-redux.herokuapp.com/",
    picture: Trello
  },
  {
    title: "NextJS",
    description:
      "SPA using NextJS and React Router. Mobile friendly page landing",
    github: "https://github.com/Zhabskyi/NextJS_Landing",
    website: "https://ssr-next-app.herokuapp.com/",
    picture: NextJS
  },
  {
    title: "Decision maker",
    description:
      "Used technology: HTML, SASS, JavaScript, jQuery, AJAX, NodeJS, Express, PostgreSQL. Create polls and receive results values ranked according to a Bordo Score",
    github: "https://github.com/cmastel/decisions",
    website: "https://lhldescions.herokuapp.com/",
    picture: Decisions
  },
  {
    title: "Scheduler",
    description:
      "Used technology: HTML, SASS, JavaScript, React, AJAX, NodeJS, Express, PostgreSQL. React SPA application that allows users to book and cancel interviews. The server deployed on Heroku and app is on Netlify",
    github: "https://github.com/Zhabskyi/scheduler",
    website: "https://hopeful-shannon-8360e8.netlify.com/",
    picture: Scheduler
  },
  {
    title: "Tweeter",
    description:
      "Used technology: HTML, SASS, JS, jQuery, AJAX, NodeJS, Express. Tweeter is a simple, SPA Twitter clone where you can post tweets",
    github: "https://github.com/Zhabskyi/tweeter",
    website: "",
    picture: Tweeter
  },
  {
    title: "URLshortener",
    description:
      "Used technology: HTML, CSS, JavaScript, NodeJS, Express, EJS. URL shortener  is a full-stack web application built with Node and Express that allows users to shorten long URLs",
    github: "https://github.com/Zhabskyi/tweeter",
    website: "",
    picture: TinyApp
  }
];

export default data;
