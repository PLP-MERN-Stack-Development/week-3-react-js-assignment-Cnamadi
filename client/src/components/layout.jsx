import Navbar from './navbar';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

function Layout({ title = 'MyApp', showNavbar = true, showFooter = true, footerLinks = [] }) {
  return (
    <>
      {showNavbar && <Navbar title={title} />}
      <main className="max-w-4xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      {showFooter && <Footer links={footerLinks} />}
    </>
  );
}

export default Layout;
