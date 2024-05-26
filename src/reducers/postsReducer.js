export const initialPosts = [
	{
		id: 4,
		title: "Deduction through the Ages: A History of Truth",
		subtitle: "History of deductive reasoning, from antiquity to now",
		content: "This book gives an account of the development of human deductive logic. Starting with if-then implication practiced in ancient times, then through propositional logic prevalent in medieval ages to modern day dicrete schemata and truth tables.",
		likes: 2,
	},
	{
		id: 3,
		title: "What's a Reducer Function ?",
		subtitle: "A function that defines the actions possible on a reducer state",
		content: "A reducer function declares what's possible on a reducer state. It defines all possible actions that can be performed on the reducer state and what to change when a particular action is dispatched.",
		likes: 5,
	},
	{   
		id: 2,
		title: "What is a Reducer ?",
		subtitle: "State that acts as a single source of truth",
		content: "A reducer is composed of a state and a set of actions that can be dispatched to alter the state. It can be refactored and stored outside of a component. And can be used as a source of truth for multiple use cases.",
		likes: 4,
	},
	{ 
		id: 1,
		title: "The React useReducer Hook",
		subtitle: "State management with actions, instead of setters",
		content: `The useReducer hook is a more versatile alternative to useState. It introduces an "actions" based paradigm to state management - in contrast to setters that exists in useState. Actions are defined and dispatched to effectuate changes in a reducer state.`,
		likes: 2,
	},
];

export function postsReducer(posts, action) {
	const { type, payload } = action;
	const { id } = payload;

	switch (type) {
		case "create":
			return [
					payload,
					...posts,
			];

		case "delete":
			return posts?.filter(p => p?.id !== id);

		case "like":
			return posts.map(p => {
				if (p?.id === id) {
					return {
						...p,
						likes: p?.likes + 1
					};
				} else {
					return p;
				};
			});

		case "unlike":
			return posts.map(p => {
				if (p?.id === id) {
					return {
						...p,
						likes: p?.likes <= 0 ? p?.likes : p?.likes - 1
					};
				} else {
					return p;
				};
			});

		default: return posts;
	};
};