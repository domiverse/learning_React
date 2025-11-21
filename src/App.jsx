import './App.css'
import Product from './Product'

function App() {
  const listProduct = [
    {
      url: 'https://down-vn.img.susercontent.com/file/vn-50009109-7e80ab64bdc989f5c0862ed828f343a2',
      title: 'Ưu đãi đến 50%',
      price: '1999',
    },
    {
      url: 'https://down-vn.img.susercontent.com/file/vn-50009109-7e80ab64bdc989f5c0862ed828f343a2',
      title: 'Ưu đãi đến 50%',
      price: '1999',
    },
    {
      url: 'https://down-vn.img.susercontent.com/file/vn-50009109-7e80ab64bdc989f5c0862ed828f343a2',
      title: 'Ưu đãi đến 50%',
      price: '1999',
    },
    {
      url: 'https://down-vn.img.susercontent.com/file/vn-50009109-7e80ab64bdc989f5c0862ed828f343a2',
      title: 'Ưu đãi đến 50%',
      price: '1999',
    },
    {
      url: 'https://down-vn.img.susercontent.com/file/vn-50009109-7e80ab64bdc989f5c0862ed828f343a2',
      title: 'Ưu đãi đến 50%',
      price: '1999',
    },
  ];

  return (  
    <div style={{display: 'flex', gap:'20px'
    }}>
    {
      listProduct.map((product, index) => {
        return <Product key={index} title={product.title} url={product.url}/>
      }) 
    }
      
    </div>
  );
}

export default App;
