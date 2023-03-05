import React, {useState} from 'react';
function HomePage(props) {

    return (
            <div className="wrapper">
                <main className="main">
                    <div className="main__container">
                        <section className="main__block-one">
                            <div className="block-one__content">
                                <div className="block-one__content-text">
                                        <h1 className="block__content-title">{props.title}</h1>
                                        <p className="block__content-text">{props.desc}</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>


        </div>

    );
}

export default HomePage;