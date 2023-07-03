import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import DefaultAvatar from '../../resources/img/Default-ava.png'
import { useCreateUsersMutation } from '../../api/apiSlice'
import { v4 as uuidv4 } from 'uuid';

import './Form.scss'

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyAvatarInput = ({ setAvatar }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageSrc = e.target.result;
      setSelectedImage(imageSrc);
      setAvatar(imageSrc); // Update the avatar value in the parent component
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setSelectedImage(DefaultAvatar);
    setAvatar(''); // Reset the avatar value in the parent component
  };

  return (
    <div className="personal-image">
      <label className="label">
        <input type="file" onChange={handleFileChange} />
        <figure className="personal-figure">
          <img
            src={selectedImage || DefaultAvatar}
            className="personal-avatar"
            alt="avatar"
          />
          <figcaption className="personal-figcaption">
            <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" />
          </figcaption>
        </figure>
      </label>
      <button className="btn btn-primary" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

const CustomForm = () => {
  const [createUsers] = useCreateUsersMutation();

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(JSON.stringify(values, null, 2));
    
    const newUser = {
      id: uuidv4(),
      avatar: values.avatar,
      name: values.name,
      description: values.post,
    };

    createUsers(newUser).unwrap();
  };

  return (
    <Formik
      initialValues={{
        avatar: '',
        name: '',
        post: '',
        theme: ''
      }}
      validationSchema={Yup.object({
        name: Yup.string().min(2, 'Minimum 2 symbols').required('Mandatory field'),
        post: Yup.string().min(20, 'Minimum 20 symbols').required('Mandatory field'),
        theme: Yup.string().min(2, 'Minimum 2 symbols').required('Mandatory field')
      })}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <Form className="form" onSubmit={handleSubmit}>
          <MyAvatarInput
            id='avatar'
            name='avatar'
            setAvatar={handleChange}
          />
          <MyTextInput
            label="Name"
            className="form-control"
            placeholder="Write name"
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
          />
          <label htmlFor="text">Your message</label>
          <Field
            className="form-control"
            id="post"
            name="post"
            as="textarea"
            value={values.post}
            onChange={handleChange}
          />
          <ErrorMessage className="error" name="post" component="div" />
          <MyTextInput
            label="Theme"
            className="form-control"
            placeholder="Write theme"
            id="theme"
            name="theme"
            type="text"
            value={values.theme}
            onChange={handleChange}
          />
          <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;