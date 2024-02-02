import PageHeading from '@/app/layout/pageHeading/PageHeading'
import SectionHeading from '@/app/layout/sectionHeading/SectionHeading'
import Link from 'next/link'
import React from 'react'
import { CgArrowRight } from 'react-icons/cg'
import { FaListAlt } from 'react-icons/fa'
import { IoIosPaper } from 'react-icons/io'
import Question from './question/Question'
import './faq.scss'
type Props = {}

export default function FaqPage({}: Props) {
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
					<Question 
						question='What is Lorem Ipsum?' 
						answer={<>
										<p>First of all i want to remember that my services as a manager are a luxury and NOT a requirement to be a casual creator. But if you are serious about your business and you are looking to make your Brand grow, i can help you speed up the process utilizing my Marketing and Communication knowledge. </p>
										<p>First of all i want to remember that my services as a manager are a luxury and NOT a requirement to be a casual creator. But if you are serious about your business and you are looking to make your Brand grow, i can help you speed up the process utilizing my Marketing and Communication knowledge. </p>
										</>
									}
					/>
					<Question 
						question='What is Lorem Ipsum?' 
						answer={<>
										<p>First of all i want to remember that my services as a manager are a luxury and NOT a requirement to be a casual creator. But if you are serious about your business and you are looking to make your Brand grow, i can help you speed up the process utilizing my Marketing and Communication knowledge. </p>
										<p>First of all i want to remember that my services as a manager are a luxury and NOT a requirement to be a casual creator. But if you are serious about your business and you are looking to make your Brand grow, i can help you speed up the process utilizing my Marketing and Communication knowledge. </p>
										</>
									}
					/>
					<Question 
						question='What is Lorem Ipsum?' 
						answer={<>
										<p>First of all i want to remember that my services as a manager are a luxury and NOT a requirement to be a casual creator. But if you are serious about your business and you are looking to make your Brand grow, i can help you speed up the process utilizing my Marketing and Communication knowledge. </p>
										<p>First of all i want to remember that my services as a manager are a luxury and NOT a requirement to be a casual creator. But if you are serious about your business and you are looking to make your Brand grow, i can help you speed up the process utilizing my Marketing and Communication knowledge. </p>
										</>
									}
					/>
					<Question 
						question='What is Lorem Ipsum?' 
						answer={<>
										<p>First of all i want to remember that my services as a manager are a luxury and NOT a requirement to be a casual creator. But if you are serious about your business and you are looking to make your Brand grow, i can help you speed up the process utilizing my Marketing and Communication knowledge. </p>
										<p>First of all i want to remember that my services as a manager are a luxury and NOT a requirement to be a casual creator. But if you are serious about your business and you are looking to make your Brand grow, i can help you speed up the process utilizing my Marketing and Communication knowledge. </p>
										</>
									}
					/>
					<Question 
						question='What is Lorem Ipsum?' 
						answer={<>
										<p>First of all i want to remember that my services as a manager are a luxury and NOT a requirement to be a casual creator. But if you are serious about your business and you are looking to make your Brand grow, i can help you speed up the process utilizing my Marketing and Communication knowledge. </p>
										<p>First of all i want to remember that my services as a manager are a luxury and NOT a requirement to be a casual creator. But if you are serious about your business and you are looking to make your Brand grow, i can help you speed up the process utilizing my Marketing and Communication knowledge. </p>
										</>
									}
					/>
					
					
				</div>
			</section>
		</main>
	)
}
