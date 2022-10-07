
import {BrowserRouter, Routes, Route } from "react-router-dom";
import AosInit from "./component/layout/aos";


import ScrollToTop from "./component/layout/scrolltop";
import ErrorPage from "./page/404";
import Home from "./page/home";
import OnePage from "./page/onepage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ScrollToTop />
				<AosInit />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="index-single" element={<OnePage />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
