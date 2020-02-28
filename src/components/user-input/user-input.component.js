import React from 'react';
import './user-input.styles.scss';

const UserInput = () => (
    <form className='user-input-form'>
        <label className='user-input-label' htmlFor='username'>Enter GitHub's Username</label>
        <input className='user-input' type='text' name='username' />
    </form>
);

export default UserInput;