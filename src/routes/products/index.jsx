import windowImg from '../../assets/product-photos/window.jpg';
import msWindowsImg from '../../assets/product-photos/microsoft-windows.jpg';
import './_index.scss';

export default function Products() {
  return (
    <main className="container">
      <h1 className="page-heading">Products</h1>

      <div className="products--product-section">
        <h2 className="products--product-heading">UPVC Windows</h2>
        <div className="grid-two-col products--product-info">
          <div>
            <p className="no-margin">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              ipsum, quisquam aut iusto labore magni nesciunt necessitatibus
              quae earum ut.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
              vel! Ad dolore totam, laborum expedita iure corrupti numquam
              dolores. Eius!
            </p>
          </div>
          <img src={windowImg} alt="Some UPVC windows installed in a house" />
        </div>
      </div>

      <div className="products--product-section">
        <h2 className="products--product-heading">Microsoft Windows</h2>
        <div className="grid-two-col products--product-info">
          <img
            src={msWindowsImg}
            alt="Some UPVC windows installed in a house"
          />
          <div>
            <p className="no-margin">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
              ipsum, quisquam aut iusto labore magni nesciunt necessitatibus
              quae earum ut.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus ex ea neque dolores esse dicta consequatur sapiente
              laudantium illo illum?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
