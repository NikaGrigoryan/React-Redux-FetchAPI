import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
// import Boxes from "./Components/Categories/Boxes";
// import Clothes from "./Components/Categories/Clothes";
// import Sinks from "./Components/Categories/Sinks";
// import Hats from "./Components/Categories/Hats";
// import Space from "./Components/Categories/Space";
// import Sunglasses from "./Components/Categories/Sunglasses";
// import Ties from "./Components/Categories/Ties";
import { Provider } from "react-redux";
import Page from "./Components/Page/Page";


function App()
{
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/boxes" element={<Page url = 'https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=5'/>} />
          <Route path="/clothes" element={<Page url = 'https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=3'/>} />
          <Route path="/sinks" element={<Page url = 'https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=6'/>} />
          <Route path="/hats" element={<Page url = 'https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1'/>} />
          <Route path="/space" element={<Page url = 'https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=2'/>} />
          <Route path="/sunglasses" element={<Page url = 'https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=4'/>} />
          <Route path="/ties" element={<Page url = 'https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=7'/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;