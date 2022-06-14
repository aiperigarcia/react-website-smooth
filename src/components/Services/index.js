import React from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Renew </ServicesH2>
                    <ServicesP>Balance your mind and body through daily restorative yoga and breathwork sessions. Nourish your body with cleanmeals.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Balance </ServicesH2>
                    <ServicesP>Tap into the power of Primordial Sound Meditation, personalized mantras to cultivate calm and clarity.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Connect </ServicesH2>
                    <ServicesP>Learn to listen to your body by learning about the 5,000-year-old holistic healing system of Ayurveda in daily sessions.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
    </ServicesContainer>
  )
};

export default Services;