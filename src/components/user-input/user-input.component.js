import React, {useState} from 'react';
import './user-input.styles.scss';

const UserInput = () => {
    const[user, setUser] = useState('');
    const onInputChange = e => setUser(e.target.value);
    
    const onInputSubmit = e => {
        e.preventDefault();
        console.log('USER ' + user)
    }
    return(
    <form className='user-input-form' onSubmit={onInputSubmit}>
        <label className='user-input-label' htmlFor='username'>Enter GitHub's Username</label>
        <input className='user-input' type='text' name='username' onChange={onInputChange}/>
    </form>
)};

export default UserInput;