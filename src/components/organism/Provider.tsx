'use client';

import React from 'react';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';

interface ProviderProps extends SessionProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children, session }: ProviderProps): React.ReactNode => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
