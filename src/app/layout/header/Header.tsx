import Link from 'next/link'
import React from 'react'
import './header.scss'
import Navigation from './navigation/Navigation'
type Props = {}

export default function Header({}: Props) {
	return (
		<header id='head'>
			<h1 style={{display:'none'}}>Winnie The Blue</h1>
			<figure>
				<div className="decor_back"></div>
				<img src="/images/graphics/main-logo.png" alt="" className='main-logo' />
			</figure>
			<Navigation/>
		</header>
	)
}