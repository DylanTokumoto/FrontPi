import CardHome from "../components/CardHome/index"
import Categories from "../components/Categories"
import SearchBlock from "../components/SearchBlock"
import '../styles/Home.css'

function Home() {

   const listaCarros = [
    {
        img: "https://img.olx.com.br/images/59/599186190403590.jpg",
        category: "Esportivo",
        title: "Escort GL 1.6",
        location: "Sorocaba", 
        description: "LA MAQUINA MAS BLOZ DE TOTE ITALIE"
    },
    {
        img: "https://i.ytimg.com/vi/nJRSW25yGAo/maxresdefault.jpg",
        category: "Rasga Asfalto 🥵",
        title: "Civic 99 V-tec",
        location: "Sorocaba", 
        description: "Ta potente"
    },
    {
        img: "https://i.pinimg.com/736x/66/4e/86/664e86a3600a1176e45b9e3e5e655c97.jpg",
        category: "Impressionar as novinhas",
        title: "Celta Rebaixado",
        location: "Sorocaba", 
        description: "Tão rebaixado que seu pé encosta no chão"
    },
    {
        img: "https://quatrorodas.abril.com.br/wp-content/uploads/2020/09/Chevrolet-Opala-SS-1976-testado-pela-revista-Quatro-Rodas-1.jpg?quality=70&strip=info",
        category: "Braziliam Domestic Market",
        title: "Opala 6 cilindros",
        location: "No bar mais proximo da sua casa", 
        description: "Bebe menos que eu quando a saudade dela bate"
    },
    {
        img: "https://heycar.com.br/media/plg_jspeed/cache/images/1c94451d9f290c740147eb4762d4a30f667168ed.webp",
        category: "Lenda",
        title: "Palio 97",
        location: "Sorocaba", 
        description: "Esse é meu carro atual"
    },
    {
        img: "https://cdn.autopapo.com.br/box/uploads/2020/11/20132108/fiat-147-6-rodas-antes-depois-lata-velha-1-565x353.jpg",
        category: "fiat 147 de 6 rodas",
        title: "fiat 147 de 6 rodas",
        location: "fiat 147 de 6 rodas", 
        description: "fiat 147 de 6 rodas"
    },
    {
        img: "https://static.wikia.nocookie.net/ceacf091-5841-43ea-ab20-432bb427f8ae/scale-to-width/755",
        category: "SOY FRANCESCO VIRGOLINII",
        title: "FIAAAUUUUUUNNN",
        location: "LA MAQUINA MAS BLOZ DE TOTE ITALIE", 
        description: "CON EL NUMEROO CUARENTA Y CHINKUE"
    },
    {
        img: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Lightning-McQueen.Cars.webp",
        category: "GOAT",
        title: "Relampago Marquinhos",
        location: "Copa pistão ", 
        description: "KATCHAU"
    }
   ] 

   const categories = [
    {
        title: "luxo",
        quantity: "130",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-rolls-royce-phantom-1536152159.png"
    },
    {
        title: "elétricos",
        quantity: "60", 
        img: "https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/wheels/wp-content/uploads/2020/12/Tesla-S-hero-960.jpg"
    },
    {
        title: "suv",
        quantity: "140",
        img: "https://quatrorodas.abril.com.br/wp-content/uploads/2022/06/PBR22_0078_fine-e1658260756271.jpg"
    },
    {
        title: "esportivos",
        quantity: "12",
        img: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-ferrari-sf90-stradale-2020-fd-hero-front_0.jpg?itok=SEGd1tLc"
    }
   ]
   


    return (
        <>
            <main>
                <div className="body">
               
                    <SearchBlock />

                    <section >

                        <Categories categorias={categories}/>
                        
                    </section>

                    <section>
                        <h2 className="recomendations_title">Recomendações</h2>
                        <div className="recomendations">

                        <CardHome carro={listaCarros}/>
                            
                        </div>

                       
                    </section>

                
                    
                </div>
            </main>
            
        </>
    )
}

export default Home