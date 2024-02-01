import Link from 'next/link'
import React from 'react'
import './header.scss'
type Props = {}

export default function Header({}: Props) {
	return (
		<header id='head'>
			<h1 style={{display:'none'}}>Winnie The Blue</h1>
			<figure>
				<div className="decor_back"></div>
				<img src="/images/graphics/main-logo.png" alt="" className='main-logo' />
			</figure>
			<nav id='navigation'>
				<Link href={'/'} className='nav-link active'>HOME</Link>
				<Link href={'/service/credentials'} className='nav-link'>SERVICE</Link>
				<Link href={'/terms/tos'} className='nav-link'>TERMS</Link>
				<Link href={'/clients'} className='nav-link'>CLIENTS</Link>
			</nav>
		</header>
	)
}