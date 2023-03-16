import SearchBar from '../SearchBar/SearchBar'
import style from "./Nav.module.css"
import { Link } from 'react-router-dom'

export default function Nav(props) {

    return (
        <div >
            <div>
                <SearchBar onSearch={props.onSearch} />
            </div>
            <div>
            <Link to="/about">
                <h3>ABOUT</h3> 
            </Link>
            <Link to="/home">
                <h3>HOME</h3>
            </Link>
            </div>
        </div>            
    )
        
} 