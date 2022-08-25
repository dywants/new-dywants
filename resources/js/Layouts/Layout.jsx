import React from "react";
import Theme from "@/Pages/styles/theme";
import Navbar from "@/Components/Navbar/Navbar.jsx";
import Footer from "@/Components/Footer/Footer.jsx";

const Layout = ({ children }) => {
    return (
        <Theme>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                }}
            >
                <div style={{ flex: "1" }}>
                    <Navbar />
                    <main className="overflow-hidden z-40">{children}</main>
                </div>
                <Footer>Footer</Footer>
            </div>
        </Theme>
    );
};

export default Layout;
