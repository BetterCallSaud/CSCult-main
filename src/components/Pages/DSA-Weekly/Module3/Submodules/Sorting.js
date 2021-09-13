import '../../Submodule.css';
import Footer from '../../../../Footer/Footer';

export default function Sorting() {
    return (
        <main>
            <div id="submod">
                <h1>Sorting</h1>
                <h2>Video Resources:</h2>
                <div>
                    <a target="_blank" className="anchor" href="https://youtu.be/bBQkErahU9c">
                        <h3>Bubble Sort</h3>
                    </a>
                    <a target="_blank" className="anchor" href="https://youtu.be/B-nqY6IYqVw">
                        <h3>Selection Sort</h3>
                    </a>
                    <a target="_blank" className="anchor" href="https://youtu.be/aDX3MFL0tYs">
                        <h3>Merge Sort</h3>
                    </a>
                    <a target="_blank" className="anchor" href="https://youtu.be/wWhAhp6PIuQ">
                        <h3>Insertion Sort</h3>
                    </a>
                </div><br/><br/>
                <h2>Text Resources:</h2>
                <div>
                <a target="_blank" className="anchor" href="https://www.programiz.com/dsa/bubble-sort">
                        <h3>Bubble Sort</h3>
                    </a>
                    <a target="_blank" className="anchor" href="https://www.programiz.com/dsa/selection-sort">
                        <h3>Selection Sort</h3>
                    </a>
                    <a target="_blank" className="anchor" href="https://www.programiz.com/dsa/merge-sort">
                        <h3>Merge Sort</h3>
                    </a>
                    <a target="_blank" className="anchor" href="https://www.programiz.com/dsa/insertion-sort">
                        <h3>Insertion Sort</h3>
                    </a>
                </div>
                <br/><br/><br/><br/>
            </div>
            <Footer />
        </main>
    )
}