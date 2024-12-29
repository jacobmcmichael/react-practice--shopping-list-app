/* Styles */
import "@styles/_reset.css";
import "@styles/_variables.css";
import "@styles/_global.css";
import "@styles/_layout.css";

export default function Layout({ children }: { children: React.ReactNode }) {
	return <div className="layout">{children}</div>;
}
