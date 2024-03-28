import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleTheme, theme } from "../store/theme";
import { useStore } from "@nanostores/react";

export default function ColorChanger() {
	const $theme = useStore(theme);
	return (
		<div id="colors">
			<div className="icon">
				<button onClick={handleTheme}>
					{$theme === "dark" ? (
						<FontAwesomeIcon icon={faSun} />
					) : (
						<FontAwesomeIcon icon={faMoon} />
					)}
				</button>
			</div>
		</div>
	);
}
