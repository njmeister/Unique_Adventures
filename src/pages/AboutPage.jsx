import Row from '../components/Row';
import "../styles/AboutPage.css";


const title = 'About Me';
const description = 'I am a full-stack developer with a passion for creating web applications. I have a penchant for backend work and specialize in the MERN stack. Together with my strong backround in writing and design, I am uniquely qualified to meet your website\'s every need.';
const image = '/assets/images/pterrance.png';

export default function AboutPage() {
  return (
	<Row title={title} description={description} image={image}/>
  );
}