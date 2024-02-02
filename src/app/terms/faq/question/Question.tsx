'use client'
import './question.scss'
import React, { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

type QuestionProps = {
	question:string;
	answer:string | React.ReactNode;
}
export default function Question({question, answer}:QuestionProps){
	const [show, setShow] = useState(false)
	return <div className={`faq-question ${show ? 'visible' : ''}`} onClick={()=>setShow(!show)}>
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
	</div>
}