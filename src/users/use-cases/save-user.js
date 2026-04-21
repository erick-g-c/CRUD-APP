import { localHostUserToModel } from "../mappers/localhost-user.mapper";
import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user";



export const saveUser = async (userLike) => {

    const user = new User( userLike );
    if (!user.firstName || !user.lastName)
            throw 'First & Last name are required'
            

    const userToSave = userModelToLocalhost( user );
    let userUpdated;

    if (user.id) {
        userUpdated = await updateUser( userToSave );
        
    } else{
        userUpdated = await createUser( userToSave );
    }
    return localHostUserToModel( userUpdated );
}


/**
 * @param {Like<User>} user
 */
const updateUser = async (user) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
    const res = await fetch(url,{
        method: 'PATCH',
        body: JSON.stringify(user),
        headers:{
            'content-Type': 'application/json'
        }
    });

    const updatedUser = await res.json();;
    console.log({updatedUser});
    return updatedUser;
};