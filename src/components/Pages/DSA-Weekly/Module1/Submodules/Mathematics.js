import '../../Submodule.css';
import Footer from '../../../../Footer/Footer';

export default function Mathematics() {
    return (
        <main>
            <div id="submod">
                <h1>Mathematics</h1>
                <h2>Video Resources:</h2>
                <div>
                    <a target="_blank" className="anchor" href="https://www.youtube.com/watch?v=69jsFIMINpI&feature=youtu.be">
                        <h3>Factorials, Trailing Zeroes and Palindromes</h3>
                    </a>
                    <a target="_blank" className="anchor" href="https://www.youtube.com/watch?v=dyrRM8dTEus&ab_channel=AnujBhaiya">
                        <h3>Euclid GCD, Prime Numbers & Sieve of Eratosthenes</h3>
                    </a>
                    <a target="_blank" className="anchor" href="https://www.youtube.com/watch?v=CnPreli2F-E&ab_channel=AnujBhaiya">
                        <h3>Modular Arithmetic</h3>
                    </a>
                </div><br/><br/>
                <h2>Text Resources:</h2>
                <div>
                    <a target="_blank" className="anchor" href="https://www.geeksforgeeks.org/c-program-factorial-number/">
                        <h3>Factorials</h3>
                    </a>
                    <a target="_blank" className="anchor" href="https://www.geeksforgeeks.org/euclids-lemma/">
                        <h3>Euclid's GCD</h3>
                    </a>
                    <a target="_blank" className="anchor" href="https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/">
                        <h3>Prime Numbers</h3>
                    </a>
                    <a target="_blank" className="anchor" href="https://www.geeksforgeeks.org/sieve-of-eratosthenes/">
                        <h3>Sieve of Erathosthenes</h3>
                    </a>
                    <a target="_blank" className="anchor" href="https://www.geeksforgeeks.org/modular-arithmetic/">
                        <h3>Modular Arithmetic</h3>
                    </a>
                </div>
                <br/><br/>
            </div>
            <Footer />
        </main>
    )
}