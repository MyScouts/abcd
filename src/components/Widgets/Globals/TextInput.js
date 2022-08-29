import React from "react";

export const TextInput = React.forwardRef(({ label, placeholder = '', error = null, ...rest }, ref) => {
    return (
        <div className="form-group mb-3 text-left">
            <label className="font-weight-bold">{label}</label>
            <input
                className="form-control"
                type="text"
                placeholder={placeholder}
                ref={ref}
                {...rest}
            />
            {error && <small className="text-danger form-text">{error}</small>}
        </div>
    )
});
