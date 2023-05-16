import './ItemDetail.css'

const ItemDetail = ({ id, title, image, category, price}) => {
    return(
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {title}
                </h2>
            </header>
            <picture>
                <img src={image} alt={title} />
            </picture>
            <section>
                <p className='Info'>
                    Categoría: {category}
                </p>
                <p className='Info'>
                    Precio: {price}
                </p>
            </section>
        </article>
    )
}

export default ItemDetail