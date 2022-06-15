import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

export default class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:1.8},
            {id: 2, value: "Css", xp:2},
            {id: 3, value: "Php", xp:1.3},
            {id: 4, value: "Python", xp:0.3}
        ],
        frameworks: [
            {id: 1, value: "React", xp:1.4},
            {id: 2, value: "Vue", xp:0.5},
            {id: 3, value: "Sass", xp:1.5},
            {id: 4, value: "Symfony", xp:0.3},
        ]
    }

  render() {
      let {languages, frameworks} = this.state;

    return (
      <div className='languagesFrameworks'>
          <ProgressBar 
            languages={languages}
            className="languagesDisplay"
            title="languages"
          />
          <ProgressBar 
          languages={frameworks}
            title="frameworks & bibliothèque"
            className="frameworksDisplay"
          />
      </div>
    )
  }
}
