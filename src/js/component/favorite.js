import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Favorite = ({ eventData }) => {
	const { actions, store } = useContext(Context);
	const [favStatus, setFavStatus] = useState(false);
	return (
		<div>
			<div
				key={eventData}
				className={
					"btn btn-primary " + (favStatus ? "bg-success" : "bg-primary") + " d-flex justify-content-between"
				}
				type="button"
				onClick={e => {
					//setFavList(favList => [...favList, event.name]);
					//alert(JSON.stringify(eventData));
					actions.toggleFavorite(eventData);
					actions.showStore();

					setFavStatus(eventData.favorite);
					//console.dir(eventData);
				}}>
				☆
			</div>
		</div>
	);
};
Favorite.propTypes = {
	eventData: PropTypes.any
};
