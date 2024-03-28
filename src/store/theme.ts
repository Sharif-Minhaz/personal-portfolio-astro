import { persistentAtom } from "@nanostores/persistent";

export const theme = persistentAtom<"dark" | "">("theme", "", {
	encode(value) {
		return JSON.stringify(value);
	},
	decode(value) {
		try {
			return JSON.parse(value);
		} catch (err) {
			console.error(err);
			return value;
		}
	},
});

export const handleTheme = () => {
	theme.set(theme.get() === "dark" ? "" : "dark");
	if (theme.get() === "dark") {
		document.body.classList.add("dark");
	} else {
		document.body.classList.remove("dark");
	}
};
