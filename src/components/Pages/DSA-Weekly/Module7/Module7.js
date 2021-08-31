import React from 'react';
import { Link } from 'react-router-dom';
import './Module7.css';
import Footer from '../../../Footer/Footer';

import module7 from '../../../../image/dsa-weekly/modules/module7.gif';

export default function Module7() {
    return (
        <main>
            <div className="mod7">
                <h4>DSAWeekly</h4>
                <h1>MODULE 7</h1>
                <div className="mod7_info">
                    <div className="left">
                        <br/><br/>
                        <Link to="/dsaweekly/module7/graphs">
                            <h3>Graphs</h3>
                        </Link>
                    </div>
                    <div className="right">
                        <img src={module7} />
                    </div>
                </div>
                <p>In the seventh module, we will study graphs. Graphs is one of the most reappearing topic in CP contests. We will go over some famous graphing algos like <b>Djikstra’s</b> and <b>Kruskal’s</b>.</p>
            </div>
            <Footer />
        </main>
    );
}