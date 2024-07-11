import { ReactNode } from 'react';

import Footer from './footer';
import Nav from './nav';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="just-pay-1l3wq99 overflow-hidden">
      {children}
      <hr className="just-pay-z4a72a" />
      <Footer />
      <Nav />
    </div>
  );
}
