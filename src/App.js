import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Spinner from "./components/spinner/Spinner";
import { checkUserSession } from "./store/user/user.acton";
import Checkout from "./routes/checkout/Checkout";
import Navbar from "./routes/navigation/Navbar";
import Shop from "./routes/shop/Shop";
const Home = lazy(() => import("./routes/home/Home"));
const Authentication = lazy(() =>
  import("./routes/authentication/Authentication")
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <div className='App'>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            {/* dynamic routing */}
            <Route path='shop/*' element={<Shop />} />
            <Route path='auth' element={<Authentication />} />
            <Route path='checkout' element={<Checkout />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
