import '../Submodule.css';
import Footer from '../../../Footer/Footer';

export default function Recursion() {
    return (
        <main>
            <div id="submod">
                <h1>Recursion</h1>
                <h2>Video Resources:</h2>
                <div>
                    <a target="_blank" className="anchor" href="https://www.youtube.com/watch?v=oSQbwlepoCU&ab_channel=ApnaCollege">
                        <h3>Introduction to Recursion</h3>
                    </a>
                </div><br/><br/>
                <h2>Text Resources:</h2>
                <div>
                    <a target="_blank" className="anchor" href="https://www.tutorialspoint.com/cprogramming/c_recursion.htm">
                        <h3>Recursion in C/C++</h3>
                    </a>
                </div>
                <br/><br/>
            </div>
            <Footer />
        </main>
    )
}