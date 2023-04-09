import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './containers/home';
import Section from './containers/Section';
import EyeSection from './containers/EyeSection';
import IlloSection from './containers/IlloSection';
import Navbar from './components/navbar';
import ScrollToTop from "./components/ScrollToTop";
import { uni_news_articles } from './data/articles';
import { city_news_articles } from './data/articles';
import { a_and_e_articles } from './data/articles';
import { opinion_articles } from './data/articles';
import { sports_articles } from './data/articles';
import { eye_articles } from './data/articles';
import { illustrations } from './data/articles';
import { React, useState, useEffect } from 'react';
import { sections } from './data/sections';
import Logo from './components/logo';

const App = () => {
  const [currentSection, setSection] = useState("Home");

  useEffect(() => {
    setCurrentSection();
  },[]);

  useEffect(() => {
    console.log(currentSection);
  },[currentSection]);

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
        <Navbar currentSection={currentSection} setSection={setSection}/>
        <ScrollToTop>
        <Switch>
            <Route
              exact path='/'
              render={(props) => (
                <Home {...props} next='Opinion' nextLink='/opinion' setSection={setSection}/>
              )}
            />
            <Route
              exact path='/opinion'
              render={(props) => (
                <Section {...props} articles={uni_news_articles} header='Opinion' next='Photos' nextLink='/photos' setSection={setSection}/>
              )}
            />
            <Route
              exact path='/photos'
              render={(props) => (
                <IlloSection {...props} articles={city_news_articles} header='Photos' next='Podcast' nextLink='/podcast' setSection={setSection}/>
              )}
            />
            <Route
              exact path='/podcast'
              render={(props) => (
                <Section {...props} articles={a_and_e_articles} header='Podcast' next='Credits' nextLink='/#credits' setSection={setSection}/>
              )}
            />
        </Switch>
        </ScrollToTop>
      </Router>
  );
}

export default App;
