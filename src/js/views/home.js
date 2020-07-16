import React, { useState, useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { actions, store } = useContext(Context);
	useEffect(() => {
		//store.planets == [] ? (actions.getPlanets(), actions.getPeople()) : "";
		actions.getPlanets();
		actions.getPeople();
	}, []);
	return (
		<div className="text-center mt-5">
			Star Wars API
			{store.planets.length == 0 ? <p>No planets</p> : ""}
			<div className="w-100 people">
				{store.planets.length == 0 ? "" : <h1 className="d-flex text-danger p4">Characters</h1>}
				<div className="d-inline-flex">
					{store.people.map((event, index) => {
						return (
							//console.log("index = " + index);
							//<Card key={index} data={event} />
							//<div key={index}>{event.name}</div>
							<div className="card" key={index}>
								<div className="card-body">
									<img src="https://via.placeholder.com/400x200" />
									<h5 className="card-title">{event.name}</h5>
									<p className="card-text">
										<div>Gender: {event.gender}</div>
										<div>Hair Color: {event.hair_color}</div>
										<div>Eye Color: {event.eye_color}</div>
									</p>

									<div className="d-flex justify-content-between">
										<Link to={"./people/" + btoa(event.url)} data={event}>
											<div className="btn btn-primary" type="button" id={event.url}>
												More about {event.name}
											</div>
										</Link>
										<div
											key={index}
											className="btn btn-primary bg-primary d-flex justify-content-between"
											type="button"
											onClick={e => {
												alert("setFavorite " + event.name);
											}}>
											☆
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="w-100 planets">
				{store.planets.length == 0 ? "" : <h1 className="d-flex text-danger p4">Planets</h1>}
				<div className="d-inline-flex">
					{store.planets.map((event, index) => {
						return (
							<div className="card" key={index}>
								<div className="card-body">
									<img src="https://via.placeholder.com/400x200" />
									<h5 className="card-title">{event.name}</h5>
									<p className="card-text">
										<div>Population: {event.population}</div>
										<div>Terrain: {event.terrain}</div>
									</p>
									<div href="#" className="btn btn-primary">
										Go somewhere
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
