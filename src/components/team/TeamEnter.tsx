import * as React from 'react';
import { connect } from 'react-redux';
import history from '../../history';
import TeamForm from './TeamForm';
import Error from '../shared/Error';
import ContentWrapper from 'src/components/shared/ContentWrapper';

interface EnterTeamState {
  name: string;
  error: string;
}

class EnterTeam extends React.Component<any, EnterTeamState> {
  initState = {
    name: '',
    error: ''
  };

  constructor(props) {
    super(props);

    this.state = this.initState;
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const name = (event.target as HTMLInputElement).value;

    this.setState({ name });

    if (this.state.error) {
      this.validate(name);
    }
  }

  handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name } = this.state;

    if (!this.validate(name)) {
      return;
    }

    history.push(`/${name}`);
  }

  validate = (text: string) => {
    this.setState({ error: '' });

    if (!/^[a-zA-Z0-9][a-zA-Z0-9-_.]{0,21}$/gi.test(text)) {
      this.setState({ error: 'Team name contains forbidden characters' });
      return false;
    }

    return true;
  }

  render() {
    return (
      <ContentWrapper>
        <TeamForm
          name={this.state.name}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          validate={event =>
            this.validate((event.target as HTMLInputElement).value)
          }
        />
        {this.state.error && <Error>{this.state.error}</Error>}
      </ContentWrapper>
    );
  }
}

export default connect()(EnterTeam);
