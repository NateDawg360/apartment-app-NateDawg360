import React, {Component} from 'react'

class ApartmentShow extends Component{
  render(){
    const { apartment } = this.props
    return(
      <>
        <div id='show-body'>
            <h3>{ apartment }</h3>
            <p>{ apartment.street }</p>
            <p>{ apartment.city }, { apartment.state}</p>
            <p>Manager: { apartment.manager }</p>
            <p>Manager email: { apartment.email }</p>
            <p>Price: ${ apartment.price }</p>
            <p>Bedroom(s): { apartment.bedrooms }</p>
            <p>Bath: { apartment.bathrooms }</p>
            <p>Are Pets Allowed?: { apartment.pets }</p>
        </div>
      </>
    )
  }
}
export default ApartmentShow
