import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'CODE YOUR NEXT — 스마트소프트웨어과 | 한국폴리텍대학 대전캠퍼스',description:'상상을 코드로, 가능성을 현실로. 한국폴리텍대학 대전캠퍼스 스마트소프트웨어과 홍보 사이트 시안.'};
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="ko"><body>{children}</body></html>}
