import React from 'react'
import PanelLayout from '../layout/panelLayout/PanelLayout'
import './client.scss'
import { client, fetchData, urlFor } from '@/db/db'
import ClientList from './clientList/ClientList'
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
	// console.log(clientData)
	return (
		<main id='page_client'>
			<PanelLayout  pretext='Work Partners' title='CLIENTS'>
				<ClientList clientData={clientData}/>
			</PanelLayout>
		</main>
	)
}
