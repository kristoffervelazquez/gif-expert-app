import { useState } from 'react'
import PropTypes from 'prop-types'


const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('Hola');

    const handleInputChange = e => setInputValue(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(c => [inputValue.trim(), ...c]);
        }
        setInputValue('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleInputChange}
                onClick={() => inputValue === 'Hola' ? setInputValue('') : null}
                value={inputValue}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory