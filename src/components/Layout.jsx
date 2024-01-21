import React from "react";

import MyNavbar from "./header/MyNavbar";
import About from "./body/About";
import Contact from "./body/Contact";
import Footer from "./footer/Footer";
import Skills from "./body/Skills";
import Experience from "./body/Experience";

const Layout = () =>{
    const scrollToSection = (sectionId) => {
        console.log("clicled")
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <div style={{minWidth:'fit-content'}}>
            <MyNavbar scrollToSection={scrollToSection}  />
            <About scrollToSection={scrollToSection} />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
}
 export default Layout;