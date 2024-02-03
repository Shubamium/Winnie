'use client'
import React from 'react'

type Props = {}
import {motion} from 'framer-motion'
export default function Communication({}: Props) {

	const commsVar = {
		initial:{
			scaleY:0,
			opacity:0,
		},
		whileInView:{
			scaleY:1,
			opacity:1,
		}
	}
	return (
		<section className='communication'>
			<motion.div initial="initial" whileInView={'whileInView'}  transition={{delay:0.2, duration:.5}} variants={commsVar} className="confine">
				<div className="comm-head">
					<h2><span className="b">C</span>OM<span className="b">MU<span className="b">N</span></span>ICATIO<span className="b">N</span></h2>
					<div className="line"></div>
				</div>
				<p>During the <b className='beg'>initial phase of our collaboration</b> and <b>the active months/period</b> the client is <u>responsible</u> to <b>communicate me any key information</b> about the service im providing. Since communication {`it's`} a primary concept in this kind of relationships you are required to <u>give me accurate information</u> whenever asked so that i am able to <span className="b">effectively help you</span> and decide if my services are suitable for your needs and goals.</p>
				<img src="/images/decors/snowflake.png" alt="" className='decor_snow' />
				<img src="/images/decors/snowflake.png" alt="" className='decor_snow two' />
				<img src="/images/decors/snowflake.png" alt="" className='decor_snow three' />
			</motion.div>
		</section>
	)
}