import React from "react";
import Hero from "../components/homepage/heroes/Hero";
import Content from "../components/homepage/content/Contents";
import Section from "../components/homepage/section/Sections";
import FAQ from "../components/homepage/question/Questions";
import Footer from "../components/homepage/footer/Footer";


const Homepage = () => {
    return (
        <div>
            <Hero />
            <Content />
            <Section />
            <FAQ />
            <Footer />
        </div>
    )
}

export default Homepage;