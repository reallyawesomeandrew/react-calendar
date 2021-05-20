import React from 'react'

export const Error = () => {
    return (
        <div className="loading-container">
            <div className="error">
                <h1>
                    <i className="fas fa-exclamation-triangle"></i> Error
                </h1>
                <p>Something went wrong while loading your events.</p>
            </div>
        </div>
    )
}