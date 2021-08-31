import React from 'react';
import { Link } from 'react-router-dom';
import './Module8.css';
import Footer from '../../../Footer/Footer';

import module8 from '../../../../image/dsa-weekly/modules/module8.svg';

export default function Module8() {
    return (
        <main>
            <div className="mod8">
                <h4>DSAWeekly</h4>
                <h1>MODULE 8</h1>
                <div className="mod8_info">
                    <div className="left">
                        <br/><br/>
                        <Link to="/dsaweekly/module8/advanced">
                            <h3>Advanced Topics</h3>
                        </Link>
                    </div>
                    <div className="right">
                        <img src={module8} />
                    </div>
                </div>
                <p>In the final module, we will finish off the <b>DSA Weekly Programme</b>. This module consists of <b>dynamic programming, backtracking and greedy algorithms.</b></p>
            </div>
            <Footer />
        </main>
    );
}