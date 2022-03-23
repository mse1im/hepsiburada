import React, { Suspense } from "react";
import Loader from "./Loader";
import Header from "./Components/Header";
import Main from "./Main";
import Submit from "./Components/Submit";
import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/submit" element={<Submit />}/>
      </Routes>
    </Suspense>
  );
}
export default App;