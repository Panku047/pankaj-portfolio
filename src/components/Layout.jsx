import React from "react";
import MyNavbar from "./header/MyNavbar";
import About from "./body/About";
import Contact from "./body/Contact";
import Footer from "./footer/Footer";

const Layout = () =>{
    const scrollToSection = (sectionId) => {
        console.log("clicled")
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <div>
            <MyNavbar scrollToSection={scrollToSection}  />
            <About scrollToSection={scrollToSection} />
            <Contact />
            <Footer />
        </div>
    );
}
 export default Layout;