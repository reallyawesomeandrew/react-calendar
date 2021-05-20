import React from 'react'

export const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loading-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="svg">
                    <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"></path>
                    <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
                    <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite"></animateTransform>
                    </path>
                </svg>
            </div>
        </div>
    )
}