import './Crypto.css'
const Crypto = ({id, name, priceUSD, changePercent24Hr}) => {
    return (
        <div key={id} className="card-container">
            <h3 > {name} </h3>
            <div className="info">
                <p><span className="label">Precio: </span>{parseFloat(priceUSD).toFixed(4)}</p>
                <p>
                    <span className='label'>Variacion 24 hr: </span>
                    <span className={parseFloat(changePercent24Hr)>0?'positivo':'negativo'}>{parseFloat(changePercent24Hr).toFixed(4)}</span>
                </p>
            </div>
           
        </div>
        
        
    )
}

export default Crypto