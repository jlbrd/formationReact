import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MemForm.module.css';
import store, { eActions, initialRessourceState, initialState } from '../../store/store';
import { withRouter } from 'react-router-dom';
const MemForm = (props) => {
  const [images, setImages] = useState(initialRessourceState.images);
  const [newMeme, setNewMeme] = useState(initialState);
  const [memes, setMemes] = useState(initialRessourceState.memes);
  useEffect(() => {
    setImages(store.getState().ressources.images);
    setMemes(store.getState().ressources.memes);
    setNewMeme(store.getState().editor);
    store.subscribe(() => {
      setImages(store.getState().ressources.images);
      setMemes(store.getState().ressources.memes);
      setNewMeme(store.getState().editor);
    });
  }, []);

  useEffect(() => {
    if (props.match.params.id) {
      let currentMeme = memes.find(meme => {
        return meme.id === Number(props.match.params.id)
      });
      if (currentMeme) {
        store.dispatch({ type: eActions.UPDATE_CURRENT, value: currentMeme })
      }
    }
  }, [memes]);

  return (
    <>
      <div className={styles.MemForm} data-testid="MemForm">
        <form onSubmit={(e) => {
          e.preventDefault();
          store.dispatch({ type: eActions.SAVE_MEME })
        }}>
          {newMeme.id && <label htmlFor="id">ID:{newMeme.id} </label>}
          <br />
          <label htmlFor="texte">Texte: </label>
          <input type="text" name="text" placeholder="Texte du meme" value={newMeme.text} onChange={(e) => {
            //setNewMeme({ ...newMeme, text: e.target.value })
            store.dispatch({ type: eActions.UPDATE_CURRENT, value: { ...newMeme, text: e.target.value } })
          }}></input>
          <br />
          <label htmlFor="x">X: </label>
          <input type="number" name="x" placeholder="X du meme" min="0" max="1920" value={newMeme.x} onChange={(e) => {
            //setNewMeme({ ...newMeme, x: Number(e.target.value) })
            store.dispatch({ type: eActions.UPDATE_CURRENT, value: { ...newMeme, x: Number(e.target.value) } })
          }}></input>
          <br />
          <label htmlFor="y">Y: </label>
          <input type="number" name="y" placeholder="Y du meme" min="0" max="1920" value={newMeme.y} onChange={(e) => {
            //setNewMeme({ ...newMeme, y: Number(e.target.value) })
            store.dispatch({ type: eActions.UPDATE_CURRENT, value: { ...newMeme, y: Number(e.target.value) } })
          }}></input>
          <br />
          <label htmlFor="y">Font size: </label>
          <input type="number" name="y" placeholder="Fontsize" min="1" value={newMeme.fontsize} onChange={(e) => {
            store.dispatch({ type: eActions.UPDATE_CURRENT, value: { ...newMeme, fontsize: Number(e.target.value) } })
            //setNewMeme({ ...newMeme, fontsize: Number(e.target.value) })
          }}></input>
          <br />
          <label htmlFor="underline">Souligné: </label>
          <input type="checkbox" name="underline" checked={newMeme.underline ? 'checked' : ''} onChange={(e) => {
            store.dispatch({ type: eActions.UPDATE_CURRENT, value: { ...newMeme, underline: Number(e.target.checked) } })
            //setNewMeme({ ...newMeme, underline: Number(e.target.checked) })
          }}></input>
          <br />
          <label htmlFor="italic">Italique: </label>
          <input type="checkbox" name="italic" checked={newMeme.italic ? 'checked' : ''} onChange={(e) => {
            store.dispatch({ type: eActions.UPDATE_CURRENT, value: { ...newMeme, italic: Number(e.target.checked) } })
            //setNewMeme({ ...newMeme, italic: Number(e.target.checked) })
          }}></input>
          <br />
          <label htmlFor="color">Couleur: </label>
          <input type="color" value={newMeme.color} onChange={(e) => {
            store.dispatch({ type: eActions.UPDATE_CURRENT, value: { ...newMeme, color: e.target.value } })
            //setNewMeme({ ...newMeme, color: e.target.value })
          }}></input>
          <br />
          <label htmlFor="image">Image: </label>
          <select onChange={(e) => {
            store.dispatch({ type: eActions.UPDATE_CURRENT, value: { ...newMeme, imageId: Number(e.target.value) } })
            //setNewMeme({ ...newMeme, imageId: Number(e.target.value) })
          }}>
            <option value="-1">Pas d'image</option>
            {images.map((image, indice) => <option value={image.id} key={'memeForm-imglist2-item' + indice}>{image.filename}</option>)}
          </select>
          <br />
          <br />
          <button onClick={(e) => {

          }}>Créer</button>
        </form>

        {/*<ol>
          {images.map((image, indice) => <li key={'memeForm-imglist-item' + indice}>{image.filename}</li>)}
        </ol>*/}
      </div>

    </>
  )
};

MemForm.propTypes = {};

MemForm.defaultProps = {
  images: [],
};

export default withRouter(MemForm);
