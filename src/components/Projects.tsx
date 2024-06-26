import { projects } from "../constants";
import { motion } from "framer-motion";
// import { Tilt } from "react-tilt";
import { github, play } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useActiveLink } from "../hooks/useActiveLink";
import Heading from "./Heading";
import type { ReactNode } from "react";

interface ITag {
	name: string;
	color: string;
}

interface IProject {
	index: number;
	name: string;
	description: string;
	tags: ITag[];
	image: string;
	source_code_link: string;
	live_link: string;
}

export function Tilt({ children, className }: { children: ReactNode; className?: string }) {
	return <section className={className}>{children}</section>;
}

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	live_link,
}: IProject) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -150 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay: (index + 1) * 0.2 }}
		>
			<Tilt
				// options={{
				// 	max: 45,
				// 	scale: 1,
				// 	speed: 450,
				// }}
				className="tilt-container"
			>
				<div className="tilt-body">
					<img src={image} className="project-image" alt="project_image" />

					<div className="actions">
						<div
							onClick={() => window.open(source_code_link, "_blank")}
							className="black-gradient github"
						>
							<img src={github} alt="source code" />
						</div>
					</div>

					<div className="actions actions-play">
						<div
							onClick={() => window.open(live_link, "_blank")}
							className="black-gradient play"
						>
							<img
								src={play}
								alt="source code"
								style={{ width: "35%", height: "35%", objectFit: "contain" }}
							/>
						</div>
					</div>
				</div>

				<div className="mt-3 tilt-text-container">
					<h3 className="font-bold" style={{ fontSize: "24px" }}>
						{name}
					</h3>
					<p className="mt-2" style={{ fontSize: "14px" }}>
						{description}
					</p>
				</div>

				<div className="mt-2 d-flex flex-wrap gap-2">
					{tags.map((tag: ITag) => (
						<p
							key={`${name}-${tag.name}`}
							style={{ fontSize: "14px", color: tag.color }}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

export default function Projects() {
	const { ref } = useActiveLink("#portfolio");
	return (
		<section ref={ref} id="portfolio" className="sectionD section-part">
			<div className="container-fluid">
				<div className="row padding">
					<Heading title="My Project" baseTitle="PROJECTS" />
					<div className="col-12 p-0">
						<div className="row d-flex flex-wrap row-gap-4">
							{projects.map((project, index) => (
								<div key={index} className="col-12 col-sm-6 col-md-4">
									<ProjectCard
										key={`project-${index}`}
										index={index}
										{...project}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="downloadCv-btn2" style={{ marginTop: "30px" }}>
					<a target="_blank" href="https://github.com/Sharif-Minhaz?tab=repositories">
						<button>
							<span className="inline-block mr-2">View More</span>
							<FontAwesomeIcon icon={faGithub} />
						</button>
					</a>
				</div>
			</div>
		</section>
	);
}
