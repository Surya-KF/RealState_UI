import './searchBar.scss'

function SearchBar(){
    return(
        <div className="searchBar">
            <div className="type"></div>
            <form >
                <input type="text" name="location" placeholder='City Location'/>
                <input type="number" name="minPrice" placeholder='Min Price'/>
                <input type="number" name="maxPrice" placeholder='Max Price'/>
            </form>
        </div>
    )
}

export default SearchBar    