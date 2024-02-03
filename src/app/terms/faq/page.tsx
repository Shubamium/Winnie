import PageHeading from '@/app/layout/pageHeading/PageHeading'
import SectionHeading from '@/app/layout/sectionHeading/SectionHeading'
import Link from 'next/link'
import React from 'react'
import { CgArrowRight } from 'react-icons/cg'
import { FaListAlt } from 'react-icons/fa'
import { IoIosPaper } from 'react-icons/io'
import Question from './question/Question'
import './faq.scss'
import { FaCircleQuestion } from 'react-icons/fa6'
import { fetchData } from '@/db/db'
import PortableText from 'react-portable-text'
type Props = {}


type faqList ={
	question:string;
	answers:any;
}
export default async function FaqPage({}: Props) {
	const faqData = await fetchData<faqList[]>(`
		*[_type == 'faq'] {
			question,
			answers
		}
	`);
	// console.log(faqData)
	return (
		<main id='page_faq'>
					<PageHeading title='TERMS OF SERVICE' description={
					<>
						<p>Here are some frequently asked questions:</p>
						<p>Semper metus ornare sit enim porttitor curabitur habitant felis ultrices libero cubilia id velit maximus commodo taciti imperdiet mauris morbi primis diam nam vestibulum etiam nisi conubia tempus rhoncus vel accumsan</p>
					</>
				} altButton={(<Link className='btn btn-ask outline' href={'/terms/tos'}>
				<IoIosPaper/> Terms Of Service <CgArrowRight/>
			</Link>)}/>

			<section className='faq-container'>
				<SectionHeading title={<>LIST OF <br/> QUESTIONS</>}/>
				<div className="list-of-questions">

					{faqData && faqData.length > 0 && faqData.map((faq, index) => {
						return <Question 
								key={faq.question + ''}
								question={faq.question}
								index={index}
								answer={faq.answers ? <PortableText content={faq.answers} /> : <></>}
							/>
					})}
					
				</div>

				<div className="ask-more-questions">
					<img src="/images/decors/snowflake.png" alt="" className='decor_snow' />
					<p>Still confused about something?</p>
					<a href="#" className='btn btn-ask'><FaCircleQuestion/> Ask a Question  <CgArrowRight/></a>
				</div>
			</section>
		</main>
	)
}
