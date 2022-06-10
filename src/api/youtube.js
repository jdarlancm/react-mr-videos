import axios from "axios";

const KEY = 'AIzaSyCwGGzbTI8MnHPQD9BJtVdOHm5B_hTGx64';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});