import { ClerkProvider } from '@clerk/nextjs' ;
import {Button}from '@/components/ui/button';

export default function Home() {
  return (
    <ClerkProvider>
      <div>
        <Button>Test</Button>
      </div>
    </ClerkProvider>
  );
}
