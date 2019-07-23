import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const AddTodoForm = (props) => {
    return (
        <Form>
            <Field type="text" name="item" placeholder="Add Todo Item" autoComplete="Off" />
        </Form>
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