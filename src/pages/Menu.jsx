import React from 'react'
import ListMenu from '../components/ListMenu'
import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'
// import { productData } from '../context/data'
import { Link,useLocation } from 'react-router-dom'

export default function Menu() {
    const location = useLocation();
    const nomorMeja = location.pathname.split('/')[1];
    localStorage.setItem('location', location.pathname);
    console.log(location);
    const [activeTab, setActiveTab] = React.useState('Makanan')
    const handleFood = () => setActiveTab('Makanan')
    const handleDrink = () => setActiveTab('Minuman')
    const [productData, setProductData] = React.useState([])
    const getProductData = async () => {
        const response = await fetch('https://harjos.draf.app/api/menu')
        const data = await response.json()
        localStorage.setItem('menuId', nomorMeja);
        setProductData(data.data)
    }
    React.useEffect(() => {
        getProductData()
    }, [])

    console.log(productData);
    console.log(nomorMeja);


  return (
    <div className='bg-slate-300 w-full h-screen'>
        <div className='container mx-auto max-w-[375px] border-solid bg-white h-screen flex flex-col'>
            <div>
            <Navbar />
            <Tabs handleFood={handleFood} handleDrink={handleDrink} activeTab={activeTab} />
            </div>
            <div className='overflow-y-auto'>
                {productData.map((product) => {
                    if (product.kategori === activeTab) {
                        return (
                            <Link to={`/product/${product.id}`}>
                                <ListMenu key={product.id} product={product} />
                            </Link>
                        )
                    }
                })}
            </div>
        </div>
    </div>
  )
}
