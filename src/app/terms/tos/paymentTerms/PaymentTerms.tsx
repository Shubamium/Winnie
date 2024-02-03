'use client'

import SectionHeading from '@/app/layout/sectionHeading/SectionHeading'
import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function PaymentTerms({}: Props) {

	const ptVar = {
		initial:{
			x:100,
		},
		animate:{
			x:0,
		},
		whileinView:{
			x:0,
		}
	}
	return (
		<section className='payment-terms'>
		<SectionHeading title={<>PAYMENT &<br/> BUSINESS RIGHTS</>}/>
		<motion.div   className="payment-terms-list">
			<motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0,duration:0.8}} whileHover={{scale:1.02,outline:'2px solid white',outlineOffset:'10px'}} className="pt-terms">
				<p><b>By engaging with my services</b>, the client hereby agrees to pay in full, upfront unless we outline a payment plan beforehand. Partial payments shall not be deemed acceptable or permissible under any circumstances. If any additional service will constitute an extra charge, I pledge to be upfront with my client about the change.</p>
			</motion.div>
			<motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0,duration:0.8}} whileHover={{scale:1.02,outline:'2px solid white',outlineOffset:'10px'}} className="pt-terms">
				<p><b>Client owns all works product.</b> To avoid confusion, work product is the finished product, as well as drafts, notes, materials, mockups, hardware, designs, inventions, patents, code, and anything else that we will be working on that is, conceives, creates, designs, develops, invents, works on, or reduces to practice—as part of this project, whether before the date of this collaboration or after. </p>
				<p>I will be giving to the clients all of our works product rights, titles, and interests in and to the work product (including intellectual property rights), and the Client will be the sole owner of it only after the full payment has been done. The Client can use the work product however it wants.“Work Product”, for the purposes of these service(s) and contract will be defined as the Marketing, Branding, Public Relations, Advertising, and knowledge and counsel imparted from me to the client for the duration of our collaboration period.</p>
			</motion.div>
			<motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0,duration:0.8}} whileHover={{scale:1.02,outline:'2px solid white',outlineOffset:'10px'}} className="pt-terms">
				<p><b>You agree not to chargeback</b> unless a serious <b>breach of our agreement</b> has occurred. </p>
				<p>If you <u>DO chargeback despite</u> services rendered, you will be completely <b>blacklisted</b> and I will take appropriate action against you.</p>
			</motion.div>
		</motion.div>
	</section>	
	)
}