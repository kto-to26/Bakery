import "./Three.scss"


function Three(props){

const {data} = props

return(
    <>
    <div className="threeBlock">
        <img src={data.img} alt="" className="threeBlock-img"/>
        <div className="threeBlock-name">{data.name}</div>
        <div className="threeBlock-text">{data.text}</div>
    </div>
    </>
)

}

export default Three