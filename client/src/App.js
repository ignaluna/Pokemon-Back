import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom"
import LandingPage from './Components/Cointainers/Landing page/LandingPage';
import CreatePokemon from './Components/Cointainers/Forms/createPokemon';
import Detail from './Components/Cointainers/detail/Detail'
import Home from './Components/Cointainers/Home/Home';
import Nav from './Components/Cointainers/SearchBar/Nav.jsx';
import { getPokemons, getTypes } from "./Redux/actions"
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Start = useCallback(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
    navigate("/landing");
  }, [dispatch, navigate]);

  useEffect(() => {
    Start();
  }, []);


  return (
    <>
      <Nav />
      <Routes>
        <Route path='/landing' element={<LandingPage />} />
        <Route exact path='/' element={<Home />} />
        <Route path='/create' element={<CreatePokemon />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/:filter' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
