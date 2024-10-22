'use client';
import Image from 'next/image';
import './styles/header.css';
import {useEffect,useState } from 'react';
export default function Home() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <>
            <div className="header">
                <div className="image-container">
                    <Image
                        src="/images/logo.webp"
                        width={300}
                        height={80}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}