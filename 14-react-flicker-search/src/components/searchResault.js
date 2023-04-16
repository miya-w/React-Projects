import { useParams } from 'react-router-dom';

function SearchResault(){
    const params = useParams()
    return(
        <div>
       
            <h3>Search Resaults: {params.queryText}</h3>
        </div>
    )
}


export default SearchResault