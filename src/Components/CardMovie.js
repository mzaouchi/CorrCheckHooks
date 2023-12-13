import { Card} from "react-bootstrap"
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import { useState } from "react";
const CardMovie=({el})=>{
  const [showMore, setShowMore] = useState(false);
    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.posterURL} />
      <Card.Body>
        <Card.Title as={Link} to={`/movie/${el.id}`}>{el.title}</Card.Title>
        <Card.Text>
          {/* {el.description} */}
          <h6>
            {showMore ? el.description : `${el.description.substring(0, 30)}`}
            <button  onClick={()=>setShowMore(!showMore)} className={showMore ? "red" : "green"}>{showMore ? "Show Less" : "Show More"}</button>
          </h6>
        </Card.Text>   
        <Rating name="read-only" value={el.rating} readOnly />
            
      </Card.Body>
    </Card>
    )
}

export default CardMovie