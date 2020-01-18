import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;


const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: '',
      description: '',
      wdescrip: '',
      currentTemp: '',
      feelsLike: '',
    };
  }

  async componentWillMount() {
    const weather = await getWeatherFromApi();
    console.log(weather);
    this.setState({ icon: weather.weather[0].icon.slice(0, -1) });
    this.setState({ description: weather.weather[0].main });
    this.setState({ wdescrip: weather.weather[0].description });
    this.setState({ currentTemp: weather.main.temp });
    this.setState({ feelsLike: weather.main.feels_like });
  }

  render() {
    const { icon, description, wdescrip, feelsLike, currentTemp } = this.state;
    return (
      <div className="icon">
        {icon && <img src={`/img/${icon}.svg`} alt="Weather description" />}
        <text> today we have {description}!! But to be more spesific {wdescrip}!!</text>
        <text> Currently its {currentTemp} celcius.
          You should dress accordingly as it feels like {feelsLike} celscius. </text>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
