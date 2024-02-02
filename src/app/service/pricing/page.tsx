
import PanelLayout from '@/app/layout/panelLayout/PanelLayout'
import React from 'react'
import './pricing.scss'
import { GiCoffeeCup } from 'react-icons/gi'
import { fetchData } from '@/db/db'
import PriceSelector from './priceSelector/PriceSelector'
type Props = {}


type PriceSection = {
	section:string,
	price_list:{
		title:string,
		description:any,
		price:string,
		notes:string[]
	}[]
}
export default async function PricingPage({}: Props) {
	const pricingData = await fetchData<PriceSection[]>(`
		*[_type == 'prices'] {
			section,
			price_list[] {
				title,
				description,
				price,
				notes[]
			}
		}
	`)
	// console.log(pricingData[0].price_list.notes)
	return (
		<main id="page_pricing">
			<PanelLayout pretext="List Of Prices" title="MENU">
					<PriceSelector priceData={pricingData}/>
			</PanelLayout>
		</main>
	)
}
