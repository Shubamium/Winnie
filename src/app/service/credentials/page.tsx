'use client'
import React from 'react'
import './credentials.scss'
import { FaArrowRight } from 'react-icons/fa'
import { CgArrowRight } from 'react-icons/cg'
import Link from 'next/link'
type Props = {}

import {motion} from 'framer-motion'

export default function CredentialsPage({}: Props) {

	const pointVariants = {
		animate:{
			opacity:1,
			x:0,
		},
		initial:{
			opacity:0,
			x:-100,
		}
	}
	return (
		<main id='page_credentials'>
				<div className="credential">
				<div className="confine">
						<motion.figure animate={{y:0}} initial={{y:-100}} transition={{duration:1}} className='art-part'>
								<img src="/images/graphics/character-art.png" alt="" className='character-art' />
								<motion.img animate={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:.8,delay:1.9}} src="/images/graphics/main-logo.png" alt="" className='decor decor_logo' />
								<motion.img animate={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:.8,delay:1.5}} src="/images/decors/snowflake.png" alt="" className='decor decor_snow-one' />
								<motion.img animate={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.2,delay:1}} src="/images/decors/snowflake.png" alt="" className='decor decor_snow-two' />
						</motion.figure>
						<article>
							<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.5}} className="textpart">
								<h2 className='title'><span className="b">C</span>redenti<span className="b">a</span>ls & Expe<span className="b">ri</span>en<span className="b">ces</span></h2>
								<p className='about'>Before getting into the actual business, here some credentials and experiences i aquired during my journey!</p>
							</motion.div>
							<div className="decors-top">
								<motion.img animate={{opacity:1,scale:1}} initial={{opacity:0,scale:0}} transition={{duration:1.2,delay:1}} src="/images/decors/cofee.png" alt="" className='decor_coffe' />	
								<motion.img animate={{opacity:1,scale:1}} initial={{opacity:0,scale:1.5}} transition={{duration:1.2,delay:1}} src="/images/decors/text-circle.png" alt="" className='decor_text' />	
							</div>
							
							<motion.div className="points" initial="initial" animate="animate" transition={{staggerChildren:0.3, duration:1.2,delay:1.2}} >
								<motion.div className="point" variants={pointVariants}>
									<img src="/images/decors/snowflake.png" alt="" className='snow' />
									<p>Majoring in <b>Business and Public Relations</b> </p>
								</motion.div>
								<motion.div className="point" variants={pointVariants}>
									<img src="/images/decors/snowflake.png" alt="" className='snow' />
									<p><b>4 Years</b> of experience into <b>Moderation</b> and <b>Managing</b> </p>
								</motion.div>
								<motion.div className="point" variants={pointVariants}>
									<img src="/images/decors/snowflake.png" alt="" className='snow' />
									<p>Wide Experience with <u>{`social media's algorithm`}</u> and <u>trends</u>  </p>
								</motion.div>
								<motion.div className="point" variants={pointVariants}>
									<img src="/images/decors/snowflake.png" alt="" className='snow' />
									<p>Useful <b>connections</b> to <u>help clients with commissions</u></p>
								</motion.div>
							</motion.div>

							<motion.div initial={{y:200}} animate={{y:0}} transition={{duration:1,delay:1}} className="action">
								<Link href={'/service/list'} className='btn btn-next'> Service <CgArrowRight/> </Link>
							</motion.div>
						</article>
				</div>
				</div>
		</main>
	)
}