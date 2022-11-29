import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication";
import Checkout from "./routes/checkout/Checkout";
import Home from "./routes/home/Home";
import Navbar from "./routes/navigation/Navbar";
import Shop from "./routes/shop/Shop";
import { setCurrentUser } from "./store/user/user.acton";
import {
  createUserDocFromAuth,
  onAuthStateChangedListner,
} from "./utils/firebase/firebase";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) createUserDocFromAuth(user);
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);
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
