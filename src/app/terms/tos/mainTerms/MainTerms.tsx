'use client'
import React from 'react'
type Props = {}
import {motion} from 'framer-motion'
import SectionHeading from '@/app/layout/sectionHeading/SectionHeading'
import { BsStack } from 'react-icons/bs'
import { FaHandshakeAltSlash } from 'react-icons/fa'
import { IoChatbubble } from 'react-icons/io5'
export default function MainTerms({}: Props) {

	const termVariants = {
		initial:{
			opacity:0,
			y:-100,
		},
		whileInView:{
			opacity:1,
			y:0
		}
	}
	const centerTermVariants = {
		initial:{
			opacity:0,
			y:100,
		},
		whileInView:{
			opacity:1,
			y:0
		}
	}
	return (
		<div className="main-terms">
		<SectionHeading title={<>TERMS <br/> OF SERVICES</>}/>
		<motion.div initial="initial" variants={termVariants} transition={{delay:0.2, staggerChildren:0.4}} whileInView="whileInView" className="terms-list">
			<motion.div variants={termVariants}  className="term red">
				<div className="icons">
					<div className="icon">
						<BsStack/>
						<img src="/images/decors/text-circle.png" alt="" className='decor_text' />
					</div>
				</div>
				<div className="term-head">
					<div className="line"></div>
					<h2>PORTFOLIO</h2>
					<div className="line"></div>
				</div>
				<div className="description">
						<p>	Building a portfolio as a Manager is not easy. Therefore <b>i reserve the rights</b> to use <u>your profiles</u> and <u>content we worked on</u> as references for my work if no contrary will is expressed. I will mainly <b>place on my websites profiles</b> of talents ive been working with for at least a certain amount of time.</p>
				</div>
			</motion.div>
			<motion.div variants={centerTermVariants}  className="term center">
			<div className="icons">
					<div className="icon">
						<FaHandshakeAltSlash/>
						<img src="/images/decors/text-circle.png" alt="" className='decor_text' />
					</div>
				</div>
				<div className="term-head">
					<div className="line"></div>
					<h2>TERMINATION</h2>
					<div className="line"></div>
				</div>
				<div className="description">
						<p>	I will reserve <b>the rights to end</b> our business relationship if any <b>ill or bad behavior</b> are occurring.</p>
				</div>
			</motion.div>
			<motion.div variants={termVariants}  className="term red">
				<div className="icons">
					<div className="icon">
						<IoChatbubble/>
						<img src="/images/decors/text-circle.png" alt="" className='decor_text' />
					</div>
				</div>
				<div className="term-head">
					<div className="line"></div>
					<h2>DISRUPTION</h2>
					<div className="line"></div>
				</div>
				<div className="description">
						<p>	 I commit to <b>communicate</b> any <u>disruptions</u> that may impede my ability to complete my services to my client ASAP. If <u>something prevents me</u> from posting or delivering my services for several days, <u>I will add extra days</u> to the service <b>at my discretion</b>.</p>
				</div>
			</motion.div>
		</motion.div>
	</div>
	)
}