import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/home';
import Section from './containers/Section';
import PodcastSection from './containers/PodcastSection';
import Navbar from './components/navbar';
import ScrollToTop from "./components/ScrollToTop";
import { opinion_articles } from './data/articles';
import { React, useState, useEffect } from 'react';
import { sections } from './data/sections';
import Logo from './components/logo';

const App = () => {
  const [currentSection, setSection] = useState("Home");

  useEffect(() => {
    setCurrentSection();
  }, []);

  useEffect(() => {
    console.log(currentSection);
  }, [currentSection]);

  const setCurrentSection = () => {
    const currentPath = window.location.pathname;

    var activeSection = sections.find(section => {
      return section.url === currentPath
    })

    setSection(activeSection ? activeSection.title : "Home");
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Logo />
      <Navbar currentSection={currentSection} setSection={setSection} />
      <ScrollToTop>
        <Switch>
          <Route
            exact path='/'
            render={(props) => (
              <Home {...props} next='Podcast' nextLink='/podcast' setSection={setSection} />
            )}
          />
          <Route
            exact path='/podcast'
            render={(props) => (
              <PodcastSection {...props} articles={opinion_articles} header='Podcast' next='Opinion' nextLink='/opinion' setSection={setSection} />
            )}
          />
          <Route
            exact path='/opinion'
            render={(props) => (
              <Section {...props} articles={opinion_articles} isOpinionSection header='Opinion' next='Credits' nextLink='/#credits' setSection={setSection} />
            )}
          />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
