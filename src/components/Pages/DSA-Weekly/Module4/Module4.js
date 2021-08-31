import React from 'react';
import { Link } from 'react-router-dom';
import './Module4.css';
import Footer from '../../../Footer/Footer';

import module4 from '../../../../image/dsa-weekly/modules/module4.svg';

export default function Module4() {
    return (
        <main>
            <div className="mod4">
                <h4>DSAWeekly</h4>
                <h1>MODULE 4</h1>
                <div className="mod4_info">
                    <div className="left">
                        <br/>
                        <Link to="/dsaweekly/module4/stacks">
                            <h3>Stacks</h3>
                        </Link>
                        <Link to="/dsaweekly/module4/queues">
                            <h3>Queues</h3>
                        </Link>
                        
                    </div>
                    <div className="right">
                        <img src={module4} />
                    </div>
                </div>
                <p>In the fourth module, we look into <b>stacks</b> AND <b>queues</b>. Well we are not gonna write the full description here...Come on now. Click on “Stacks" or "Queues”.</p>
            </div>
            <Footer />
        </main>
    );
}