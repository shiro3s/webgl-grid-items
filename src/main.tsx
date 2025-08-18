import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/global-style.css"
import "normalize.css";

const root = document.getElementById("root");

// biome-ignore lint: lint/style/noNonNullAssertion
createRoot(root!).render(
	<StrictMode>
    <div>App</div>
	</StrictMode>,
);
