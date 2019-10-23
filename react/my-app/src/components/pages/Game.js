import React from 'react'


export default function Game() {
    return (
        <React.Fragment>
            <section className="section-game">
                <div className="game-container">
                    <iframe className="game" src="https://ccoenraets.github.io/react-trivia/"></iframe>
                </div>
            </section>
        </React.Fragment>
    )
}