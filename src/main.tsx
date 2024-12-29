/* Dependencies */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* Components */
import Layout from "@app/layout";
import App from "@components/App";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Layout>
			<App />
		</Layout>
	</StrictMode>,
);
