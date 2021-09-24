import '../../Submodule.css';
import Footer from '../../../../Footer/Footer';

export default function Queues() {
    return (
        <main>
            <div id="submod">
                <h1>Queues</h1>
                <h2>Video Resources:</h2>
                <div>
                    <a target="_blank" className="anchor" href="https://www.youtube.com/watch?v=fbonDkYsKj0">
                        <h3>Queues by Apna College</h3>
                    </a>
                </div><br/><br/>
                <h2>Text Resources:</h2>
                <div>
                    <a target="_blank" className="anchor" href="https://www.geeksforgeeks.org/queue-data-structure/">
                        <h3>Queue Data Structure</h3>
                    </a>
                </div>
                <br/><br/><br/><br/>
            </div>
            <Footer />
        </main>
    )
}