import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import Button from '../../utility/button';

export default class ProjectDetails extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3>Project Details</h3>
        </div>
        <div className="panel-body">
          <div className="col-sm-10 col-center">
            <Button onClick="" text="Edit Project Settings" />
            <hr />
            <h4>Description:</h4>
            <p>this.props.project.description</p>
            <hr />
            <h4>Acceptable Number of Teammates:</h4>
            <p>this.props.project.minTeammates to this.props.project.maxTeammates</p>
            <hr />
            <h4>Deadline (until random assignment):</h4>
            <p>this.props.project.deadline</p>
            <hr />
            <h4>Current CSV File of Students:</h4>
            <p>this.props.project.csvName</p>
          </div>
        </div>
      </div>
    );
  }
}
