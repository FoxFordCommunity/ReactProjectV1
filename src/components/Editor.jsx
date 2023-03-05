import React from 'react';

function Editor(props) {
    return (

    <body>
    <div class="wrapper">
        <main class="main">
            <div class="main__container">
                <div class="block-editor">
                    <div class="title-editor">
                        Титульник
                    </div>
                    <div class="article-editor">
                        Статья
                    </div>
                    <div class="btn-save">
                        <button class="button-save">
                            <p>Сохранить</p>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <script src="javascript/main.js"></script>
    </body>

);
}

export default Editor;