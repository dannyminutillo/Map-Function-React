import React from 'react';

class Card extends React.Component {

    cardClicked = () => {
		console.log(this.props.cityName)
    }
    
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <div className="content content-flex-container" onClick={this.cardClicked}>
                            <figure className="image is-96x96 margin-top-sm">
                                <img src={this.props.firstname} />
                            </figure>
                            <div className="subtitle">
                                {this.props.cityName}
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

export default Card;