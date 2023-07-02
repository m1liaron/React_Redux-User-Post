import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import DefaultAvatar from '../../resources/img/Default-ava.png'

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
  const [avatar, setAvatar] = useState('');

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
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className="form">
        <MyAvatarInput id='avatar' name='avatar' setAvatar={setAvatar} />
        <MyTextInput
          label="Name"
          className="form-control"
          placeholder="Write name"
          id="name"
          name="name"
          type="text"
        />
        <label htmlFor="text">Your message</label>
        <Field className="form-control" id="post" name="post" as="textarea" />
        <ErrorMessage className="error" name="post" component="div" />
        <MyTextInput
          label="Theme"
          className="form-control"
          placeholder="Write theme"
          id="theme"
          name="theme"
          type="text"
        />
        <button className="btn btn-primary">Submit</button>
      </Form>
    </Formik>
  );
};

export default CustomForm;