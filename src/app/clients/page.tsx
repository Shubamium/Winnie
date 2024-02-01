import React from 'react'
import PanelLayout from '../layout/panelLayout/PanelLayout'
import './client.scss'
import { FaTwitter } from 'react-icons/fa'
type Props = {}

export default function ClientPage({}: Props) {
	return (
		<main id='page_client'>
			<PanelLayout  pretext='Work Partners' title='CLIENTS'>
				<div className="client-content">
						<Client/>
						<Client/>
						<Client/>
				</div>
			</PanelLayout>
		</main>
	)
}

type ClientProps = {
	
}
function Client({}:ClientProps){
	return <div className="client">
		<div className="pfp">
			<img src="" alt="" className='pfp-image' />
		</div>
		<div className="detail">
				<a href="#" className='handle'>@handle_name</a>
				<div className="name">
					<h2>Client Name</h2>
					<div className="line"></div>
				</div>
				<p className='bio'>{`She's a super talented Vartist fennec! She's also a skilled chef so beware watching too many of her streams or you'll probably end up ordering some commission from her menu.`}</p>
				<div className="contact-list">
					<a href="#" target='_blank' className="client-contact">
						<FaTwitter/>
					</a>
					<a href="#" target='_blank' className="client-contact">
						<FaTwitter/>
					</a>
					<a href="#" target='_blank' className="client-contact">
						<FaTwitter/>
					</a>
					<a href="#" target='_blank' className="client-contact">
						<FaTwitter/>
					</a>
				</div>
		</div>
	</div>
}