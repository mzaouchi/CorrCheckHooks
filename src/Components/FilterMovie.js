import { Rating } from "@mui/material"
import { Button } from "react-bootstrap"

const FilterMovie=({setSearch,setRate,search,rate})=>{
    const handleReset=()=>{
        setSearch('')
        setRate(0)
    }
    return(
        <div>
            <input value={search} type="text" onChange={(e)=>setSearch(e.target.value)}/>
            <Rating value={rate} onChange={(e)=> setRate(e.target.value)} />        
            <Button onClick={handleReset}>Reset</Button> 
        </div>
    )
}

export default FilterMovie