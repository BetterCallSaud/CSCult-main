import React from 'react';
import { Link } from 'react-router-dom';
import './Module2.css';
import Footer from '../../../Footer/Footer';

import module2 from '../../../../image/dsa-weekly/modules/module2.gif';

export default function Module2() {
    return (
        <main>
            <div className="mod2">
                <h4>DSAWeekly</h4>
                <h1>MODULE 2</h1>
                <div className="mod2_info">
                    <div className="left">
                        <br/><br/>
                        <Link to="/dsaweekly/module2/recursion">
                            <h3>Recursion</h3>
                        </Link>            
                    </div>
                    <div className="right">
                        <img src={module2} />
                    </div>
                </div>
                <p>In the second module, we go over and over and over... <b>RECURSION</b>. It’s a pretty trivial topic to understand. It’s all about understanding recursion <b>stack calls</b> and <b>returns</b>.</p>
            </div>
            <Footer />
        </main>
    );
}