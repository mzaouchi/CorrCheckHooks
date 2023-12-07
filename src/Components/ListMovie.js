import CardMovie from "./CardMovie"

const ListMovie=({movies,search,rate})=>{
    var x = movies.filter((el,i,t)=> el.title.toUpperCase().includes(search.toUpperCase()) && el.rating >= rate)
    return(
        <div className="cards">
            {
                x.length == 0 ? <h1>Movie not found</h1> : x.map((el,i,t)=> <CardMovie el={el}/>)
                
            }
            
        </div>
    )
}

export default ListMovie