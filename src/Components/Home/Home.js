import React from "react";
import Nav from "../Nav/Nav";
import me from "./portfolio-pic.jpg";
import "./Home.css";


const Home = () => {
	return (
		<article id="about">
			<Nav />
            <h3>"Hello and welcome to my portfolio!"</h3>
			<img className="me" src={me} alt="portfolio-pic" />
			<div className="home-container">
				<p>
				    I am a Fullstack Web Developer
					based in Seattle, WA and I enjoy making vibrant and creative
					applications.
				</p>

				<p>
					After working as a Medical Assistant for a few years, I 
					realized that I enjoyed the technical aspects over the clinical aspects of the job.
                    This inspired me to make the move to Tech.
				</p>

				<p>
					With my experience in the medical field, I’m passionate about
					building products that touch the lives of others. I've helped
					doctors/providers deliver great patient care. Now, I want to build web
					applications that allow users to be better.
				</p>

				<p>
					Outside of programming, I love practicing yoga, painting, singing,
					and dancing.
				</p>

			</div>
		</article>
	);
};

export default Home;
