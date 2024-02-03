'use client'
import React, { useEffect, useState } from 'react'
import './loadingScreen.scss'
import {motion} from 'framer-motion'
type Props = {}


export default function LoadingScreen({}: Props) {
	const [isLoaded,setIsLoaded] = useState(false);
	
	useEffect(()=>{
		setTimeout(()=>{
			setIsLoaded(true)
		},3000)
	},[]);
	
	return (
		<div className={`loading-screen ${isLoaded ? 'loaded' : ''}`}>
			<div className="content">
					<motion.div initial={{opacity:1}} animate={{opacity:1}} className="icons">
						<motion.img initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:1}}  src="/images/decors/cofee.png" alt="" className='decor_cofee' />
						<motion.img initial={{opacity:0, scale:1.5}} animate={{opacity:1,scale:1}} transition={{duration:1.2,delay:1}} src="/images/decors/text-circle.png" alt="" className='decor_text' />
						<motion.img  initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{ease:'easeInOut',duration:'1.2'}} src="/images/graphics/main-logo.png" alt="" className='decor_main' />
					</motion.div>
					<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}} className="loading-title">
						<motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}} className='sub'>LOADING</motion.p>
						<div className="lhead">
							<motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{delay:2,duration:2}} style={{transformOrigin:'right'}} className="line"></motion.div>
							<motion.p transition={{staggerChildren:0.5}}>
								<motion.span initial={{y:-10+10}} animate={{y:15+10}} transition={{repeat:Infinity,duration:1.5, repeatType:'reverse', delay:0.1}} >P</motion.span>
								<motion.span initial={{y:-10+10}} animate={{y:15+10}} transition={{repeat:Infinity,duration:1.5, repeatType:'reverse', delay:0.2}} >L</motion.span>
								<motion.span initial={{y:-10+10}} animate={{y:15+10}} transition={{repeat:Infinity,duration:1.5, repeatType:'reverse', delay:0.3}} >E</motion.span>
								<motion.span initial={{y:-10+10}} animate={{y:15+10}} transition={{repeat:Infinity,duration:1.5, repeatType:'reverse', delay:0.4}} >A</motion.span>
								<motion.span initial={{y:-10+10}} animate={{y:15+10}} transition={{repeat:Infinity,duration:1.5, repeatType:'reverse', delay:0.5}} >S</motion.span>
								<motion.span initial={{y:-10+10}} animate={{y:15+10}} transition={{repeat:Infinity,duration:1.5, repeatType:'reverse', delay:0.6}} >E</motion.span>
								<span>  &nbsp;</span>
								<motion.span initial={{y:-10+10}} animate={{y:15+10}} transition={{repeat:Infinity,duration:1.5, repeatType:'reverse', delay:0.7}} >W</motion.span>
								<motion.span initial={{y:-10+10}} animate={{y:15+10}} transition={{repeat:Infinity,duration:1.5, repeatType:'reverse', delay:0.8}} >A</motion.span>
								<motion.span initial={{y:-10+10}} animate={{y:15+10}} transition={{repeat:Infinity,duration:1.5, repeatType:'reverse', delay:0.9}} >I</motion.span>
								<motion.span initial={{y:-10+10}} animate={{y:15+10}} transition={{repeat:Infinity,duration:1.5, repeatType:'reverse', delay:1}} >T</motion.span>
							</motion.p>
							<motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{delay:2,duration:2}} style={{transformOrigin:'left'}} className="line"></motion.div>
						</div>
					</motion.div>
			</div>
		</div>
	)
}