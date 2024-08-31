import { useSelector, useDispatch } from "react-redux";
import { setFilterValue } from "../../redux/filtersSlice";
const SearchBox = () => {
    const filterValue = useSelector((state) => state.filter.filterValue);
    const dispatch = useDispatch()
    const handleChange = (evt) => {
      const value = setFilterValue(evt.target.value);
      dispatch(value);
    };
    return (
      
            <label>
                <p>Find contacts by name</p>
            <input type="text" value={filterValue} onChange={handleChange}/>
            </label>
    )
}
export default SearchBox