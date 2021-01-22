import React from 'react';

function CategoriesDB(props) {
    return(
            <div className="row">
                {props.titles.map((title, i) =>
                    <div key={title + i} className="col-lg-6 mb-4">
                        <div className="card bg-info text-white shadow">
                            <div className="card-body">
                                {title}
                            </div>
                        </div>
                    </div>)}
            </div>
        )
    }


export default CategoriesDB;