import Image from 'next/image'

import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    
    <div
    className="hero min-h-screen"
    style={{
      backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
    }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
        <p className="mb-5">
          Myself Adwin T Sunil a cs undergraduate at Model Engineering College Thrikkakara
        </p>
        
        <Link href="/users/home3" className='btn btn-primary py-5'>To know More about me click</Link>
      </div>
    </div>
  </div>
  )
}
