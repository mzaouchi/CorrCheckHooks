import { Link, useNavigate, useParams } from "react-router-dom"

const DescriptionMovie=({movies})=>{
    var {id} = useParams()
    var found = movies.find((el,i,t)=> el.id == id)
    const navigate = useNavigate()
    return(
        <div>
            <h1>{found.title}</h1>
            <img src={found.posterURL} alt="Not Found"/>
            <br/>
            <iframe width="560" height="315" src={found.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <button onClick={()=>navigate('/')}>Home</button>
        </div>
    )
}

export default DescriptionMovie