import React from 'react';
import CardIcon from './CardIcon';
import InfoCard from "./InfoCard";

function CardDB() {
    return(
        <div class="col-md-4 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <InfoCard />
                        <CardIcon />
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default CardDB;