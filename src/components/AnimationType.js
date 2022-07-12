import NProgress from 'nprogress';
import React, { useEffect } from 'react';
import { Link, useNavigate, useRoutes } from 'react-router-dom';
// import TypeAnimation from 'react-type-animation';
import numToWords from  'num-to-words'
import { ToWords } from 'to-words';

function AnimationType() {

    useEffect(() => {
        NProgress.set(2000);     // Sorta same as .start()
        // NProgress.set(1.0);
        // NProgress.set(1000);
    }, [])

    const toWords = new ToWords({
        localeCode: 'en-US',
        converterOptions: {
          currency: false,
          ignoreDecimal: false,
          ignoreZeroCurrency: false,
          doNotAddOnly: true,
        }
      });

    return (
        <>
            {/* <TypeAnimation
                cursor={true}
                repeat={Infinity}
                sequence={['React typing animation based on typical', 2000, 'to prevent layout-shift.',
                    2000,]}
                wrapper="h2"
            /> */}

            <h2>{numToWords(11.1, { ands: true, commas: true })}</h2>
            <h2>toWords : {toWords.convert(340)}</h2>

            <Link to={`/useaxios`}>
                <button>To test</button>
            </Link>
        </>
    );
}

export default AnimationType;
