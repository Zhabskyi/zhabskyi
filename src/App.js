import React from 'react';
import './styles.js';
import useStyles from "./styles";

import Nav from "./components/nav/Nav";
import TopSection from './components/topSection/TopSection';
import PortfolioSection from './components/portfolioSection/PortfolioSection';
import SkillsSection from './components/skillsSection/SkillsSection';
import Divider from './components/divider/Divider';

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Nav />
      <TopSection />
        <Divider color={'rgb(212, 204, 119, 0.5)'}/>
      <PortfolioSection />
        <Divider color={'rgb(212, 204, 119, 0.5)'}/>
      <SkillsSection/>
    </div>
  );
}

export default App;
