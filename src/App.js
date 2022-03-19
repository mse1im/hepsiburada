import React, { Suspense } from "react";
import Loader from "./Loader";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <Suspense fallback={<Loader />}>
       <Header/>
      <Main />
    </Suspense>
  );
}
export default App;