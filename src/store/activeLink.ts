import { atom } from "nanostores";

export const active = atom("#home");

export const handleActiveLink = (link: string) => {
	active.set(link);
};
