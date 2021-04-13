import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import { connect } from 'react-redux'
import * as actionCreator from '../../store/actions/actionTypes';

const Div = styled.div`
    display:flex;
    margin:auto 0px;
    border :  3px solid #777777; 
    border-radius: 8px;
    padding:5px;
`;
const Input = styled.input`
    width:100%;
    border:none;
    padding:10px;
    background-color: inherit;
    font-size:20px;
    margin-left:-7px;
    :focus{
        outline:none;
        color:#777777;
    }
`;
const style = {
    margin: 'auto 10px',
    color: '#777777',
    fontSize: '30px'
}


class SearchBar extends Component {
    onChangeHandler = (event) => {
        this.props.searchString(event.target.value);
    }

    render() {
        return (
            <Div>
                <SearchIcon style={style} />
                <Input placeholder='Search by book name' type='text' onChange={this.onChangeHandler} ></Input>
            </Div >
        )
    }
}



const mapStateToProps = state => {
    return {
        search: state.query,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchString: (str) => dispatch(actionCreator.searchString(str)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
