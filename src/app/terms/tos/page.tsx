import React from 'react'
import Link from 'next/link'
import { CgArrowRight } from 'react-icons/cg'
import { FaListAlt } from 'react-icons/fa'
import PageHeading from '@/app/layout/pageHeading/PageHeading'
import SectionHeading from '@/app/layout/sectionHeading/SectionHeading'
import './terms.scss'
import { BsStack } from 'react-icons/bs'
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


			<div className="main-terms">
				<SectionHeading title={<>TERMS <br/> OF SERVICES</>}/>
				<div className="terms-list">
					<div className="term red">
						<div className="icons">
							<div className="icon">
								<BsStack/>
								<img src="/images/decors/text-circle.png" alt="" className='decor_text' />
							</div>
						</div>
						<div className="term-head">
							<div className="line"></div>
							<h2>PORTFOLIO</h2>
							<div className="line"></div>
						</div>
						<div className="description">
								<p>	Building a portfolio as a Manager is not easy. Therefore i reserve the rights to use your profiles and content we worked on as references for my work if no contrary will is expressed. I will mainly place on my websites profiles of talents ive been working with for at least a certain amount of time.</p>
						</div>
					</div>
					<div className="term center">
					<div className="icons">
							<div className="icon">
								<BsStack/>
								<img src="/images/decors/text-circle.png" alt="" className='decor_text' />
							</div>
						</div>
						<div className="term-head">
							<div className="line"></div>
							<h2>TERMINATION</h2>
							<div className="line"></div>
						</div>
						<div className="description">
								<p>	I will reserve the rights to end our business relationship if any ill or bad behavior are occurring.</p>
						</div>
					</div>
					<div className="term red">
						<div className="icons">
							<div className="icon">
								<BsStack/>
								<img src="/images/decors/text-circle.png" alt="" className='decor_text' />
							</div>
						</div>
						<div className="term-head">
							<div className="line"></div>
							<h2>DISRUPTION</h2>
							<div className="line"></div>
						</div>
						<div className="description">
								<p>	 I commit to communicate any disruptions that may impede my ability to complete my services to my client ASAP. If something prevents me from posting or delivering my services for several days, I will add extra days to the service at my discretion.</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}