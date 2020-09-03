import React, { Component } from 'react';
import Title from './Title';
import { FaWifi,FaHotTub,FaCocktail,FaShuttleVan } from 'react-icons/fa';
export default class Services extends Component {
 
    state = {

        services: [
            {
                icon: <FaWifi/>,
                title: 'free wifi',
                info: 'Every room has free internet 24/7'
            },
            {
                icon: <FaHotTub/>,
                title: 'hot tub',
                info: 'Free sauna with hot water 39C'
            },
            {
                icon: <FaCocktail/>,
                title: 'coctail',
                info: 'The best choise of Coctails in our Bar'
            },
            {
                icon: <FaShuttleVan/>,
                title: 'shuttlevan',
                info: 'Airport shuttle available'
            }
        ]
    }
    render() {

        return(
            <section className="services">
            <Title title="services"/>
            <div className="services-center">
            {this.state.services.map((item,index) => {
               return(
                   <article key={index} className="service">
                   <span>{item.icon}</span>
                   <h6>{item.title}</h6>
                   <p>{item.info}</p>
                   </article>
               )
            })}
            </div>
            </section>
        )
    }
}

