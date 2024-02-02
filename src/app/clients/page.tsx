import React from 'react'
import PanelLayout from '../layout/panelLayout/PanelLayout'
import './client.scss'
import { FaDiscord, FaGlobe, FaTiktok, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import { client, fetchData, urlFor } from '@/db/db'
import PortableText from 'react-portable-text'
type Props = {}

export default async function ClientPage({}: Props) {
	const clientData = await fetchData<any[]>(`
		*[_type == 'client'] {
			_id,
			name,
			picture,
			bio,
			handle,
			contacts
		}
	`,)
	// const clientData = []
	console.log(clientData)
	return (
		<main id='page_client'>
			<PanelLayout  pretext='Work Partners' title='CLIENTS'>
				<div className="client-content">
						{clientData && clientData.length > 0 && clientData.map((client,index)=>{
								return <Client
										key={client.name + index}
										name={client.name}
										pfp={urlFor(client.picture).url()}
										bio={client.bio ? <PortableText content={client.bio}/>: <></>}
										contacts={client.contacts}
										handle={client.handle}
								/>
						})}
				</div>
			</PanelLayout>
		</main>
	)
}

type ClientProps = {
	pfp:string,
	name:string,
	handle:{
		handle_name:string,
		link:string,
	},
	bio:React.ReactNode
	contacts:{
		Type:
					| 'twitch'
					| 'twitter'
					| 'discord'
					| 'youtube'
					| 'website'
					| 'tiktok';
		Link:string;
	}[]
}

const iconList = {
	'twitter': <FaTwitter/>,
	'discord': <FaDiscord/>,
	'twitch': <FaTwitch/>,
	'youtube': <FaYoutube/>,
	'website': <FaGlobe/>,
	'tiktok': <FaTiktok/>
}
function Client({pfp,name,handle,bio,contacts}:ClientProps){

	return <div className="client">
		<div className="pfp">
			<img src={pfp} alt="" className='pfp-image' />
		</div>
		<div className="detail">
				<a href={handle.link ?? '#'} target='_blank' className='handle'>{handle.handle_name ?? ''}</a>
				<div className="name">
					<h2>{name}</h2>
					<div className="line"></div>
				</div>
				<div className='bio'>{bio}</div>
				<div className="contact-list">
					{contacts && contacts.length > 0 && contacts.map((contact,index)=>{
						return (
							<a href={contact.Link} target='_blank' className="client-contact" key={contact.Type + index}>
									{iconList[contact.Type]}
							</a>
						)
					})}
				
				</div>
		</div>
	</div>
}