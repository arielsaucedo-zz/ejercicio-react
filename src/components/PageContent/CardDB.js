import React from 'react';
import PropTypes from "prop-types";

function CardDB(props) {
    return(
        <div className="row">
            {props.items.map((item, i) => 
            <div key={item + i} className="col-md-4 mb-4">
                <div className= {item.border}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> 
                                {item.titulo}
                            </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{item.cifra}</div>
                    </div>
                    <div className="col-auto">
                        <i className= {item.icono}></i>
                    </div>
                    </div>
                </div>
            </div>
        </div>)}
        </div>
    )
    
}
CardDB.defaultProps = {
    titulo: "Sin titulo",
    cifra: 0 ,
    border: "card border-left-primary shadow h-100 py-2",
    icono: "fas fa-clipboard-list fa-2x text-gray-300",
}

CardDB.propTypes = {
    titulo: PropTypes.string,
    cifra: PropTypes.number ,
    border: PropTypes.string,
    icono: PropTypes.string,
}

export default CardDB;