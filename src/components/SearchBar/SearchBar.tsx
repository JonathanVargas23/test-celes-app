import closeImage from '../../assets/images/cross.png'

import './SearchBar.css'

const SearchBar = ({value, onChange, setValue}) => {

  return (
    <div className="SearchBar__container">
      <input
        className="SearchBar__input"
        value={value}
        placeholder="Buscar"
        onChange={onChange}
      />
      <img
        className="SearchBar__icon"
        onClick={() => setValue('')}
        src={closeImage}
        alt="close icon"
      />
    </div>
  )
}

export default SearchBar
