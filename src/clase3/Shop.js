import { useEffect, useRef, useState } from 'react'
import ProductsList from './ProductsList'
import * as Styles from './styles'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState(
    localStorage.selectedProducts ? JSON.parse(localStorage.selectedProducts) : []
  )
  const [applyDiscount, setApplyDiscount] = useState(
    localStorage.applyDiscount ? JSON.parse(localStorage.applyDiscount) : ''
  )
  const codeRef = useRef()
  const titleRef = useRef()

  useEffect(() => {
    fetch('https://mocki.io/v1/2d713217-a429-4940-87d7-929f10ef5991')
      .then(res => res.json())
      .then(data => setProducts(data.results))
  }, [])

  useEffect(() => {
    localStorage.selectedProducts = JSON.stringify(selectedProducts)
    localStorage.applyDiscount = applyDiscount
  }, [selectedProducts, applyDiscount])

  const addProduct = product => {
    setSelectedProducts(products => [...products, product])
  }

  const removeProduct = product => {
    setSelectedProducts(products => products.filter(p => p.id !== product.id))
  }

  const onApplyDiscount = () => {
    console.log(titleRef.current.styles)
    if (codeRef.current.value === 'SAVE10') {
      setApplyDiscount(true)
    } else {
      alert('tangao')
      setApplyDiscount(false)
    }
  }

  const getTotalPrice = () => {
    const totalPrice = selectedProducts.reduce((acum, next) => acum + next.price, 0)
    return applyDiscount ? totalPrice * 0.9 : totalPrice
  }

  return (
    <Styles.MainContainer>
      <div>
        <h1 ref={titleRef}>Products</h1>
        <ProductsList
          products={products}
          renderButton={product => <button onClick={() => addProduct(product)}>Add product</button>}
        />
      </div>
      <div>
        <h1>Selected products</h1>
        <ProductsList
          products={selectedProducts}
          renderButton={product => <button onClick={() => removeProduct(product)}>Remove product</button>}
        />
        <input ref={codeRef} type="text" placeholder="Type code" />
        <button onClick={onApplyDiscount}>Apply code</button>
        {selectedProducts.length > 0 && <p>Total: {getTotalPrice()}€</p>}
      </div>
    </Styles.MainContainer>
  )
}

export default Shop
