'use client'
import './home.scss'
import { FaBriefcase, FaCrown, FaHandshake, FaMailBulk, FaSign, FaSnowflake, FaTiktok, FaTwitch, FaTwitter } from "react-icons/fa";
import { motion } from 'framer-motion'
export default function Home() {
  return (
    <main id='page_home'>
			<div className="container_hero">
				<div className="confine">
					<motion.div animate={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5,delay:0}} style={{transition:'none'}} className="left">
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
					</motion.div>
					<motion.div transition={{delayChildren:1}} className="right">
							<motion.img  animate={{x:0,opacity:1}} initial={{x:100,opacity:0}} transition={{delay:0}}src="/images/graphics/main-pfp.png" alt="" className="main-pfp" />
							<motion.p animate={{x:0,opacity:1}} initial={{x:-100,opacity:0}} className="bio">
								<span className="big">Hi There </span>
								I’m <span className="blue">Winnie </span> 
								an already sailed <u>Talent and Social media manager</u> with a focus on <b>Vtubers</b>. 
								<span className="descrip">{`	Here you'll be finding a wide selections of service i can provide in order for you and your business to make a skyrocket growth and lighten the burden of content creating and social/project managing on your shoulders.`}</span>
							</motion.p>
							<motion.p animate={{x:0,opacity:1}} initial={{x:-100,opacity:0}} transition={{delay:0.2}} className="bio final">
								{`Let's make it to the top together!`}	
								<span className='line'></span>
								<FaSnowflake/>
								<FaSnowflake/>
								<FaSnowflake/>
							</motion.p>							
							<motion.button animate={{x:0,opacity:1}} initial={{x:-100,opacity:0}} transition={{delay:0.5}} className='btn btn-cta'>  Work With Me <FaHandshake/> </motion.button>
					</motion.div>
				</div>
			</div>
    </main>
  );
}
