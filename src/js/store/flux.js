const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			people: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getPlanets: async () => {
				const response = await fetch("https://swapi.dev/api/planets/");

				if (response.status == "200") {
					const body = await response.json();
					//console.log("we are printing body", body);
					setStore({
						planets: body.results
					});
				}
			},

			getPeople: async () => {
				const response = await fetch("https://swapi.dev/api/people/");

				if (response.status == "200") {
					const body = await response.json();
					//console.log("we are printing body", body);
					setStore({
						people: body.results
					});
				}
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
