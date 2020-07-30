import React from 'react';

function FormField({ label, type, placeholder, name, value, onChange }) {

    return (
        <div>
            <label>
                {label}
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    onChange={onChange} 
                />
            </label>
        </div>
    )
}


export default FormField;