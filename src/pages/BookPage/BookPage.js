import React, { Component } from 'react'
import { connect } from 'react-redux'
import Logo from '../../componenets/Header/Logo';
import { Div, ImgInfoWrapp, BookImage, ImageInfoDiv, Hr, P, PSpan, StarDiv, RandomBookWrrap, RandomBookDiv, Label, BookLink, LinkSpan } from './BookPageStyle';
import ReactStars from "react-rating-stars-component";


class BookPage extends Component {


    //function generate a 5 or less book items by passing 2 random values in arrey range to the slice method. 
    randomFiveBook(arreyLength) {
        let towNum = [];
        let number1 = Math.floor(Math.random() * arreyLength + 1);
        let number2 = Math.floor(Math.random() * arreyLength + 1);
        while ((number1 - number2) !== 5) {
            number1 = Math.floor(Math.random() * arreyLength + 1);
            number2 = Math.floor(Math.random() * arreyLength + 1);
        }
        towNum = [number1, number2];
        towNum.sort(function (a, b) { return a - b });
        return towNum;
    }


    render() {
        let { id } = this.props.match.params;
        const bookData = this.props.bookPageRandomBook;
        const sliceRandomValues = this.randomFiveBook((bookData.length) || 5);
        const RandomBooks = bookData.slice(sliceRandomValues[0], sliceRandomValues[1]);
        const data = this.props.location.state.data;

        return (
            <div>
                <Logo />
                <Div>
                    <LinkSpan to={`/${id}`}>{'<'}Back to collection</LinkSpan>
                    <ImgInfoWrapp>
                        <BookImage src={data.image} alt='imagePhoto' width="300px" height="519.92" />
                        <ImageInfoDiv>
                            <h1>{data.name.slice(0, -4)}({data.year})<StarDiv><ReactStars value={data.rating} size={25} /></StarDiv></h1>
                            <P>Writer: <PSpan> {data.writer}</PSpan> </P>
                            <P>Artist: <PSpan> {data.artist}</PSpan></P>
                            <P>Publication: <PSpan> {data.publication}</PSpan></P>
                            <P>Owner: <PSpan> {data.owner}</PSpan></P>
                            <p>{data.summary}</p>
                        </ImageInfoDiv>
                    </ImgInfoWrapp>
                    <Hr />


                    {/* random books */}
                    <Label style={{ fontSize: '32px' }}>Other Random Book</Label>
                    <RandomBookWrrap>
                        {RandomBooks.map(data =>
                            <RandomBookDiv key={data.name}>
                                <BookLink to={{
                                    pathname: `/${id}/${data.name.slice(-3)}`,
                                    state: {
                                        data,
                                        bookPageRandomBook: bookData
                                    }
                                }}>
                                    <img src={data.image} alt="bookImg" />
                                    <p>{data.name.slice(0, -4)}</p>
                                </BookLink>
                            </RandomBookDiv>
                        )}
                    </RandomBookWrrap>



                </Div >
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    bookPageRandomBook: state.book
})



export default connect(mapStateToProps)(BookPage)
