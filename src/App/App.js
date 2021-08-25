import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'

import style from './App.module.css'
import PropTypes from 'prop-types'
import NavBar from './components/NavBar/NavBar';
import MemForm from './components/MemForm/MemForm';
import { styles } from 'ansi-colors';
import MemeViewer from './components/MemeViewer/MemeViewer';
//import Button from './components/ui/Button/Button';
//import REST_SRV, { RESSOURCES } from './config/config'
import store, { eActions, initialRessourceState, initialState } from './store/store';
import FlexViewer from './components/FlexViewer/FlexViewer';
import ThumbnailViewer from './components/ThumbnailViewer/ThumbnailViewer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMeme: initialState,
            ...initialRessourceState
        };
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({ currentMeme: store.getState().editor, ...store.getState().ressources })
        })
    }
    componentDidUpdate(change, prev) {
        // console.log('prev', prev, JSON.stringify(this.state));
    }
    getImage(id) {
        let currentImage = this.state.images.find(image => {
            return image.id === id
        });
        return currentImage;
    }
    render() {
        return (
            <>
                <Router>
                    <NavBar></NavBar>
                    <div>
                        <Switch>
                            <Route path="/" exact>
                                <h1>Bienvenue</h1>
                            </Route>
                            <Route path="/thumbnail" exact>
                                <ThumbnailViewer>
                                    {this.state.memes.map((meme, indice) => {
                                        return (
                                            <Link to={"/editor/" + meme.id}>
                                                <MemeViewer meme={meme} image={this.getImage(meme.imageId)} />
                                            </Link>
                                        )
                                    })}
                                </ThumbnailViewer>
                            </Route>
                            <Route path="/editor/:id" exact>
                                <FlexViewer>
                                    <MemForm />
                                    <MemeViewer meme={this.state.currentMeme} image={this.getImage(this.state.currentMeme.imageId)} />
                                </FlexViewer>
                            </Route>
                            <Route path="/editor" exact>
                                <FlexViewer>
                                    <MemForm />
                                    <MemeViewer meme={this.state.currentMeme} image={this.getImage(this.state.currentMeme.imageId)} />
                                </FlexViewer>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </>
        )
    }
    renderX() {
        //let toto = this.state.images;
        let currentImage = this.state.images.find(image => {
            return image.id === this.state.currentMeme.imageId
        });

        return (<div className={styles.App}>
            <NavBar />
            <ThumbnailViewer>
                {this.state.memes.map((meme, indice) => {
                    return <MemeViewer meme={meme} image={this.getImage(meme.id)} />
                })}
            </ThumbnailViewer>
            {/*<FlexViewer>
                <MemForm />
                <MemeViewer meme={this.state.currentMeme} image={this.getImage(this.state.currentMeme.id)} />
            </FlexViewer>*/}
        </div>
        )
    }
}

App.propTypes = {
}

App.defaultProps = {
}

export default App;
