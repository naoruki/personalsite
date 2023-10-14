import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/Project";
import Contact from "./pages/contact";
import "./App.css";
import NavBar from "./components/NavBar";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					<Routes>
						<Route exact path="/" element={<Home />}></Route>
						<Route exact path="/about" element={<About />}></Route>
						<Route exact path="/project" element={<Project />}></Route>
						<Route exact path="/contact" element={<Contact />}></Route>
					</Routes>
				</div>
			</Router>
		);
	}
}

export default App;
