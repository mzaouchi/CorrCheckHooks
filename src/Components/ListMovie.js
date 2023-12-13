import AddMovie from "./AddMovie"
import CardMovie from "./CardMovie"
import FilterMovie from "./FilterMovie"

const ListMovie=({movies,search,rate,setMovies,setSearch,setRate})=>{
    var x = movies.filter((el,i,t)=> el.title.toUpperCase().includes(search.toUpperCase()) && el.rating >= rate)
    return(
        <div>
            <AddMovie movies={movies} setMovies={setMovies}/>
            <FilterMovie setSearch={setSearch} setRate={setRate} search={search} rate={rate}/>
            <div className="cards">
            {
                x.length == 0 ? <h1>Movie not found</h1> : x.map((el,i,t)=> <CardMovie el={el}/>)
                
            }
            </div>
            
        </div>
    )
}

export default ListMovie