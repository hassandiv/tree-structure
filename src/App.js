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
			<div style={{ paddingLeft: "10px" }}>
				{children?.map((entry, index) => (
					<Entry key={index} {...entry} />
				))}
			</div>
		</div>
	);
}

function App() {
	return (
		<div className="App">
			{files.children.map((entry, index) => (
				<Entry key={index} {...entry} />
			))}
		</div>
	);
}

export default App;
