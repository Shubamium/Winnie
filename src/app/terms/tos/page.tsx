import React from 'react'
import Link from 'next/link'
import { CgArrowRight } from 'react-icons/cg'
import { FaHandshakeAltSlash, FaListAlt } from 'react-icons/fa'
import PageHeading from '@/app/layout/pageHeading/PageHeading'
import SectionHeading from '@/app/layout/sectionHeading/SectionHeading'
import './terms.scss'
import { BsStack } from 'react-icons/bs'
import { IoChatbubble } from 'react-icons/io5'
import MainTerms from './mainTerms/MainTerms'
import Communication from './communication/Communication'
import PaymentTerms from './paymentTerms/PaymentTerms'
type Props = {}

export default function Terms({}: Props) {
	return (
		<main id="page_terms">
				<PageHeading title='ACKNOWLEDGMENT' description={
					<>
						<p>Before contacting me and engaging with my managing services, please read this! </p>
						<p>By becoming a client and commissioning me for my services you <b>acknowledge</b> to have <b>read, understood and accept</b> this <u>terms of service</u> which you agree to be bound to. Should you seek any clarification pertaining to my  Terms of Service, {`don't`} be scared to just ask me about it forthwith.</p>
					</>
				} altButton={(<Link className='btn btn-ask outline' href={'/terms/faq'}>
				<FaListAlt/> Frequently Asked Questions <CgArrowRight/>
			</Link>)}/>


			<MainTerms/>

			<Communication/>

			<PaymentTerms/>


			<section className='words'>
				<div className="heading-decor">
					<div className="line"></div>
						<img src="/images/decors/snowflake.png" alt="" className='decor_snow' />
						<img src="/images/decors/snowflake.png" alt="" className='decor_snow big' />
						<img src="/images/decors/snowflake.png" alt="" className='decor_snow' />
					<div className="line"></div>
				</div>
				<div className="word">
					<p><span className="beg">I {`can't`} make any guarantees.</span> Success as a content creator comes down to multiple factors: <br/> <span className="gold">quality, consistency, algorithms, timing, and luck. </span></p>
					<p>The only things i can surely provide you {`it's`} <span className="gold">my full dedication</span> to the services and project we are willing to bring, and an deep knowledge of the matter and strategies we are going to apply, but I remind you that <b className="b">this is a mutual collaboration</b> where everyone has their roles, and i will be doing mine 100%. <span className="b">Results will also be showing basing on the client behavior.</span></p>
				</div>
			</section>
		</main>
	)
}