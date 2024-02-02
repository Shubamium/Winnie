'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {}

export default function Navigation({}: Props) {
	const currentPath = usePathname();
	const isActive = (target:string) => currentPath === target ? 'active' : ''; 
	const has = (target:string) => currentPath.includes(target) ? 'active' : ''; 
	
	return (
		<nav id='navigation'>
				<Link href={'/'} className={`nav-link ${isActive('/')}`}>HOME</Link>
				<Link href={'/service/credentials'} className={`nav-link ${has('/service')}`}>SERVICE</Link>
				<Link href={'/terms/tos'} className={`nav-link ${has('/terms')}`}>TERMS</Link>
				<Link href={'/clients'} className={`nav-link ${has('/clients')}`}>CLIENTS</Link>
		</nav>
	)
}