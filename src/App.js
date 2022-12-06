import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication";
import Checkout from "./routes/checkout/Checkout";
import Home from "./routes/home/Home";
import Navbar from "./routes/navigation/Navbar";
import Shop from "./routes/shop/Shop";
import { checkUserSession } from "./store/user/user.acton";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          {/* dynamic routing */}
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
