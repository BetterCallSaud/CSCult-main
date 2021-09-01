import '../../Submodule.css';
import Footer from '../../../../Footer/Footer';

export default function Intro() {
    return (
        <main>
            <div id="submod">
                <h1>Introduction</h1>
                <h2>Video Resources:</h2>
                <div>
                    <a target="_blank" className="anchor" href="https://www.youtube.com/watch?v=N89PN_uyelU&list=PLUcsbZa0qzu3yNzzAxgvSgRobdUUJvz7p&index=1">
                        <h3>Time Complexity and Big-O</h3>
                    </a>
                </div><br/><br/>
                <h2>Text Resources:</h2>
                <div>
                    <a target="_blank" className="anchor" href="https://www.youtube.com/watch?v=N89PN_uyelU&list=PLUcsbZa0qzu3yNzzAxgvSgRobdUUJvz7p&index=1">
                        <h3>Asymptotic Analysis</h3>
                    </a>
                    <a target="_blank" className="anchor" href="https://www.tutorialspoint.com/data_structures_algorithms/algorithms_basics.htm">
                        <h3>Algorithm Basics</h3>
                    </a>
                </div>
                <br/><br/>
            </div>
            <Footer />
        </main>
    )
}