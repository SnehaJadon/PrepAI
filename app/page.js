"use client"
import { ClerkProvider } from '@clerk/nextjs' ;
import {useRouter} from 'next/navigation';
import {Button}from '@/components/ui/button';
import { useEffect } from 'react';

export default function Home() {

  const route = useRouter()
  useEffect(()=>{
    route.push("/dashboard")
  },[route])
  
  return (
    <ClerkProvider>
      <div>
        {/* <Button>Test</Button> */}
      </div>
    </ClerkProvider>
  );
}
