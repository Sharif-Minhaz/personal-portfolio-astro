import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { handleActiveLink } from "../store/activeLink";

export function useActiveLink(link: string) {
	const { ref, inView } = useInView({
		threshold: 0.2,
	});

	useEffect(() => {
		if (inView) {
			handleActiveLink(link);
		}
	}, [inView, handleActiveLink, link]);

	return { ref };
}
