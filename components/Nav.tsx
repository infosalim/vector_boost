import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";


export default function Nav() {
    const [activeTab, setActiveTab] = useState('stake');

    const rippleEffect = (event: any) => {
        const btn = event.currentTarget;

        const circle = document.createElement("span");
        const diameter = Math.max(btn.clientWidth, btn.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
        circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
        circle.classList.add("ripple");

        const ripple = btn.getElementsByClassName("ripple")[0];

        if (ripple) {
            ripple.remove();
        }

        btn.appendChild(circle);
    }

    const indicator = (<span className="h-1 w-full absolute top-0 left-0 rounded-lg bg-blue-800"></span>);

    return (
        <header className="px-8 w-full flex items-center justify-between" style={{ background: "linear-gradient(90deg,rgba(104,105,231,.2),rgba(104,105,231,0) 4.29%),#1a1a36" }}>
            <div className="flex items-center">
                <div>
                    <Link href='/'>
                        <a className="flex items-center">
                            <Image src='/images/logo-v.svg' height={40} width={40} alt='logo' />
                            <span className="inline-block w-6"></span>
                            <Image src='/images/logo.svg' height={17} width={115} alt='logo text' />
                        </a>
                    </Link>
                </div>
                <div className='ml-12'>
                    <ul className="flex items-center text-xl font-bold">
                        <li onClick={(e) => rippleEffect(e)} className='relative overflow-hidden'>
                            <Link href='/'><a onClick={() => setActiveTab('/')} className='inline-block px-7 py-10 text-nav-link hover:text-white transition-all'>Stake</a></Link>
                            {activeTab === '/' && indicator}
                        </li>
                        <li onClick={(e) => rippleEffect(e)} className='relative overflow-hidden'>
                            <Link href='/'><a onClick={() => setActiveTab('claim')} className='inline-block px-7 py-10 text-nav-link hover:text-white transition-all'>Claim</a></Link>
                            {activeTab === 'claim' && indicator}
                        </li>
                        <li onClick={(e) => rippleEffect(e)} className='relative overflow-hidden'>
                            <Link href='/'><a onClick={() => setActiveTab('lock')} className='inline-block px-7 py-10 text-nav-link hover:text-white transition-all'>Lock</a></Link>
                            {activeTab === 'lock' && indicator}
                        </li>
                        <li onClick={(e) => rippleEffect(e)} className='relative overflow-hidden'>
                            <button onClick={(e) => rippleEffect(e)} className='inline-block px-7 py-10 text-nav-link hover:text-white transition-all'>Menu</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center text-xl text-white font-bold">
                    <a href="https://traderjoexyz.com/" target='_blank' rel="noreferrer" className="flex items-center mr-10">
                        <Image src='/images/icon-1.svg' alt='icon' height={25} width={25} />
                        <p className="ml-4 mt-px">$2.92</p>
                    </a>
                    <a href="https://traderjoexyz.com/" target='_blank' rel="noreferrer" className="flex items-center mr-10">
                        <Image src='/images/icon-2.svg' alt='icon' height={25} width={25} />
                        <p className="ml-4 mt-px">$2.83</p>
                    </a>
                    <a href="https://traderjoexyz.com/" target='_blank' rel="noreferrer" className="flex items-center mr-10">
                        <Image src='/images/icon-3.svg' alt='icon' height={25} width={25} />
                        <p className="ml-4 mt-px">$0.70</p>
                    </a>
                    <a href="https://traderjoexyz.com/" target='_blank' rel="noreferrer" className="flex items-center mr-10">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#6869E7" height="20" width="20" xmlns="http://www.w3.org/2000/svg" style={{ color: 'rgb(104, 105, 231)', marginRight: 7 }}><path d="M336 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm157.2-340.7l-81-81c-6.2-6.2-16.4-6.2-22.6 0l-11.3 11.3c-6.2 6.2-6.2 16.4 0 22.6L416 97.9V160c0 28.1 20.9 51.3 48 55.2V376c0 13.2-10.8 24-24 24s-24-10.8-24-24v-32c0-48.6-39.4-88-88-88h-8V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v352h288V304h8c22.1 0 40 17.9 40 40v27.8c0 37.7 27 72 64.5 75.9 43 4.3 79.5-29.5 79.5-71.7V152.6c0-17-6.8-33.3-18.8-45.3zM256 192H96V64h160v128z"></path></svg>
                        <p className="ml-4 mt-px">80.487</p>
                    </a>
                </div>
                    <button className="flex items-center bg-wallet px-6 py-3 text-lg uppercase">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 11H13.5C13.2239 11 13 11.2239 13 11.5C13 11.7761 13.2239 12 13.5 12H14.5C14.7761 12 15 11.7761 15 11.5C15 11.2239 14.7761 11 14.5 11ZM4.5 3C3.67157 3 3 3.67157 3 4.5V14.5C3 15.8807 4.11929 17 5.5 17H15.5C16.3284 17 17 16.3284 17 15.5V6.5C17 5.84689 16.5826 5.29127 16 5.08535V4.5C16 3.67157 15.3284 3 14.5 3H4.5ZM4 14.5V5.91465C4.15639 5.96992 4.32468 6 4.5 6H15.5C15.7761 6 16 6.22386 16 6.5V15.5C16 15.7761 15.7761 16 15.5 16H5.5C4.67157 16 4 15.3284 4 14.5ZM4.5 4H14.5C14.7761 4 15 4.22386 15 4.5V5H4.5C4.22386 5 4 4.77614 4 4.5C4 4.22386 4.22386 4 4.5 4Z"></path></svg>
                        <p className="ml-2">connect wallet</p>
                    </button>
            </div>
        </header>
    );
}