import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './Filters.scss';
import filterOptions from '../../../jsons/filterOptions.json';
class Filters extends Component {
  state = {
    dietType: '',
    intolerance: '',
    meals: [],
  };

  render() {
    const { dietsTypes, intolerances, meals } = filterOptions;

    return (
      <section className="filters">
        <h2 className="filters__header">Your filters</h2>
        <form className="filters__form">
          <div className="filters__box">
            <h3 className="filters__action-name">Select your diet type</h3>
            <select name="diets-ypes" id="diets-types">
              {dietsTypes.map(({ value, text }) => (
                <option key={value} value={value}>
                  {text}
                </option>
              ))}
            </select>
          </div>
          <div className="filters__box">
            <h3 className="filters__action-name">Select your intolerances</h3>
            {intolerances.map(({ value, text }) => (
              <label key={value}>
                {text} <input type="checkbox" name={value} />
              </label>
            ))}
          </div>
          <div className="filters__box">
            <h3 className="filters__action-name">Select your daily meals</h3>

            <table>
              <tr>
                <th>Meal</th>
                <th>Hour</th>
              </tr>
              {meals.map(({ value, text }) => (
                <tr>
                  <td>
                    <label key={value}>
                      <input type="checkbox" name={value} /> {text}
                    </label>
                  </td>
                  <td>
                    <input type="time" />
                  </td>
                </tr>
              ))}
            </table>
          </div>

          <div className="filters__box">
            <h3 className="filters__action-name">Other</h3>
            <label>
              Max. Calories [kcal]: <input type="number" />{' '}
            </label>
            <label>
              Min. Calories [kcal]: <input type="number" />{' '}
            </label>
            <label>
              Max. Time preparetion [min]: <input type="number" />{' '}
            </label>
          </div>
          <button className="primary-btn">Confirm</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filter.filters,
  };
};
export default connect(mapStateToProps)(Filters);
