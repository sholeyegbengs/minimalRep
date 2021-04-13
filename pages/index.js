import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import FeaturesContent from '../components/HomeOne/FeaturesContent';
import AboutContent from '../components/HomeOne/AboutContent';
import ServicesContent from '../components/Common/ServicesContent';
import WhyChooseUs from '../components/Common/WhyChooseUs';
import TabsContent from '../components/HomeOne/TabsContent';
import ProjectsStyleOne from '../components/Projects/ProjectsStyleOne';
import TeamCard from '../components/Common/TeamCard';
import TestimonialSection from '../components/HomeOne/TestimonialSection';
import AnalysisFormContent from '../components/HomeOne/AnalysisFormContent';
import BlogCardSection from '../components/Common/BlogCardSection';
import PartnerLogos from '../components/HomeOne/PartnerLogos';
import SubscribeStyleOne from '../components/Common/SubscribeStyleOne';
import Footer from '../components/Layouts/Footer';

// const tawkTo = require("tawkto-react");

// const tawkToPropertyId = '5faacf148e1c140c2abcc3ca'
class Index extends Component {

// componentDidMount(){
//     tawkTo(tawkToPropertyId)
// }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <MainBanner />
                <FeaturesContent />
                <div className="pb-100">
                    <AboutContent />
                </div>
                <ServicesContent />
                <WhyChooseUs />
                <TabsContent />
                <ProjectsStyleOne /> 
                {/* <TeamCard /> */}
                <TestimonialSection />
                <AnalysisFormContent />
                <BlogCardSection />
                {/* <div className="pb-100">
                    <PartnerLogos />
                </div> */}
                <SubscribeStyleOne />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
