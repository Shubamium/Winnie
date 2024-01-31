import React from 'react'
import './footer.scss'
import Link from 'next/link'
import { FaArrowUp, FaCrown, FaSnowflake, FaTiktok, FaTwitch, FaTwitter } from 'react-icons/fa'
type Props = {}

export default function Footer({}: Props) {
	return (
		<footer id='footer'>
				<div className="confine">
						<div className="bio-part">
							<img src="/images/graphics/main-logo.png" alt="" className='footer-logo' />
							<hr />
							<p className='subtitle'>Talent & Social Media Manager</p>
							<p className='footer-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dicta nam maxime? Facilis quasi accusamus suscipit recusandae laborum qui minima nihil.</p>

							<p className='others'> <a target="_blank" href="mailto:email.me123@gmail.com" className="email">email.me123@gmail.com</a> - <a href="https://twitter.com/@winnietheblue2" className='email' target='_blank'>@winnietheblue2</a></p>
							<p className='copyright'>© Winnie 2024. All rights reserved.</p>
						</div>
						<div className="nav-part">
							<nav>
								<h2>NAVIGATION</h2>
								<ul>
									<li className='nav-link'><Link href={'/'} className='nav-link'><FaSnowflake/> HOME</Link></li>
									<li className='nav-link'><Link href={'/'} className='nav-link'><FaSnowflake/> ABOUT</Link></li>
									<li className='nav-link'><Link href={'/'} className='nav-link'><FaSnowflake/> SERVICE</Link></li>
									<li className='nav-link'><Link href={'/'} className='nav-link'><FaSnowflake/> PRICE</Link></li>
									<li className='nav-link'><Link href={'/'} className='nav-link'><FaSnowflake/> FAQ</Link></li>
									<li className='nav-link'><Link href={'/'} className='nav-link'><FaSnowflake/> TERMS</Link></li>
									<li className='nav-link'><Link href={'/'} className='nav-link'><FaSnowflake/> CLIENTS</Link></li>
								</ul>
							</nav>
							<div className="other">
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
								<p className="credit">Website Design - <a href="https://twitter.com/Shubamium2">SHUBAMIUM</a> </p>
								<a href="#" className='btn btn-top'> Back to the top <FaArrowUp/></a>
							</div>
						</div>
				</div>
		</footer>
	)
}