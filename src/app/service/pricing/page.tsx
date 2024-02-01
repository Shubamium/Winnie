import PanelLayout from '@/app/layout/panelLayout/PanelLayout'
import React from 'react'
import './pricing.scss'
import { GiCoffeeCup } from 'react-icons/gi'
type Props = {}

export default function PricingPage({}: Props) {
	return (
		<main id="page_pricing">
			<PanelLayout pretext="List Of Prices" title="MENU">
					<div className="price-content">
						<div className="price-nav">
								<button className='btn btn-price-nav active'>counselling</button>
								<button className='btn btn-price-nav'>monthly guidance</button>
								<button className='btn btn-price-nav'>custom service</button>
						</div>
						<div className="description">
							<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ipsam officiis quam cupiditate veritatis deserunt adipisci repellat magnam repellendus nemo iste nihil neque possimus atque, a illum dolorem ex explicabo?</p>
						</div>

						<div className="price-list">
							<Price/>
							<Price/>
						</div>
					</div>
			</PanelLayout>
		</main>
	)
}

type PriceProps = {

}
function Price({}:PriceProps){
	return <div className="price">
			<div className="detail">
				<div className="header">
					<GiCoffeeCup className='main-icon'/>
					<h2>SOCIAL MEDIA CONSULTATION</h2>
				</div>
				<div className="hr">
					<div className="line"></div>
					<div className="diamond"></div>
					<div className="line"></div>
				</div>
				<p className='description'>{`Includes  a single time Data and Brand analyzing, profile presentation and posts review. We'll go through a list of "should-haves" and i will help you have a better understanding of the algorithm and SEO usage. I will also provide you of a written document with a summary of my analysis and specific tips and reminder for your case.`}</p>
			</div>
			<div className="pricing">
				<div className="price-container">
					<div className="line"></div>
						<div className="price-text">
							<p>$50</p>
						</div>
						<div className="line"></div>
				</div>
				<div className="extras">
					<p className='extra'><span className="increase">150$</span> for every streaming and social media platform.</p>
					<p className='extra'><span className="decrease">150$</span> for every streaming and social media platform.</p>
				</div>
			</div>
	</div>
}