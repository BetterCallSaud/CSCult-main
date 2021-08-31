import "./Products.css";
import DivsProg from "./assets/divs-prog.png";
import CultSpeaks from "./assets/cult-speaks.png";

function Products() {
  return (
    <div id="products" class="products">
      <h1>Products</h1>
      <p class="products-para">
        Not only are we a community, but a <b>think tank</b>. We focus on
        developing products for wide usage by learners throughout the world.{" "}
      </p>
      <div class="divs-prog">
        <div class="leftDiv">
          <img src={DivsProg} alt="" />
        </div>
        <div class="rightDiv">
          <h2>CSCult &lt;divs Programme /&gt;</h2>
          <p>
            The <b>&lt;divs Programme /&gt;</b> focuses on 8 divisions doing 8
            projects in 2 months under the guidance of <b>&lt;div Heads&gt;</b>.
            CSCult uses Discord and GitHub to manage the Programme and all the
            participants of it.
          </p>
        </div>
      </div>
      <div class="cult-speaks">
        <div class="leftDiv">
          <h2>Cult Speaks Podcast</h2>
          <p>
            <b>Cult Speaks</b> will cover all the fuzz about the latest
            technologies and we will be diving deep into the ocean of technology, with experts and great thinkers.
          </p>
        </div>
        <br />
        <br />
        <div class="rightDiv">
          <a href="https://open.spotify.com/show/7cPdUTgXDhYvM26YrM3QV2" target="_blank"><img src={CultSpeaks} alt="" /></a>
        </div>
      </div>
    </div>
  );
}

export default Products;
