import React, { useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export const People = props => {
	const { actions, store } = useContext(Context);
	const { urlHash } = useParams();
	const currentPerson = store.people.find(p => btoa(p.url) == urlHash);

	//console.log(props);
	//console.log(urlHash);
	if (typeof currentPerson == "undefined") {
		return "Loading";
	} else {
		let tmpPerson = Object.entries(currentPerson);
		return (
			<div className="fluid-container">
				{console.dir(tmpPerson)}
				{/*tmpPerson.map((item, key) => {
					return (
						<ul key={key}>
							{item[0]} {item[1]}
						</ul>
					);
				})*/}
				<ul>Character name: {currentPerson.name}</ul>
				<ul>Birth year: {currentPerson.birth_year}</ul>
				<ul>Eye color: {currentPerson.eye_color}</ul>
				<ul>Films that apeared in: {currentPerson.films}</ul>
				<ul>Gender: {currentPerson.gender}</ul>
				<ul>Hair color: {currentPerson.hair_color}</ul>
				<ul>Height: {currentPerson.height}</ul>
				<ul>Homeworld: {currentPerson.homeworld}</ul>
				<ul>Mass: {currentPerson.mass}</ul>
				<ul>Skin color: {currentPerson.skin_color}</ul>
				<ul>Species: {currentPerson.species}</ul>
				<ul>Starships: {currentPerson.starships}</ul>
				<ul>vehicles: {currentPerson.vehicles}</ul>
				<ul>Url: {currentPerson.url}</ul>
			</div>
		);
	}
};
People.propTypes = {
	history: PropTypes.any,
	name: PropTypes.any
};
