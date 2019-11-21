import React from 'react';
import Card from './components/Card';
import SanFrancisco from './assets/san-francisco.png';
import LosAngeles from './assets/los-angeles.png';
import NewYork from './assets/new-york.png';
import Denver from './assets/denver.png';
import Miami from './assets/miami.png';

class App extends React.Component {

	render() {

		const cardContent = [
			{
				city: 'San Francisco',
				cityImage: SanFrancisco
			},
			{
				city: 'Los Angeles',
				cityImage: LosAngeles
			},
			{
				city: 'New York',
				cityImage: NewYork
			},
			{
				city: 'Denver',
				cityImage: Denver
			},
			{
				city: 'Miami',
				cityImage: Miami
			}
		]

		// const cities = ['Los Angeles', 'San Francisco', 'Denver'];

		// const names = ['Danny', 'Dave', 'Rachel'];

		return (
			<div>
				<section className="hero is-fullheight">
					<div className="hero-body">
						<div className="container">
							<div className="columns is-centered">
								<div className="column is-5 has-text-centered">
									<div className="title">
										Main Title
									</div>
									<div className="subtitle">
										Subtitle
									</div>
									{
										cardContent.map((a, index) =>
											<Card cityName={a.city} firstname={a.cityImage} key={index} />
										)
									}
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default App;
