import "./App.css";

const files = {
	children: [
		{
			name: "node_modules",
			children: [
				{
					name: "joi",
					children: [
						{
							name: "node_modules",
						},
						{
							name: "package.json",
						},
					],
				},
			],
		},
		{
			name: "package.json",
		},
		{
			name: "vite.config.ts",
		},
	],
};

function Entry({ name, children }) {
	return (
		<div>
			{name}
			{children?.map((entry) => (
				<Entry {...entry} />
			))}
		</div>
	);
}

function App() {
	return (
		<div className="App">
			{files.children.map((entry) => (
				<Entry {...entry} />
			))}
		</div>
	);
}

export default App;
