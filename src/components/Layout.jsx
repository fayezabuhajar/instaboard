import Navbar from "./Navbar/Navbar.jsx";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout-content">{children}</main>
      <footer className="layout-footer">
        <p>© 2025 INSTABOARD. All rights reserved.</p>
      </footer>
    </div>
  );
}
