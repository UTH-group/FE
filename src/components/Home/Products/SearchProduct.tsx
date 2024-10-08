
import { ProductType } from '../../../types/Product/PostProb'
import { getRelativeTime } from '../../Util/getTimeCustom'
import { Link } from 'react-router-dom'


function SearchProduct({children}:{children : ProductType}) {


    
  return (
    <Link to={'/product/productDetail/' + children.productId}>
        
            <div className='p-3 w-full flex '>
                <img className='rounded-full w-8 h-8 md:w-14 md:h-14 bg-slate-50' src={children.imageUrls[0]} alt="alt" />
                <div className='ml-4'>
                    <h2 className='font-bold'>{children.title}</h2>
                    <p>Price : <span className='text-red-600 font-bold m-3'>{children.price}</span>Posted {getRelativeTime(children.create_at)} </p>
                </div>
            </div>

    </Link>
  )
}

export default SearchProduct