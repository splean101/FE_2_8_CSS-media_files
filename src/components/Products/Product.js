import React from 'react';
import styles from './Products.module.scss';
import iphone from '../../assets/iphone.jpg';
import watch from '../../assets/watch.jpg';
import nofoto from '../../assets/no-foto.jpg';

function Product(props) {
  const remove = () => {
    props.onRemove(props.id);
  };
let imgSrc = nofoto;
if(props.name === 'iphone' || props.name === 'Iphone'){
    imgSrc = iphone;
} else if (props.name === 'watch' || props.name === 'Watch'){
    imgSrc = watch;
}

  return (
    <div className={styles.product}>
      <div className="img">
        <img src={imgSrc} />
      </div>

      <div className="body">
        <h1 className="title">{props.name}</h1>
        <div className="price">{props.price}</div>
      </div>
      <button onClick={remove} type="button">
        Remove
      </button>
    </div>
  );
}

export default Product;
