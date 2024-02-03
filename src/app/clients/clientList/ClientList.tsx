'use client'
import { FaDiscord, FaGlobe, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import {motion }from 'framer-motion'
import React from 'react'
import PortableText from 'react-portable-text'
import { urlFor } from '@/db/db'

type Props = {
	clientData:any
}

export default function ClientList({clientData}: Props) {
	return (
		<div className="client-content">
		{clientData && clientData.length > 0 && clientData.map((client:any,index:number)=>{
				return <Client
						delay={index}
						key={client.name + index}
						name={client.name}
						pfp={urlFor(client.picture).url()}
						bio={client.bio ? <PortableText content={client.bio}/>: <></>}
						contacts={client.contacts}
						handle={client.handle}
				/>
		})}
</div>
	)
}
type ClientProps = {
	pfp:string,
	name:string,
	handle:{
		handle_name:string,
		link:string,
	},
	bio:React.ReactNode
	contacts:{
		Type:
					| 'twitch'
					| 'twitter'
					| 'discord'
					| 'youtube'
					| 'website'
					| 'tiktok';
		Link:string;
	}[]
	delay:number,
}

const iconList = {
	'twitter': <FaTwitter/>,
	'discord': <FaDiscord/>,
	'twitch': <FaTwitch/>,
	'youtube': <FaYoutube/>,
	'website': <FaGlobe/>,
	'tiktok': <FaTiktok/>
}
function Client({pfp,name,handle,bio,contacts,delay}:ClientProps){

	return <motion.div initial={{x:-100}} whileInView={{x:0}} transition={{duration:0.5,delay:0}} className="client">
					<motion.div initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{duration:1,delay:1}} className="pfp">
						<img src={pfp} alt="" className='pfp-image' />
					</motion.div>
					<motion.div initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{duration:1,delay:1.5}} className="detail">
							<a href={handle.link ?? '#'} target='_blank' className='handle'>{handle.handle_name ?? ''}</a>
						<div className="name">
								<h2>{name}</h2>
								<motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:1,delay:2}} style={{transformOrigin:'left'}} className="line"></motion.div>
						</div>
						<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}} className='bio'>{bio}</motion.div>
						<div className="contact-list">
								{contacts && contacts.length > 0 && contacts.map((contact,index)=>{
									return (
										<motion.a initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:index}} href={contact.Link} target='_blank' className="client-contact" key={contact.Type + index}>
												{iconList[contact.Type]}
										</motion.a>
									)
								})}
							
						</div>
		</motion.div>
	</motion.div>
}