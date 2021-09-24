import '../../Submodule.css';
import Footer from '../../../../Footer/Footer';

export default function Stacks() {
    return (
        <main>
            <div id="submod">
                <h1>Stacks</h1>
                <h2>Video Resources:</h2>
                <div>
                    <a target="_blank" className="anchor" href="https://www.youtube.com/watch?v=JvuaAgDar1c">
                        <h3>Stacks by Apna College</h3>
                    </a>
                </div><br/><br/>
                <h2>Text Resources:</h2>
                <div>
                    <a target="_blank" className="anchor" href="https://www.geeksforgeeks.org/stack-data-structure/">
                        <h3>Stack Data Structure</h3>
                    </a>
                </div>
                <br/><br/><br/><br/>
            </div>
            <Footer />
        </main>
    );
}