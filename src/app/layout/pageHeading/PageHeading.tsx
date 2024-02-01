import React from 'react'
import './pageHeading.scss'
import { FaCircleQuestion } from 'react-icons/fa6'
import { CgArrowRight } from 'react-icons/cg'
import Link from 'next/link'
import { FaListAlt } from 'react-icons/fa'
type Props = {
	title:string,
	description:React.ReactNode,
	altButton:React.ReactNode,
}

export default function PageHeading({altButton,description,title}: Props) {
	return (
		<div className="page-heading">
				<div className="confine">
					<div className="header">
						<div className="line"></div>
						<div className="text">
							<h2>{title}</h2>
						</div>
						<div className="line"></div>
					</div>
					<div className="description">
						{description}
					</div>

					<div className="action">
						<a href="#" className='btn btn-ask'><FaCircleQuestion/> Ask a Question  <CgArrowRight/></a>
						{altButton}
					</div>
				</div>
		</div>
	)
}