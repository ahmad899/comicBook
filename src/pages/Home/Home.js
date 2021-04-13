import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../../store/actions/actionTypes';
import { Div, Span, Ul, BookLink, Li, Hr } from './styledHome.js';
import BookData from './BookData/BookData';



class Home extends Component {
    componentDidMount() {
        this.props.fetchData();

    }

    groupByKey = (key, array) =>

        array.reduce((objectsByKeyValue, obj) => {
            const value = obj[key];
            objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
            return (objectsByKeyValue);
        }, {})






    render() {


        const arr = this.props.data;
        const bookPageRandomBook = arr; //for random book in the book page
        let { id } = this.props.match.params;

        const groupedData = this.groupByKey(id.toLowerCase(), arr);


        return (
            <Div>
                {Object.keys(groupedData).reverse().map(objKey =>
                    <Fragment key={objKey}>
                        <Span>{(objKey) === 'undefined' ? 'Random' : objKey}</Span><Ul>{
                            groupedData[objKey].map(data =>
                                <Li key={data.name}>
                                    <Hr />
                                    <BookLink to={{
                                        pathname: `${id}/${data.name.slice(-3)}`,
                                        state: {
                                            data,
                                            bookPageRandomBook
                                        }
                                    }} >

                                        <BookData
                                            img={data.image}
                                            name={data.name.slice(0, -4)}
                                            owner={data.owner}
                                        />
                                    </BookLink >
                                </Li>)
                        }</Ul>
                    </Fragment>)
                }
            </Div >
        )





    }
}







const mapStateToProps = (state) => {
    return {
        data: state.book,
        inputStr: state.filterString,
        search: state.query
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(actionCreator.startFetch()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
