import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication";
import Home from "./routes/home/Home";
import Navbar from "./routes/navigation/Navbar";
import Shop from "./routes/shop/Shop";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
