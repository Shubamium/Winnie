'use client'
import Link from 'next/link'
import React from 'react'
import './header.scss'
import Navigation from './navigation/Navigation'
import { useRouter} from 'next/navigation';
type Props = {}

export default function Header({}: Props) {
	const navigate = useRouter();
	return (
		<header id='head'>
			<h1 style={{display:'none'}}>Winnie The Blue</h1>
			<figure onClick={()=>{
				navigate.replace('/');
			}}>
				<div className="decor_back"></div>
				<img src="/images/graphics/main-logo.png" alt="" className='main-logo' />
			</figure>
			<Navigation/>
		</header>
	)
}