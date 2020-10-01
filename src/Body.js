import React,{useEffect,useState} from 'react'
import axios from 'axios'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './allcss.css'

function Body(){

    const [items, setitems] = useState([])

    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((res)=>{
            console.log(res.data)
            setitems(res.data.meals)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const itemlist = items.map((obj)=>{
        return(
            <div className="col-md-4 bord flex-column d-flex align-items-center justify-content-center my-width">
                <p>{obj.strMeal}</p>
                <img src={obj.strMealThumb} className="img-fluid"/>
                <button className="btn btn-secondary">Details</button>

            </div>
        )
    })

    return(
        <div className="bodyComponent ">
            <div className="row">
                {itemlist}
            </div>
        </div>
    )
}

export default Body