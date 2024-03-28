import { VerticalTimeline } from "react-vertical-timeline-component";
import pkg from "react-vertical-timeline-component";
const { VerticalTimelineElement } = pkg;
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import Heading from "./Heading";
import { useActiveLink } from "../hooks/useActiveLink";
import { theme } from "./../store/theme";
import { useStore } from "@nanostores/react";

interface IExperience {
	date: string;
	iconBg: string;
	icon: string;
	company_name: string;
	title: string;
	points: string[];
}

const ExperienceCard = ({ experience }: { experience: IExperience }) => {
	const $theme = useStore(theme);

	return (
		<VerticalTimelineElement
			contentStyle={{
				background: $theme === "dark" ? "#3a505c" : "#e7e7e7",
				color: $theme === "dark" ? "#fff" : "#3a505c",
			}}
			contentArrowStyle={{ borderRight: "7px solid #3a505c" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="d-flex justify-content-center align-items-center w-100 h-100">
					<img
						src={experience.icon}
						alt={experience.company_name}
						style={{ width: "60%", height: "60%", objectFit: "contain" }}
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-white fs-5 fw-bold">{experience.title}</h3>
				<p className="text-secondary fs-5 fw-semibold" style={{ margin: 0 }}>
					{experience.company_name}
				</p>
			</div>

			<ul className="mt-3 list-disc">
				{experience.points.map((point: string, index: number) => (
					<li key={`experience-point-${index}`} className="mb-2">
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	const { ref } = useActiveLink("#summary");
	return (
		<section ref={ref} id="summary" className="sectionL section-part">
			<div className="container-fluid">
				<div className="row padding">
					<Heading baseTitle="SUMMARY" title="Resume" />
					<div className="col-12">
						<div className="mt-20 flex flex-col">
							<VerticalTimeline>
								{experiences.map((experience, index) => (
									<ExperienceCard experience={experience} key={index} />
								))}
							</VerticalTimeline>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
