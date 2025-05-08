"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 bg-white relative" style={{ zIndex: 50 }}>
      <nav className="w-full flex items-center px-6 py-4">
        <div className="container mx-auto max-w-7xl flex items-center relative">
          {/* 좌측: 햄버거 메뉴 */}
          <div className="md:hidden">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-label="메뉴 열기"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex gap-8 text-lg font-medium text-gray-700">
            <Link href="/about" className="hover:text-blue-600 transition">ABOUT</Link>
          </div>

          {/* 중앙: 로고 */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link 
              href="/" 
              className="text-lg md:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 no-underline"
            >
              CHAKHADIO FILM
            </Link>
          </div>

          {/* 우측: 소셜 미디어 아이콘 */}
          <div className="flex-1 hidden md:flex justify-end items-center gap-4">
            <a href="https://www.youtube.com/channel/UChU8xpMdRp6fvBtlskWh72Q" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Image src="/images/youtubeicon.svg" alt="YouTube" className="w-6 h-6" width={1000} height={1000} />
            </a>
          </div>
        </div>
      </nav>

      {/* 모바일 드롭다운 메뉴 */}
      {open && (
        <div className="absolute w-full top-full left-0 right-0 bg-white border-t border-gray-200 md:hidden shadow-lg" style={{ zIndex: 40 }}>
          <div className="w-full px-6 py-2">
            <Link 
              href="/about" 
              className="block w-full py-3 text-lg font-medium text-gray-700 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              ABOUT
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 