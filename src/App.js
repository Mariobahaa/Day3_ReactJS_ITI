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
      <Route path="/artists" component={Artists}></Route>
      <Route path="/artist-details" component={ArtistDetails}></Route>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
