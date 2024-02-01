import React from 'react'
import './panelLayout.scss'
type Props = {
	children:React.ReactNode;
	title:string;
	pretext:string;
}

export default function PanelLayout({children, title,pretext}: Props) {
	return (
		<div className='panel_layout'>
				<div className="logo-container">
						<div className="logo">
							<img src="/images/decors/text-circle.png" alt="" className='decor_text' />
							<img src="/images/graphics/main-logo.png" alt="" className='decor_logo'/>
						</div>
				</div>
				<div className="panel-header">
					<p className='pretext'>{pretext}</p>
					<div className="head">
						<div className="line"></div>
						<h2>{title}</h2>
						<div className="line"></div>
					</div>
				</div>
				{children}

				<div className="decor_end">
						<img src="/images/decors/frame-end.png" alt="" />
				</div>
		</div>
	)
}