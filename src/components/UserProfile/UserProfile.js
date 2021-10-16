import React from 'react';
import useUserContext from '../../Firebase/useUserContext';

const UserProfile = () => {
    const { user } = useUserContext()
    return (
        <div>
            <img src={user.photoURL} alt="" />
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
    );
};

export default UserProfile;