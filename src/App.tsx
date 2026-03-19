import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";

import Footer from "Components/Footer";
import Header from "Components/Header";
import Error from "Pages/Error";
import Detail from "Pages/Detail";
import Main from "Pages/Main";
import Test from "Pages/Test";
import { Scroll } from "Script/Scroll";
import "Styles/Global.scss";

Scroll();

export default function App() {
  return (
    <>
      <Header />

      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/detail/:id" exact component={Detail} />
          <Route path="/test" exact component={Test} />
          <Route path="*" exact component={Error} />
        </Switch>
      </AnimatePresence>

      <Footer />
    </>
  );
}
