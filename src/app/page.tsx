import './home.scss'
import { FaBriefcase, FaCrown, FaHandshake, FaMailBulk, FaSign, FaSnowflake, FaTiktok, FaTwitch, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <main id='page_home'>
			<div className="container_hero">
				<div className="confine">
					<div className="left">
							<img src="/images/graphics/main-logo.png" alt="" className="main-logo" />
							<div className="subtext">
									<p>TALENT & SOCIAL MEDIA MANAGER</p>
							</div>
							<div className="contacts">
								<a href="https://twitter.com/Winnietheblue1" target="_blank" className="contact-link">
									<FaTwitter/>
								</a>
								<a href="https://twitch.tv/winniethefluz" target="_blank" className="contact-link">
									<FaTwitch/>
								</a>
								<a href="#" target="_blank" className="contact-link">
									<FaTiktok/>
								</a>
								<a href="https://throne.com/winnietheblue" target="_blank" className="contact-link">
									<FaCrown/>
								</a>
							</div>
							<a  href='mailto:email.me123@gmail.com' className="email"> <FaMailBulk/> email.me123@gmail.com </a>
					</div>
					<div className="right">
							<img src="/images/graphics/main-pfp.png" alt="" className="main-pfp" />
							<p className="bio">
								<span className="big">Hi There </span>
								I’m <span className="blue">Winnie </span> 
								an already sailed <u>Talent and Social media manager</u> with a focus on <b>Vtubers</b>. 
								<br />
								<span className="descrip">{`	Here you'll be finding a wide selections of service i can provide in order for you and your business to make a skyrocket growth and lighten the burden of content creating and social/project managing on your shoulders.`}</span>
								<br />
								<span className="final">
								{`Let's make it to the top together!`}	
									<hr />
									<FaSnowflake/>
									<FaSnowflake/>
									<FaSnowflake/>
								</span>							
							</p>
							<button className='btn btn-cta'>  Work With Me <FaHandshake/> </button>
					</div>
				</div>
			</div>
    </main>
  );
}
