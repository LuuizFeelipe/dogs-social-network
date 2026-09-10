import React from 'react'
import ButtonSvg from '../../Assets/enviar.svg?react';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api';
import Error from '../Helper/Error';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({id, setComments}) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = COMMENT_POST(id, {comment})
    const { response, json } = await request(url, options);

    if(response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }
1
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        className={styles.textarea}
        name="comment" 
        id="comment" 
        placeholder="Comente..."
        value={comment} 
        onChange={({target}) => setComment(target.value)} 
      />
      <button className={styles.button}>
          <ButtonSvg />
      </button>
      {error && <Error error={error} />}
    </form>
  )
}

export default PhotoCommentsForm
