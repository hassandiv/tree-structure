import { useState } from "react";
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
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<div style={{ paddingBottom: "5px" }}>
			{children?.length ? (
				<span
					style={{ cursor: "pointer" }}
					onClick={() => setIsExpanded(!isExpanded)}>
					{isExpanded ? "- " : "+ "}
					{name}
				</span>
			) : (
				name
			)}
			{isExpanded && (
				<div style={{ paddingLeft: "10px" }}>
					{children?.map((entry, index) => (
						<Entry key={index} {...entry} />
					))}
				</div>
			)}
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
