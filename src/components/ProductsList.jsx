import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import axios from 'axios'
import { useTheme } from '../context/ThemeContext'


const ProductsList = () => {
    // const {cart, addToCart} = useCart()
    const { state , dispatch } = useCart()
    const [products, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { theme } = useTheme()
    
    // const getProductList = () => {
    //     axios.get(`https://fakestoreapi.in/api/products`)
    //     .then(result =>{
    //         setProduct(result.data.products)
    //     }).catch(error => {
    //         console.log(error);
    //     }).finally(() => {
    //         setIsLoading(false)
    //     })
    // }

    const getProductList = async () => {
        try{
            //const response = await axios.get('https://fakestoreapi.in/api/products')
            const response = await axios.get('https://fakestoreapi.com/products')
            console.log(response)
            setProduct(response.data)
            setIsLoading(false)
        }catch(err){
            console.log(err)
        }
        
    }

    useEffect(()=>{
    getProductList()
    }, [])

    if (isLoading) return <h1>Loading ...</h1>
    
    console.log(state)
    
    return (
        <div className={`${theme==='light' ? 'bg-white' : 'bg-gray-800'}`}>
            <h1 className='font-bold text-3xl text-center'>PRODUCT LIST</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>

            {products.map(item => (
                <div key={item.id} className='border border-gray-300 rounded shadow m-2 p-3 bg-gray-200 flex justify-between items center flex-col mb-2'>
                    <img width={250} src={item.image} alt={item.title} />
                    <span>{item.title}</span>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                    <button className='rounded bg-blue-600 text-white px-3 py-1 cursor-pointer hover:bg-blue-700' onClick={() => dispatch({type : 'ADD_TO_CART' , payload : item})}>Add to cart</button>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ProductsList