import './DSAWeekly.css';

import module1 from '../../../image/dsa-weekly/modules/module1.svg';
import module2 from '../../../image/dsa-weekly/modules/module2.gif';
import module3 from '../../../image/dsa-weekly/modules/module3.svg';
import module4 from '../../../image/dsa-weekly/modules/module4.svg';
import module5 from '../../../image/dsa-weekly/modules/module5.svg';
import module6 from '../../../image/dsa-weekly/modules/module6.svg';
import module7 from '../../../image/dsa-weekly/modules/module7.gif';
import module8 from '../../../image/dsa-weekly/modules/module8.svg';

import Card from './Card';
import Footer from '../../Footer/Footer';

let rowOne = [];
let rowTwo = [];

let desc = [
    'Introduction',
    'Recursion',
    'Arrays & Strings',
    'Stacks & Queues',
    'Linked Lists',
    'Trees',
    'Graphs',
    'Advanced Topics'
];

let urls = [
    module1, module2, module3, module4, module5, module6, module7, module8
];

let mod = [
    './dsaweekly/module1',
    './dsaweekly/module2',
    './dsaweekly/module3',
    './dsaweekly/module4',
    './dsaweekly/module5',
    './dsaweekly/module6',
    './dsaweekly/module7',
    './dsaweekly/module8'
];

for (let i = 0; i < 4; i++) {
    rowOne.push(
        <Card num={i+1} desc={desc[i]} imageURL={urls[i]} moduleURL={mod[i]}/>
    )
}
for (let i = 0; i < 4; i++) {
    rowTwo.push(
        <Card num={i+5} desc={desc[i+4]} imageURL={urls[i+4]} moduleURL={mod[i+4]}/>
    )
}

export default function DSAWeekly() {
    return (
        <div className="dsaweekly">
            <main>
            <h1 className="dsaweekly-heading">Welcome to <span>CSCult's</span> DSA Weekly Programme!</h1>
            <p>
                DSA Weekly is an 8 week programme on data structures and algorithms, for aspiring competitive programmers.
                The Programme consists of a total of 8 modules, which deal with different data structures and algorithms. 
                We begin our journey from the basics of CP and end the programme with the most advanced topics like DP.
            </p>
            <br />
            <div className="row">
                {rowOne}
            </div>
            <div className="row">
                {rowTwo}
            </div>
            </main>
            <Footer />
        </div>  
    );
}
