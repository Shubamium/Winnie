'use client'
import './question.scss'
import React, { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import {motion} from 'framer-motion'
type QuestionProps = {
	question:string;
	answer:string | React.ReactNode;
	index:number,
}
export default function Question({question, answer,index}:QuestionProps){
	const [show, setShow] = useState(false)
	return <motion.div animate={{opacity:1,y:0}} initial={{opacity:0,y:200}} transition={{delay:index*.2}} className={`faq-question ${show ? 'visible' : ''}`} onClick={()=>setShow(!show)}>
			<div className="question">
				<div className="confine">
					<h2>{question}</h2>
					<div className="indicator">
						<IoIosArrowDown/>
					</div>
				</div>
			</div>
			<div className="answers">
				<div className="confine">
					{answer}
				</div>
			</div>
	</motion.div>
}