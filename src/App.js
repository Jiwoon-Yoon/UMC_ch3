import { BrowserRouter, Route, Routes } from "react-router-dom"
import Celebrity from "./pages/Celebrity";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import TV from "./pages/TV";
import Movies from "./pages/Movies";
import Header from "./Components/Header";
import PageDetail from "./pages/PageDetail";
import Login from "./pages/Login";


function App(){
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie" element={<Movies/>} />
          <Route path="/movie/:title" element={<PageDetail/>}/>
          <Route path="/tv" element={<TV/>} />
          <Route path="/person" element={<Celebrity/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
