import React from 'react';
import { Link } from 'react-router-dom';
import './Module5.css';
import Footer from '../../../Footer/Footer';

import module5 from '../../../../image/dsa-weekly/modules/module5.svg';

export default function Module5() {
    return (
        <main>
            <div className="mod5">
                <Link to="/dsaweekly">
                    <h4>DSAWeekly</h4>
                </Link>
                <h1>MODULE 5</h1>
                <div className="mod5_info">
                    <div className="left">
                        <br/><br/>
                        <Link to="/dsaweekly/module5/stacks">
                            <h3>Linked Lists</h3>
                        </Link>
                    </div>
                    <div className="right">
                        <img src={module5} />
                    </div>
                </div>
                <p>In the fifth module, we make connections, just like in <b>LinkedIn</b>. We will explore the world of linked lists and their algorithms too. Spoiler alert: <i>we will not study <span className="blockchain">blockchain</span>!</i></p>
            </div>
            <Footer />
        </main>
    );
}