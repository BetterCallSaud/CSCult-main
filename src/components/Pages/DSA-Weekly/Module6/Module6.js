import React from 'react';
import { Link } from 'react-router-dom';
import './Module6.css';
import Footer from '../../../Footer/Footer';

import module6 from '../../../../image/dsa-weekly/modules/module6.svg';

export default function Module6() {
    return (
        <main>
            <div className="mod6">
                <Link to="/dsaweekly">
                    <h4>DSAWeekly</h4>
                </Link>
                <h1>MODULE 6</h1>
                <div className="mod6_info">
                    <div className="left">
                        <br/><br/>
                        <Link to="/dsaweekly/module6/trees">
                            <h3>Trees</h3>
                        </Link>
                    </div>
                    <div className="right">
                        <img src={module6} />
                    </div>
                </div>
                <p>In the sixth module, we cover a very important topic when it comes into interview problems. <b>Trees</b> are everywhere. Literally. There’s eucalyptus, coconut, mango, binary search, spanning, etc.</p>
            </div>
            <Footer />
        </main>
    );
}