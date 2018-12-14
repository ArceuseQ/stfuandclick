import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../containers/HomePage';
import DetailPage from 'src/containers/DetailPage';
import Header from './layout/Header';
import ContentWrapper from './shared/ContentWrapper';
import Footer from './layout/Footer';

class App extends React.Component {
  public render() {
    return (
      <>
        <Header />
        <ContentWrapper>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/:team' component={DetailPage} />
          </Switch>
        </ContentWrapper>
        <Footer />
      </>
    );
  }
}

export default App;
