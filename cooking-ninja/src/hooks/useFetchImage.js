import { Axios } from 'axios';
import { useEffect } from 'react';

const url = process.env.REACT_APP_UNSPLASH_URL
const secret = process.env.REACT_APP_UNSPLASH_KEY

export default function useFetchImage() {
    const [images, setImages] = useState([])

    useEffect(() => {
        Axios.get(
            `${url}?client_id=${secret}`
        ).then((res) => {
            setImages(res.data);
        })
    }, [])

    return [images, setImages];
}


