import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<button className="btn btn-primary">Favorites</button>
				{store.people.map((item, key) => {
					if (item.favorite == true) {
						return (
							<div
								className="navToggle"
								onClick={() =>
									(store.people.favorite = item.favorite
										? actions.toggleFavorite(item)
										: alert("false"))
								}>
								{item.name}
							</div>
						);
					} else {
						return "";
					}
				})}
			</div>
		</nav>
	);
};
