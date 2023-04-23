// import 'slides.css'
import { useState } from 'react'
import jpg1 from "./1.jpg"
import jpg2 from "./2.jpg"
import jpg3 from "./3.jpg"
function Slides() {
    const [isShown, setIsShown] = useState(false)
    return (
        <div>
            <h1 className="inline">Example of a Slide Show</h1>
            <h1 className="inline">
                <button
                    onClick={() => setIsShown((current) => !current)}
                    className="btn inline btn-info">
                    {' '}
                    Show Slide show{' '}
                </button>
            </h1>

            {isShown && (
                <>
                    <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-ride="carousel">
                        <div className="carousel-inner">
                            {slide1}
                            {slide2}
                            {slide3}
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="prev">
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="next">
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </>
            )}
        </div>
    )
}

// const slideShow = [
// {
// title: 'First Slide',
// content: 'Hello',
// imgpath: '...',
// },
// {
// title: 'Second Slide',
// content: 'Hello',
// imgpath: '...',
// },
// {
// title: 'Third Slide',
// content: 'Hello',
// imgpath: '...',
// },
// ]


function createslide(title, content, imgpath) {
    this.title = title
    this.content = content
    this.imgpath = imgpath
    let active = (
        <div className="carousel-itemactive">

            <img
                className="d-block w-100"
                src={this.imgpath}
                alt={this.title}
            />
            <div class="carousel-caption d-none d-md-block">
                <h5>{this.title}</h5>
                <p>{this.content}</p>
            </div>
        </div>
    )
    let back = (
        <div className="carousel-item">

            <img
                className="d-block w-100"
                src={this.imgpath}
                alt={this.title}
            />
            <div class="carousel-caption d-none d-md-block">
                <h5>{this.title}</h5>
                <p>{this.content}</p>
            </div>
        </div>
    )
    return (
        <>

            {this.title === 'title 1' ? active : back}

            {/* <img src=  alt = "123"/> */}
        </>
    )
}
const slide1 = new createslide('title 1', 'Hello',{jpg1})
const slide2 = new createslide('title 2', 'Hello', {jpg2})
const slide3 = new createslide('title 3', 'bye', {jpg3})

export default Slides
