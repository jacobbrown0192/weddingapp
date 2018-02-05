// Update this to use tokens in the future.
import axios from 'axios';

//user here is just an id, will be updated to token later
async function getUserFromToken(user)
{
    let url = `http://localhost:3001/api/user/${user}`;
    let data = await axios.get(url)
    return data;
}

function storeToken(user)
{
    sessionStorage.setItem('authToken',user);
}

function getToken()
{
    return sessionStorage.getItem('authToken');
}

function deleteToken()
{
    sessionStorage.removeItem('authToken');
}

function resetToken()
{

}

export {getUserFromToken, storeToken, getToken}