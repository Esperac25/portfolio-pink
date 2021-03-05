import React from "react";
import Nav from "../Nav/Nav";
import 'portfolio-pic.jpg';

const Home = () => {
	return (
		<article id="about">
			<Nav />
			<img src='portfolio-pic.jpg' alt="portfolio-pic"/>
			<div className="home-container">
				<p>
					Full-stack JavaScript developer with experience using React/Redux,
					Node.js, Express, and PostgreSQL to build user-friendly web
					applications.{" "}
				</p>

				<p>
					Well-versed in working with team members to deliver high-quality,
					multi-functional applications in a regulated test-driven environment.
				</p>

				<p>
					With my current experience in the medical field, I’m passionate about
					building products that touch the lives of others. I've helped
					doctors/providers deliver great patient care. Now, I want to build web
					applications that allow users to be better. I also teach yoga in my
					spare time to promote mental, spiritual, and emotional wellness.{" "}
				</p>

				<p>
					Connect with me if you are hiring passionate engineers or if you are
					curious about my health and wellness journey.{" "}
				</p>

				<p>I am open to opportunities in the Seattle area or remotely.</p>

				<p>
					Competencies: JavaScript, responsive web design, React.js, Redux,
					Node.js, Express, HTML, CSS, jQuery, Git, test-driven development, web
					application development, RESTful APIs, algorithms, data structures.
				</p>
			</div>
		</article>
	);
};

export default Home;
