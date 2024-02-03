'use client'
import Link from 'next/link'
import React from 'react'
import { CgArrowRight } from 'react-icons/cg'
import { FaBook } from 'react-icons/fa'
import './list.scss'
type Props = {}
import {motion} from 'framer-motion'
export default function ListPage({}: Props) {


	const generalVariants = {
		initial:{
			y:100,
			opacity:0,
		},
		animate:{
			y:0,
			opacity:1,
		}
	}
	return (
		<main id='page_list'>
			<div className="confine">
			<motion.div  initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{duration:1.5,delay:1.2, }}  className="service-list l">
					<div className="one">
						<Service/>
					</div>
					<div className="two">
						<Service/>
						<Service/>
					</div>
			</motion.div>
			<motion.div initial="initial" animate="animate" transition={{duration:1,staggerChildren:.4, ease:'easeOut'}} className="service-general">
				<motion.div variants={generalVariants} className="pfp">
					<motion.img src="/images/graphics/blue-pfp.png" alt="" className='blue-pfp'/>
					<motion.img initial={{opacity:0,scale:1.8}} animate={{opacity:1,scale:1}} transition={{duration:1.2,delay:2}} src="/images/decors/text-circle.png" alt="" className='decor_text'/>
				</motion.div>
				<motion.div variants={generalVariants} className="general-panel">
					<p>My services can be sostantially splitted in two different categories depending on your needs: Monthly Guidance and Counseling.</p>
					<p>I decided to go with this setting since lots of clients might not be in need of a monthly guidance or just cant afford it. </p>
					<p>Pricing is obviously changing basing on the kind of service you are willing me to provide you.</p>
					<p>I remind you that my main way to communicate will go through mail, twitter and discord both via text or voice as you feel more comfortable with!</p>
				</motion.div>

				<motion.div variants={generalVariants}  className="div">
					<Link href={'/service/pricing'} className='btn btn-next'> Prices <CgArrowRight/></Link>
				</motion.div>
			</motion.div>

			<motion.div initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} transition={{duration:1.2,delay:1.2}} className="service-list r">
					<div className="two">
						<Service/>
						<Service/>
					</div>
					<div className="one">
						<Service/>
					</div>
			</motion.div>
			</div>
		</main>
	)
}


type ServiceProps = {

}
function Service({}:ServiceProps){
	return <div className='service'>
		<div className="icons">
				<div className="icon">
					<FaBook/>
				</div>
		</div>
		<div className="title">
			<h2>
				Debut Management (Vtuber)
			</h2>
			<hr />
		</div>
		<div className="description">
			<p>{`What's`} more important than starting with the right foot? We all know how much does a Debut matter for a Vtuber.  I will give you my full assistance and guidence to make this event as memorable as it should be.</p>
			<p> I will help providing for everthing {`that's`} necessary for your debut and also developing a social media strategy to boost your visibility for the event.</p>
		</div>
	</div>
}