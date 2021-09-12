import React, {FC} from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

const UserList: FC = () => {
    const state = useTypedSelector(state => state.user)
    console.log('State: ',state)
    return (
        <div>
            Hello
        </div>
    )
}

export default UserList