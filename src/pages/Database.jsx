import React from 'react';
import '../styles/database.css'
function Database(props) {
    return (
            <main className="main">
                <div className="main__container">
                    <div className="block__working-unit">
                        {props.obj.map(o => <div className="block__user-editor">
                            <div className="block__content">
                                <h1 className='TitleDB'>{o.title}</h1>
                            </div>
                        </div>)}
                    </div>
                </div>
            </main>

    );
}

export default Database;