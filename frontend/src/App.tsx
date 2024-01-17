import * as React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Card from "./components/card";
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Navigation from "./components/navigation";

import AboutPage from "./aboutpage";
import Buyabike from "./buyabike";

const Home = () => (
	<>
		<div className="flex flex-col w-full h-screen bg-[url('./assets/brick2.jpeg')] bg-center overflow-hidden snap-y snap-mandatory">
			<div>
				<h2 className="font-carter text-6xl font-bold text-yellow text-center pt-96">
					Discover
				</h2>
			</div>
		</div>
		<div>
			<div className="flex flex-col w-screen h-screen bg-brown snap-y snap-mandatory">
				<h2 className="font-carter p-4 pt-16 text-3xl text-orange text-xl"> Environmental Benefits of Riding a Bike </h2>
				<div className="h-96 w-1/2 p-4 text-yellow text-xl font-tenor bg-brown">
					<i className="fa fa-bicycle">
						{" "}
						Convenient
					</i>
					<p>
						Sunt in culpa qui officia
						deserunt mollit anim id est
						laborum consectetur adipiscing
						elit, sed do eiusmod tempor
						incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim
						veniam, quis nostrud
						exercitation ullamco.
					</p>
					<i className="fa fa-bicycle">
						{" "}
						Efficient
					</i>
					<p>
						Sunt in culpa qui officia
						deserunt mollit anim id est
						laborum consectetur adipiscing
						elit, sed do eiusmod tempor
						incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim
						veniam, quis nostrud
						exercitation ullamco.
					</p>
					<i className="fa fa-bicycle">
						{" "}
						Reduces Traffic
					</i>
					<p>
						Sunt in culpa qui officia
						deserunt mollit anim id est
						laborum consectetur adipiscing
						elit, sed do eiusmod tempor
						incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim
						veniam, quis nostrud
						exercitation ullamco.
					</p>
					<i className="fa fa-bicycle">
						{" "}
						Be Social
					</i>
					<p>
						Sunt in culpa qui officia
						deserunt mollit anim id est
						laborum consectetur adipiscing
						elit, sed do eiusmod tempor
						incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim
						veniam, quis nostrud
						exercitation ullamco.
					</p>
				</div>
			</div>
		</div>
	</>
);

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navigation />
					<Switch>
						<Route
							exact
							path="/"
							component={Home}
						/>
						<Route
							path="/aboutpage"
							component={AboutPage}
						/>
						<Route
							path="/buyabike"
							component={Buyabike}
						/>
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
