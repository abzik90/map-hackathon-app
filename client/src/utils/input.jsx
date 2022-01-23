import React, {useState} from 'react';

const Input = ({value, setValue, placeholder}) => {

    const [focused, setFocused] = useState(false)
    const onFocus = () => {
        setFocused(true)
    }
    const onBlur = () => {
        setFocused(false)
    }


    return (
        <div className="input-form-box"  >
            <input className={`input-form ${(focused || value ) && 'input-form-hover'}`}
                   onFocus={onFocus}
                   onBlur={onBlur}
                   onChange={({target}) => setValue(target.value)}
                   value={value}
                   onClick={onFocus}
            />
            <div onClick={onFocus}  onBlur={onBlur} className={`input-form-text ${(focused ||  value) && 'input-form-text-hover'}`}>{placeholder}</div>
        </div>

    );
};

export default Input;