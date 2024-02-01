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

			<section className='communication'>
					<div className="confine">
						<div className="comm-head">
							<h2><span className="b">C</span>OM<span className="b">MU<span className="b">N</span></span>ICATIO<span className="b">N</span></h2>
							<div className="line"></div>
						</div>
						<p>During the initial phase of our collaboration and the active months/period the client is responsible to communicate me any key information about the service im providing. Since communication {`it's`} a primary concept in this kind of relationships you are required to give me accurate information whenever asked so that i am able to effectively help you and decide if my services are suitable for your needs and goals.</p>
					</div>
			</section>

			<section className='payment-terms'>
				<SectionHeading title={<>PAYMENT &<br/> BUSINESS RIGHTS</>}/>
				<div className="payment-terms-list">
					<div className="pt-terms">
						<p>By engaging with my services, the client hereby agrees to pay in full, upfront unless we outline a payment plan beforehand. Partial payments shall not be deemed acceptable or permissible under any circumstances. If any additional service will constitute an extra charge, I pledge to be upfront with my client about the change.</p>
					</div>
					<div className="pt-terms">
						<p>Client owns all works product. To avoid confusion, work product is the finished product, as well as drafts, notes, materials, mockups, hardware, designs, inventions, patents, code, and anything else that we will be working on that is, conceives, creates, designs, develops, invents, works on, or reduces to practice—as part of this project, whether before the date of this collaboration or after. </p>
						<p>I will be giving to the clients all of our works product rights, titles, and interests in and to the work product (including intellectual property rights), and the Client will be the sole owner of it only after the full payment has been done. The Client can use the work product however it wants.“Work Product”, for the purposes of these service(s) and contract will be defined as the Marketing, Branding, Public Relations, Advertising, and knowledge and counsel imparted from me to the client for the duration of our collaboration period.</p>
					</div>
					<div className="pt-terms">
						<p>You agree not to chargeback unless a serious breach of our agreement has occurred. </p>
						<p>If you DO chargeback despite services rendered, you will be completely blacklisted and I will take appropriate action against you.</p>
					</div>
				</div>
			</section>	


			<section className='words'>
				<div className="heading-decor">
					<div className="line"></div>
						<img src="/images/decors/snowflake.png" alt="" className='decor_snow' />
						<img src="/images/decors/snowflake.png" alt="" className='decor_snow big' />
						<img src="/images/decors/snowflake.png" alt="" className='decor_snow' />
					<div className="line"></div>
				</div>
				<div className="word">
					<p>I {`can't`} make any guarantees. Success as a content creator comes down to multiple factors: quality, consistency, algorithms, timing, and luck. </p>
					<p>The only things i can surely provide you {`it's`} my full dedication to the services and project we are willing to bring, and an deep knowledge of the matter and strategies we are going to apply, but I remind you that this is a mutual collaboration where everyone has their roles, and i will be doing mine 100%. 
Results will also be showing basing on the client behavior.</p>
				</div>
			</section>
		</main>
	)
}