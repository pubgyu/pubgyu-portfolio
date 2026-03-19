import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";

import Footer from "components/Footer";
import Header from "components/Header";
import Error from "pages/Error";
import Detail from "pages/Detail";
import Main from "pages/Main";
import Test from "pages/Test";
import { Scroll } from "script/Scroll";
import "styles/Global.scss";

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
