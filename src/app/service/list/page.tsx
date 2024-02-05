'use client'
import Link from 'next/link'
import React, { Children } from 'react'
import { CgArrowRight } from 'react-icons/cg'
import { FaBook, FaClipboardList } from 'react-icons/fa'
import './list.scss'
type Props = {}
import {motion} from 'framer-motion'
import { FaHammer, FaPen } from 'react-icons/fa6'
import { BsPerson } from 'react-icons/bs'
import { TbArrowGuide } from 'react-icons/tb'
import { IoMdShare } from 'react-icons/io'
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
						<Service icon={<BsPerson/>} title="Brand & Talent Management">
								<p><span className='fw'>{`Whether`}</span> you are a freshly new <b>Vtuber/Business</b> or already into the OGs, thanks to my management and SEO knowledge.</p>
								<p>{`I'll`} be here to <u>help you building/promoting</u> your <b>Brand</b>, improving your <b>Consistency</b> and <b>Online persona</b> for better results with the audiance.</p>

						</Service>
					</div>
					<div className="two">
						<Service icon={<FaClipboardList/>} title="Project Management">
								<p><span className='fw'>{`What's`}</span> all know how building up or following a project can be messy and busy without the right preparation. </p>
								<p>With my <u>coordinating</u> and <u>strategizing</u> skills, I will be ensuring that every aspect of it is well <b>prepared</b> and <b>organized</b>.</p>

						</Service>
						<Service icon={<FaBook/>} title='Debut Management (Vtuber)'>
							<p><span className='fw'>{`We`}</span> more important than starting with the right foot? We all know how much does a Debut matter for a Vtuber.  <b>I will give you my full assistance</b> and guidence to make this event as memorable as it should be.</p>
							<p> I will help <b>providing for everthing</b> {`that's`} necessary for your debut and also developing a social media <u>strategy to boost your visibility</u> for the event.</p>
						</Service>
					</div>
			</motion.div>
			<motion.div initial="initial" animate="animate" transition={{duration:1,staggerChildren:.4, ease:'easeOut'}} className="service-general">
				<motion.div variants={generalVariants} className="pfp">
					<motion.img src="/images/graphics/blue-pfp.png" alt="" className='blue-pfp'/>
					<motion.img initial={{opacity:0,scale:1.8}} animate={{opacity:1,scale:1}} transition={{duration:1.2,delay:2}} src="/images/decors/text-circle.png" alt="" className='decor_text'/>
				</motion.div>
				<motion.div variants={generalVariants} className="general-panel">
					<p>My services can be sostantially splitted in two different categories depending on your needs: <b>Monthly Guidance </b> and <b>Counseling</b>.</p>
					<p>I decided to go with this setting since lots of clients might not be in need of a monthly guidance or just cant afford it. </p>
					<p><b>Pricing</b> is obviously <b>changing</b> basing on the kind of service you are willing me to provide you.</p>
					<p>I remind you that my <u> main way to communicate</u> will go through mail, <b>twitter</b> and <b>discord</b> both via text or voice as you feel more comfortable with!</p>
				</motion.div>

				<motion.div variants={generalVariants}  className="div">
					<Link href={'/service/pricing'} className='btn btn-next'> Prices <CgArrowRight/></Link>
				</motion.div>
			</motion.div>

			<motion.div initial={{opacity:0, y:-100}} animate={{opacity:1, y:0}} transition={{duration:1.2,delay:1.2}} className="service-list r">
					<div className="two">
						<Service icon={<FaPen/>} title='Social media & Copywriting'>
							<p><span className='fw'>{`I can`}</span> assist you in managing your social media accounts by optimizing descriptions, titles and tags to improve your <b>visibility</b> and <b>interactions</b>.</p>
							<p>  I will review and help you <u>crafting posts</u> on your social media <b>in the most effective way</b>, improving phrasing and overall presentation. I would rather to not just upload for you! <br/> <br/> <b>My aim is to help my clients to improve themself as content creators.</b></p>
						</Service>
						<Service icon={<TbArrowGuide/>} title='Career Guidance & Scheduling'>
							<p><span className='fw'>{`If you`}</span> are struggling with content crafting, deadlines and obligations, <b>I will make and manage schedules</b> for you and your content and <u>for punctual fullfilment of tasks</u>.</p>
							<p>I will also help you find your way as a content creator <b>basing on your strenghts</b> and <b>developing your unique style as such</b>.</p>
						</Service>
					</div>
					<div className="one">
						<Service icon={<IoMdShare/>} title='Communication Handling & Scouting'>
							<p><span className='fw'>{`Always`}</span> been a shy type who doesn&lsquo;t like to call in to order pizza? Don&lsquo;t worry I got you! Thanks to my wide <u>business english vocabulary</u> I will <b>handle your business Email and communications</b> to <u>help you reach out</u> new partners and collaborators. </p>
							<p>You will also have <b>access</b> to my <b>network of connections</b> which <u>will help you look for people</u> to commission <b>(even with discounts maybe in the future)</b> basing on your needs and likes and </p>
							<p><b>I&lsquo;ll be ready to handle the asset negotiation of</b> commissions, <u>organize the collabs</u> you wish to have, and any other communication with others you wish me to handle!.</p>
						</Service>
					</div>
			</motion.div>
			</div>
		</main>
	)
}


type ServiceProps = {
	icon:React.ReactNode,
	title:string,
	children:React.ReactNode
}
function Service({icon,title,children}:ServiceProps){
	return <div className='service'>
		<div className="icons">
				<div className="icon">
					{icon}
				</div>
		</div>
		<div className="title">
			<h2>
				{title}
			</h2>
			<hr />
		</div>
		<div className="description">
			{children}
		</div>
	</div>
}