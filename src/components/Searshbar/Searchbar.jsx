import React from 'react';
import {SearchForm, SearchFormInput, SearchFormButton, SearchbarSection } from './Searchbar.styled';
import { BiSearchAlt2 } from "react-icons/bi"


 
class Searchbar extends React.Component {
    state = {
        filter: ""
    }
    changFilter = (event) => {
        event.preventDefault()
        const data = this.state.filter
        this.props.onSubmit(data)
    }

    changInput = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.currentTarget.value})
    }
    

    
    render(){
        return(
            <SearchbarSection>
                <SearchForm className="form" type="text" onSubmit={this.changFilter}>
                    <SearchFormButton> <BiSearchAlt2 fill={ '#3f51b5' } size={36}/> </SearchFormButton>
                    <SearchFormInput type="text" name="filter" onChange={this.changInput} />
                </SearchForm>
            </SearchbarSection>
            
            
        )

}
    
}

export default Searchbar ;
