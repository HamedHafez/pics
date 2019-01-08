import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID f514ab3f3449a03ffa9e82f05d863b9e5d9dabb399332e579d0234603f6b07cb'
    }
});