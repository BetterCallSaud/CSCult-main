import '../../Submodule.css';
import Footer from '../../../../Footer/Footer';

export default function Searching() {
    return (
        <main>
            <div id="submod">
                <h1>Searching</h1>
                <h2>Video Resources:</h2>
                <div>
                    <a target="_blank" className="anchor" href="https://www.youtube.com/watch?v=4GPdGsB3OSc">
                        <h3>Linear Search</h3>
                    </a>
                    <a target="_blank" className="anchor" href="https://youtu.be/ApvI7QUqGzI">
                        <h3>Binary Search</h3>
                    </a>
                </div><br/><br/>
                <h2>Text Resources:</h2>
                <div>
                    <a target="_blank" className="anchor" href="https://www.programiz.com/dsa/linear-search">
                        <h3>Linear Search</h3>
                    </a>
                    <a target="_blank" className="anchor" href="https://www.programiz.com/dsa/binary-search">
                        <h3>Binary Search</h3>
                    </a>
                </div>
                <br/><br/><br/><br/>
            </div>
            <Footer />
        </main>
    )
}