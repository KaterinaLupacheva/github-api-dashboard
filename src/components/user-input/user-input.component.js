import React from 'react';
import './user-input.styles.scss';

const UserInput = () => (
    <form>
        <label htmlFor='username'>Enter GitHub's Username</label>
        <input type='text' name='username' />
    </form>
);

export const UserInput;