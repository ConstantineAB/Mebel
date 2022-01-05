import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Header } from "./components/header";
import { HomePage } from "./pages/home-page";
import { GamePage } from "./pages/game-page";
import { OrderPage } from "./pages/order-page";
import { Provider } from "react-redux";
import { store } from "./store";
import { NaviBar } from "./components/navibar";
import { Container } from "react-bootstrap";
import { KitchenPage, MegPage } from "./pages/meg-page";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Slide } from "./components/slide/slide";
import { OfficePage } from "./pages/office-page";
import { DesignPage } from "./pages/design-page";
import { VannPage } from "./pages/vann-page/vann-page";

function App() {
  return (
    <Provider store={ store }>
      <Container>
      <Router>
        <div className="App">
          <NaviBar />
          <Header />
            <Switch>
              <Route exact path="/order">
                <OrderPage />
              </Route>
              <Route exact path="/app/:title">
                <GamePage />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/soft">
                <MegPage />
              </Route>
              <Route exact path="/office">
                <OfficePage />
              </Route>
              <Route exact path="/design">
                <DesignPage />
              </Route>
              <Route exact path="/bath">
                <VannPage />
              </Route>
            </Switch>
        </div>
      </Router>
      </Container>
    </Provider>
  );
}

export default App;
