'use client'

import React, { useState } from 'react'
import { GiCoffeeCup } from 'react-icons/gi'
import PortableText from 'react-portable-text'

type Props = {
	priceData:{
		section:string,
		price_list: {
			title:string,
			description:any,
			price:string,
			notes:string[]
		}[]
	}[]
	
}

export default function PriceSelector({priceData}: Props) {
	const [activeSection,setActiveSection] = useState(priceData ?	 priceData[0].section : '');

	const activePriceList =  priceData.find((data)=>data.section === activeSection)?.price_list ?? [];
	return (
		<div className="price-content">
			<div className="price-nav">
					{/* <button className='btn btn-price-nav active'>counselling</button>
					<button className='btn btn-price-nav'>monthly guidance</button>
					<button className='btn btn-price-nav'>custom service</button> */}
					{priceData.map((sections)=>{
						return <button className={`btn btn-price-nav ${activeSection === sections.section ? 'active' : ''}`} onClick={()=>setActiveSection(sections.section)} key={sections.section}>custom service</button>
					})}
			</div>
			<div className="description">
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ipsam officiis quam cupiditate veritatis deserunt adipisci repellat magnam repellendus nemo iste nihil neque possimus atque, a illum dolorem ex explicabo?</p>
			</div>

			<div className="price-list">
				{activePriceList  && activePriceList.length > 0 && activePriceList.map((priceData,index)=>{
					return <Price title={priceData.title} notes={priceData.notes} price={priceData.price} description={priceData.description ? <PortableText content={priceData.description}/> : <></>} key={priceData.title + index}/>
				}) }
			</div>
		</div>
	)
}


type PriceProps = {
	title:string,
	description:React.ReactNode
	price:string,
	notes:string[]
}
function Price({title,price,description,notes}:PriceProps){
	return <div className="price">
			<div className="detail">
				<div className="header">
					<GiCoffeeCup className='main-icon'/>
					<h2>{title}</h2>
				</div>
				<div className="hr">
					<div className="line"></div>
					<div className="diamond"></div>
					<div className="line"></div>
				</div>
				<p className='description'>{description}</p>
			</div>
			<div className="pricing">
				<div className="price-container">
					<div className="line"></div>
						<div className="price-text">
							<p>{price}</p>
						</div>
						<div className="line"></div>
				</div>
				<div className="extras">
					{notes && notes.length > 0 && notes.map((note,index)=>{
						return <p className="extra" key={'extra-note'+note.slice(0,5)+index}>
								{note}
						</p>
					})}	
					{/* <p className='extra'><span className="increase">150$</span> for every streaming and social media platform.</p> */}
					{/* <p className='extra'><span className="decrease">150$</span> for every streaming and social media platform.</p> */}
				</div>
			</div>
	</div>
}