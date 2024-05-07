import "./Offer.scss"
import { useContext } from "react"
import DataContext from "../Context"

function Offer(){

const user = useContext(DataContext)

console.log(user[0].name);
return(
    <div className="offers">
        
        {/* <div className="offer__container-img"></div>
        <div className="offer__container-name">{user[0].name}</div>
        <div className="offer__container-price">something <span>price</span></div>
        <button className="offer__container-btn">Quick Shop</button> */}

        {user.map((i,index)=>{
            return(
                <div className="offer" key={"offer" + index}>
                    <div className="offer__container" >
                    <img src={i.img} className="offer__container-img"/>
                    <div className="offer__container-name">{i.name}</div>
                    <div className="offer__container-price">{i.price} <span>{i.priceTwo}</span></div>
                    <button className="offer__container-btn">Quick Shop</button>
            </div>
                </div>
            )
        })}
        </div>
    
    
)

}

export default Offer