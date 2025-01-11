import '../styles/components-styles/cardstopcs.sass'

import Imgone from '../assets/images/image-retro-pcs.jpg'
import Imgtwo from '../assets/images/image-top-laptops.jpg'
import Imgthree from '../assets/images/image-gaming-growth.jpg'


export default function Cardtopcs (){
    const cards = [
        {id:'01',img:Imgone,title:'Reviving Retro PCs',info:"What happens when old PCs are moderns upgrades"},
        {id:'02',img:Imgtwo,title:'Top 10 Laptops of 2022',info:'our best picks for various neds and budgets.'},
        {id:'03',img:Imgthree,title:'The Growth of Gamming',info:'How the pandemic has sparked fresh opportunities'},
    ]
    
    return(
        <section id="topcs">
        {cards.map((card) => (
            <div className="Card" key={card.id}>
                <div className="container-img">
                <img src={card.img} alt='imagem' />
                </div>
                <div className='card-info'>
                <h1>{card.id}</h1>
                <h2>{card.title}</h2>
                <p>{card.info}</p>
                </div>
            </div>
        ))}
    </section>
        
        
    )
}