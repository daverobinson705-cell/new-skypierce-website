'use client';
import { TypeAnimation } from 'react-type-animation';

const AutoTyping = () => {
    return (
        <TypeAnimation
            preRenderFirstString={true}
            sequence={[
                'Ode Remo, Saapade',
                2000,
                'Sagamu',
                2000,
                'Ogun State',
                2000,
                'Nigeria',
                2000,
                'Nationwide',
                2000,
            ]}
            speed={75}
            deletionSpeed={90}
            wrapper="span"
            cursor={false}
            repeat={Infinity}
        />
    );
};

export default AutoTyping;