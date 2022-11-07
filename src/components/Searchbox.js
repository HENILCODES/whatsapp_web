import React from 'react'

export default function Searchbox() {
    return (
        <div className="center-search-box d-flex">
            <div className="input-search d-flex w-100">
                <div className="icon">
                    <i className="bi bi-search"></i>
                </div>
                <input className="input" contenteditable="true" placeholder="Search or start new chat" />
            </div>
            <div className="filter">
                <i className="bi bi-filter"></i>
            </div>
        </div>
    )
}