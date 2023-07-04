import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, setContacts } from '../userList/userListSlice';
import { nanoid } from 'nanoid';
import DefaultAvatar from '../../resources/img/Default-ava.png';

import './Form.scss';

export const Form = () => {
  const user = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const inputId = nanoid();
  const inputSecId = nanoid();

  const [avatar, setAvatar] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState('');
  const [theme, setTheme] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const infoUser = {
      name,
      theme,
      message,
      avatar,
      id: nanoid(),
    };

    const updatedUserList = user.concat(infoUser);
    dispatch(addContact(infoUser));
    saveToLocalStorage(updatedUserList);

    reset();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'theme':
        setTheme(value);
        break;
      case 'message':
        setMessage(value);
        break;
      case 'avatar':
        setAvatar(value);
        break;
        
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setTheme('');
    setMessage('');
    setSelectedImage(null);
  };

  const handleFileChange = event => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = e => {
      const imageSrc = e.target.result;
      setSelectedImage(imageSrc);
      setAvatar(imageSrc);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleReset = e => {
    e.preventDefault();
    setSelectedImage(DefaultAvatar);
    setAvatar('');
  };

const saveToLocalStorage = (userList) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('contacts', JSON.stringify(userList));
  }
};


  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <div className="personal-image">
          <label className="label">
            <input type="file" onChange={handleFileChange} />
            <figure className="personal-figure">
              <img
                src={selectedImage || DefaultAvatar}
                className="personal-avatar"
                alt="avatar"
                value={avatar}
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

        <label htmlFor={inputId}>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            required
            id={inputId}
            placeholder="Write name"
            className="form-control"
          />
        </label>

        <div className="">
          <label htmlFor={inputId}>
            Theme:
            <input
              type="text"
              value={theme}
              onChange={handleChange}
              name="theme"
              required
              id={inputId}
              placeholder="Write theme"
              className="form-control"
            />
          </label>
        </div>

        <div className="">
          <label htmlFor={inputId}>Message:</label>
          <textarea
            name="message"
            id={inputId}
            cols="30"
            rows="10"
            className="form-control"
            value={message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Contact
        </button>
      </div>
    </form>
  );
};