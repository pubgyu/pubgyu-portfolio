import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Scroll } from "@/Script/Scroll.js";
import { isIOS } from "react-device-detect";

import Main from "@/Pages/Main";
import Detail from "@/Pages/Detail";
import Test from "@/Pages/Test";
import Error from "@/Pages/Error";

import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "@/Styles/Global.scss";

// list 브런치에서 수정
// list 브런치에서 수정2
// list 브런치에서 수정3
Scroll();

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
