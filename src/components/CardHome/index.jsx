import './style.css'

function CardHome({ carro, index }) {
    return (
        <>
            <div className="galeriaCarro">  {

                carro.map((carro) => (
                    <div key={index} className="card_main">
                        <div key={index} className="card_image"> <img src={carro.img} alt="" /> </div>
                        <div className="card_description">

                            <div className="classification"><p>Economia: ⭐⭐⭐⭐⭐</p></div>
                            <div key={index} className="card_title">{carro.title}</div>
                            <div key={index} className="text_description">{carro.description}</div>

                            <button className="about">ver mais</button>
                        </div>
                    </div>
                ))

            }
            </div>



        </>
    )
}

export default CardHome