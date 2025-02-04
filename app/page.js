"use client"
import { ClerkProvider } from '@clerk/nextjs' ;
import {useRouter} from 'next/navigation';
import {Button}from '@/components/ui/button';
import { useEffect } from 'react';
import Header from './dashboard/_components/Header';
import HeroSection from './dashboard/_components/HeroSection'

export default function Home() {

  // const route = useRouter()
  // useEffect(()=>{
  //   route.push("/dashboard")
  // },[route])
  
  return (
    <ClerkProvider>
      <Header/>

      <HeroSection/>
    </ClerkProvider>
  );
}
