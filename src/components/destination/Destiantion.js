import React, {useState} from 'react'

const Tour = ({id, image, info, name, price, removeTour}) => {
    const [readMore, setReadMore] = useState(false);
  return (
    <article className='destination-tour'>
        <img src={image} alt={name} />
        <footer>
            <div className='destination-info'>
                <h4 className='destination-name'>{name}</h4>
                <h4 className='destination-price'>${price}</h4>
            </div>
            <p>
                {readMore ? info : `${info.substring(0, 200)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'show less' : ' read more'}
                </button>
            </p>
            <button className='delete-btn' onClick={() => removeTour(id)}>
                not interested
            </button>
        </footer>
    </article>
  )
}

export default Tour