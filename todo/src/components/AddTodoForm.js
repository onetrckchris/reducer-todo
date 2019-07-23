import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const StyledField = styled(Field)`
    padding: 10px;
    border: 1px solid grey;
    border-radius: 5px;
    outline: none;
    width: 300px;
`;

const StyledForm = styled(Form)`
    margin-top: 10px;
`;

const AddTodoForm = (props) => {
    return (
        <StyledForm>
            <StyledField type="text" name="item" placeholder="Add Todo Item" autoComplete="Off" />
        </StyledForm>
    )
}

export default withFormik({
    mapPropsToValues() {
        return {
            item: ''
        }
    },
    validationSchema: Yup.object().shape({
        item: Yup.string().required()
    }),
    handleSubmit(value, formikBag) {
        formikBag.resetForm();
        formikBag.props.addItem(value.item);
    }

})(AddTodoForm);