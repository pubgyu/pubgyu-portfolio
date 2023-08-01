import React from 'react';
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';

import Main from '@/Pages/Main';
import Detail from '@/Pages/Detail';
import Error from '@/Pages/Error';

import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import '@/Styles/Global.scss';

export default function App() {
	const location = useLocation();
	return (
		<BrowserRouter>
			<Header />
			
			<AnimatePresence>
				<Switch>
					<Route path="/" exact component={ Main } />
					<Route path="/detail/:id" exact component={ Detail } />
					<Route path="*" exact component={ Error } />
				</Switch>
			</AnimatePresence>

			<Footer />
		</BrowserRouter>
	);
}
