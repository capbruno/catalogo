import './styles.css';
import arrowImg from '../../assets/images/arrow.svg';
import { ProductPrice } from '../../components/ProductPrice/ProductPrice';

export function ProductDetails() {
  return (
    <div className="product-details-container">
      <div className="product-details-card base-card">
        <div className="goback-container">
          <img src={arrowImg} />
          <h2>Voltar</h2>
        </div>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img
                src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
                alt="nome do produto"
              />
            </div>
            <div className="name-price-container">
              <h1>Nome do Produto</h1>
              <ProductPrice price={2345.67} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do Produto</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, id!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}