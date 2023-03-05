import React from 'react';

import '../styles/editor.css'
function Editor(props) {
    return (
        <div className={props.actTheme === 0 ? 'light': 'dark'}>
        <main className="main">
            <div className="main__container">
                <div className="block-editor">
                    <div className="title-editor">
                        <textarea
                            className='textarea__article_title'
                            placeholder='Титульник'>

                        </textarea>
                    </div>
                    <div className="article-editor">
                        <textarea
                            className='textarea__article_desc'
                            placeholder='Статья'>

                        </textarea>
                    </div>
                    <div className="btn-save">
                        <button className="button-save">
                            <p>Сохранить</p>
                        </button>
                    </div>
                </div>
            </div>
        </main>
        </div>
    );
}

export default Editor;