import React from 'react'
import './credentials.scss'
import { FaArrowRight } from 'react-icons/fa'
import { CgArrowRight } from 'react-icons/cg'
import Link from 'next/link'
type Props = {}

export default function CredentialsPage({}: Props) {
	return (
		<main id='page_credentials'>
				<div className="credential">
				<div className="confine">
						<figure className='art-part'>
								<img src="/images/graphics/character-art.png" alt="" className='character-art' />
								<img src="/images/graphics/main-logo.png" alt="" className='decor decor_logo' />
								<img src="/images/decors/snowflake.png" alt="" className='decor decor_snow-one' />
								<img src="/images/decors/snowflake.png" alt="" className='decor decor_snow-two' />
						</figure>
						<article>
							<h2 className='title'><span className="b">C</span>redenti<span className="b">a</span>ls & Expe<span className="b">ri</span>en<span className="b">ces</span></h2>
							<p className='about'>Before getting into the actual business, here some credentials and experiences i aquired during my journey!</p>
							<div className="decors-top">
								<img src="/images/decors/cofee.png" alt="" className='decor_coffe' />	
								<img src="/images/decors/text-circle.png" alt="" className='decor_text' />	
							</div>
							<div className="points">
								<div className="point">
									<img src="/images/decors/snowflake.png" alt="" className='snow' />
									<p>Majoring in <b>Business and Public Relations</b> </p>
								</div>
								<div className="point">
									<img src="/images/decors/snowflake.png" alt="" className='snow' />
									<p><b>4 Years</b> of experience into <b>Moderation</b> and <b>Managing</b> </p>
								</div>
								<div className="point">
									<img src="/images/decors/snowflake.png" alt="" className='snow' />
									<p>Wide Experience with <u>{`social media's algorithm`}</u> and <u>trends</u>  </p>
								</div>
								<div className="point">
									<img src="/images/decors/snowflake.png" alt="" className='snow' />
									<p>Useful <b>connections</b> to <u>help clients with commissions</u></p>
								</div>
							</div>

							<div className="action">
								<Link href={'/service/list'} className='btn btn-next'> Service <CgArrowRight/> </Link>
							</div>
						</article>
				</div>
				</div>
		</main>
	)
}