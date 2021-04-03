import logo from './logo.svg';
import './App.css';
import Artists from './components/Artists';
import ArtistDetails from './components/ArtistDetails';


import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Artists}></Route>
      <Route path="/artists/:id" component={ArtistDetails}></Route>
      <Route path="/artists" component={Artists}></Route>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
