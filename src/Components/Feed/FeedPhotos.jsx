import React from 'react';
import FeedPhotosItem from './FeedPhotosItem.jsx';
import useFetch from '../../Hooks/useFetch.jsx';
import { PHOTOS_GET } from '../../api.jsx';
import Error from '../Helper/Error.jsx';
import Loading from '../Helper/Loading.jsx';
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({setModalPhoto}) => {

  const { request, data, error, loading } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({page: 1, total: 6, user: 0});
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request]);

  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if(data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}  />
        ))}
      </ul>
    )
  } else {
    return null;
  }
}

export default FeedPhotos
