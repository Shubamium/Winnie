import React from 'react'
import './sectionHeading.scss'
type Props = {
	title:string | React.ReactNode
}

export default function SectionHeading({title}: Props) {
	return (
		<div className="section-heading">
			<h2>{title}</h2>
			<div className="line"></div>
		</div>
	)
}