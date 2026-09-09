import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch.jsx';
import { PHOTO_GET } from '../../api.jsx';
import Error from '../Helper/Error.jsx';
import Loading from '../Helper/Loading.jsx';
import PhotoContent from '../Photo/PhotoContent.jsx';

const FeedModal = ({photo, setModalPhoto}) => {

  const { request, data, loading, error } = useFetch();

  function handleOutsideClick({target, currentTarget}) {
    if(target === currentTarget) {
      setModalPhoto(null);
    }
  }

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id)
    request(url, options);
  }, [photo, request]);


  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error}/>}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}

export default FeedModal
