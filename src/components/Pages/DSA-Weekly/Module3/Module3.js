import React from 'react';
import { Link } from 'react-router-dom';
import './Module3.css';
import Footer from '../../../Footer/Footer';

import module3 from '../../../../image/dsa-weekly/modules/module3.svg';

export default function Module3() {
    return (
        <main>
            <div className="mod3">
                <Link to="/dsaweekly">
                    <h4>DSAWeekly</h4>
                </Link>
                <h1>MODULE 3</h1>
                <div className="mod3_info">
                    <div className="left">
                        <br/>
                        <Link to="/dsaweekly/module3/arrays">
                            <h3>Arrays</h3>
                        </Link>
                        <Link to="/dsaweekly/module3/strings">
                            <h3>Strings</h3>
                        </Link>
                        <Link to="/dsaweekly/module3/sorting">
                            <h3>Sorting</h3>
                        </Link>
                        <Link to="/dsaweekly/module3/searching">
                            <h3>Searching</h3>
                        </Link>
                        <Link to="/dsaweekly/module3/hashing">
                            <h3>Hashing</h3>
                        </Link>
                    </div>
                    <div className="right">
                        <img src={module3} />
                    </div>
                </div>
                <p>In the third module, we focus on <b>arrays</b> and <b>strings</b>. After we go over these two very important topics, we study some <b>sorting</b> and <b>searching</b> algorithms. Finally, we end the module with <b>hashing.</b></p>
            </div>
            <Footer />
        </main>
    );
}