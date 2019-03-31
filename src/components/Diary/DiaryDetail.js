import React, { Component } from 'react'
import Slider from 'react-slick'

export default class DiaryDetail extends Component {
  render() {
    const { diary } = this.props
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <div className="diary__content">
        {diary.diaryContentImages.length > 0 && (
          <Slider {...settings}>
            {diary.diaryContentImages.map((image, index) => {
              return (
                <div key={index}>
                  <div
                    className="diary__thumbnail"
                    style={{ backgroundImage: `url(${image.imageUrl})` }}
                  />
                </div>
              )
            })}
          </Slider>
        )}
        {diary.content}
      </div>
    )
  }
}
