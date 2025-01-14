import Banner from '../assets/images/image-web-3-desktop.jpg'

import '../styles/components-styles/content.sass'

export default function Content (){
    return (
        <section id='container-content'>
          <div className="sections-container">
            <div className="container-news-1">
                
            <div className='banner'>
                <div className="container-img">
                     <img src={Banner} alt="" /> 
                </div>
            </div>

            <div className="new-1">
                <div className='title'>
                     <h1>The Bright Future of Web 3.0?</h1>
                </div>
                
                <div className="content-news">
                    <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button type="button" className='more'>READ MORE</button>
                </div>
            </div>

            </div>


            <div className="container-news-2">
                <h1>New</h1>
                <div className="content-new-1">
                    <h2>Hydrogen VS Electric Cars</h2>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <hr />
                <div className="content-new-2">
                        <h2>The Downsides of Al Artistry</h2>
                        <p>What are the possible adverse effects of on-demand Al image generation?</p>
                </div>
                <hr />
                <div className="content-new-3">
                        <h2>Is VC Funding Drying Up?</h2>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
            </div>
          </div>
        </section>
    )
}
