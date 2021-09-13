import React from 'react';
import { Link } from 'react-router-dom';
import './Module1.css';
import Footer from '../../../Footer/Footer';

import module1 from '../../../../image/dsa-weekly/modules/module1.svg';

export default function Module1() {
    return (
        <main>
            <div className="mod">
                <Link to="/dsaweekly">
                    <h4>DSAWeekly</h4>
                </Link>
                <h1>MODULE 1</h1>
                <div className="mod_info">
                    <div className="left">
                        <br/><br/>
                        <Link to="/dsaweekly/module1/introduction">
                            <h3>Introduction</h3>
                        </Link>
                        <br/>
                        <Link to="/dsaweekly/module1/mathematics">
                            <h3>Mathematics</h3>
                        </Link>
                        <br/>
                        <Link to="/dsaweekly/module1/bit-manipulation">
                            <h3>Bit Manipulation</h3>
                        </Link>
                    </div>
                    <div className="right">
                        <img src={module1} />
                    </div>
                </div>
                <p>In the first module, we introduce competitive programming. Next on the way is elementary mathematics you need in CP. Just basic <b>algebra</b> and <b>arithmetic</b>. Finally, we look over <b>bit operations</b> and <b>bit manipulation</b>. </p>
            </div>
            <Footer />
        </main>
    );
}