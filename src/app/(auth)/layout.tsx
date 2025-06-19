'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/app/components/Sidebar';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    // Here you can add authentication check
    const isAuthenticated = true; // Replace with actual auth check
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [router]);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flexGrow: 1, marginLeft: '240px', padding: '20px' }}>
        {children}
      </main>
    </div>
  );
}
