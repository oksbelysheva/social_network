import React from 'react';
import classes from './FormControls.module.css';

export const FormControl = ({meta, input, ...props}) => {
    const showError = meta.error && meta.touched;
    return (
        <div className={classes.formControl + " " + (showError ? classes.error : "")}>
            <div>
                {props.children}
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
};

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
};
