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
    };
  }

  async componentWillMount() {
    const weather = await getWeatherFromApi();
    this.setState({ icon: weather.icon.slice(0, -1) });
    this.setState({ description: weather.main });
    this.setState({ wdescrip: weather.description });
  }

  render() {
    const { icon } = this.state;
    const { description } = this.state;
    const { wdescrip } = this.state;
    return (
      <div className="icon">
        {icon && <img src={`/img/${icon}.svg`} alt="Weather description" />}
        <text> today we have {description} to be more spesific {wdescrip}</text>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />,
  document.getElementById('app')
);
