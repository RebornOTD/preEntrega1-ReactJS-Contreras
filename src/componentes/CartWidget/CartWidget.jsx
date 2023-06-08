import './CartWidget.css'
const CartWidget = () => {
    const imgCarro = "https://cdn-icons-png.flaticon.com/512/116/116356.png?w=826&t=st=1686182232~exp=1686182832~hmac=c4eaffe6df11cac5e3084ff800c6627ee14fa801cbe527ecf098d615a988e24d";  
    return (
    <div>
        <img className='imgCarro' src={imgCarro} alt="CarritoCompra" />
        <strong>9+</strong>
    </div>
  )
}

export default CartWidget