import ProgressBar from '../components/ProgressBar';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';


export default function ResumePage() {
	const resume = '../../assets/images/Meister_Noah_Resume202408.pdf';

	const languages = [
		{ name: 'HTML', progress: 95, tooltip: 'HTML is just really simple, right? It\'s written in plain english. I wouldn\'t rate myself 100 on it simply because there are several tags I\'ve never used. But on the other hand, I\'ve yet to come across a situation where I need any of those other tags, so I figure I\'m not missing much.' },
		{ name: 'CSS', progress: 80, tooltip: 'In theory, I\'m great at CSS. In practice, less so. I\'m familiar with all CSS properties and features, but I sometimes just can\'t get my ideas to work right. I find it more frustrating than any other language.' },
		{ name: 'JavaScript', progress: 87, tooltip: 'I\'m of course biased, but I think I\'m pretty good at Javascript. It\'s probably my favorite language so far. I\'m familiar and skilled with most of the language, but there are a few newer and more niche features I haven\'t learned and/or found use for.' },
		{ name: 'SQL', progress: 82, tooltip: 'SQL is another language that\'s essentially just English. I\'m familiar with all it has to offer, but I just don\'t have much experience dealing with directly. I have far more experience using SQL through Javascript, PHP, and MySQL workbench.' },
		{ name: 'C++', progress: 25, tooltip: 'I have completed a couple fairly comprehensive C++ tutorials, mostly aimed at game development, which I\'m getting into as a hobby. Though I\'ve learned most everything up through C++2017, I have not however, done anything with it outside of those tutorials, so I can\'t rate myself very highly on it.' },
		{ name: 'PHP', progress: 20, tooltip: 'My experience with PHP is quite the opposite of my experience with C++. It\'s the only language here I haven\'t completed a course on, but I got hired to work with a site using it, so I\'ve been shoved headfirst into the language and am just learning as I go.' },
	];

	const technologies = [
		{ name: 'Node.js', progress: 83, tooltip: 'I have a strong grasp on the basics of Node.js. However, my experience with the packages and integretated technology is still fairly limited. I\'ve done well with everything I\'ve tried, but there\'s still much more out there that I haven\'t.' },
		{ name: 'Express.js', progress: 80, tooltip: 'My knowledge of Express.js is solid but basic. My needs have been filled with pretty standard setups, so I don\'t have much experience dealing with more fringe cases.' },
		{ name: 'React', progress: 75, tooltip: 'React is my favorite front-end technology so far, so I\'ve experimented with it quite a bit. I\'m familiar with all the basics and several more advanced features. My weakness is simply the vastness of the library and its independent extensions. But I have dealt with quite a few, as you can possibly tell from this site.' },
		{ name: 'Handlebars.js', progress: 80, tooltip: 'I view Handlebars.js as not much more complicated than HTML. I\'ve had an easy time accomplisphing my goals with it, but my experience is admittedly limited.' },
		{ name: 'Bootstrap', progress: 43, tooltip: 'While I\'ve never had a problem using Bootstrap, I\'ve just never been a fan. I prefer a simple HTML file with a seperate CSS stylesheet, so I haven\'t used Bootstrap often.' },
		{ name: 'jQuery', progress: 45, tooltip: 'I\'ve learned the basics of jQuery and have a bit of experience with it in a legacy project. However, I don\'t find it very useful compared to modern JavaScript and newer libraries, so I haven\'t made it a focus in my learning.' },
		{ name: 'Sequelize', progress: 77, tooltip: 'Most of my experience with SQL was done using Sequelize. I feel confident with the skills I\'ve used so far, but I know there\'s a more to it that I haven\'t touched.' },
		{ name: 'Mongoose', progress: 75, tooltip: 'My experience with Mongoose is similar to Sequelize, but with MongoDB. I\'ve used it quite a bit, but my needs haven\'t pushed me to use the more advanced features.' },
		{ name: 'MySQL', progress: 80, tooltip: 'I\'ve used MySQL quite a bit, but I\'ve never had to do anything too complex with it. I\'m confident in my ability to write queries and manage a database, but I know there\'s more to it that I haven\'t touched.' },
		{ name: 'MongoDB', progress: 75, tooltip: 'MongoDB is newer to me than SQL and its technologies. I have a strong grasp on what I\'ve done so far, but my experience is limited to fairly simple applications with small databases. I know there\'s quite a few features I haven\'t had a chance to use.' },
		{ name: 'Git', progress: 80, tooltip: 'I\'ve been using Git extensively since I started programming. I know its features well and can use it efficiently. My weakness lies in remembering some of the less used commands.' },
		{ name: 'GitHub', progress: 80, tooltip: 'I\'ve been using GitHub almost as long as I\'ve been using Git. I know all the features I\'ve used well, but there are others I haven\'t touched. My experience is also primarily personal repositories, not collaborations.' },
		{ name: 'WordPress', progress: 30, tooltip: 'My experience with WordPress is limited to a single project. I\'ve learned the basics of the platform and have a good understanding of how it works, but it\'s still pretty new to me.' },
	];

    const [show, setShow] = useState(true);

    const spring1 = useSpring({
        from: { transform: 'translateY(-20px)' },
        to: { transform: 'translateY(0%)' },
        config: { mass: 2, tension: 200, friction: 14 },
        onRest: () => setShow(false), // Trigger the second animation after the first one finishes
    });

    const spring2 = useSpring({
        opacity: show ? 1 : 0,
        config: { duration: 1000 },
    });

	return (
		<div className="resumePage">
			<div className="downloadBtn-container">
				<a className="downloadBtn" href={resume} target="_blank">Download Resume</a>
			</div>
			<h2>Proficiencies</h2>
			<animated.h4 className="tooltip-advise" style={{...spring1, ...spring2}}>Hover for details<br/>&#8595;</animated.h4>
			<div className="language-container">
				<h3>Languages</h3>
				{languages.map((language, index) => (
						<ProgressBar label={language.name} progress={language.progress} tooltip={language.tooltip}/>
				))}
			</div>
			<div className="technology-container">
				<h3>Technologies</h3>
				{technologies.map((technology, index) => (
					<ProgressBar label={technology.name} progress={technology.progress} tooltip={technology.tooltip}/>
				))}
			</div>
			<div className="filler"></div>

		</div>
	);
}
