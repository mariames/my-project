"use client";
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css';

const Page = () => {
  return (
		<div style={{ position: 'fixed', inset: 0 }}>
			<Tldraw />
		</div>
  )
}

export default Page