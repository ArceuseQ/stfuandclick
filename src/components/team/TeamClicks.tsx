import * as React from 'react';
import styledComponents from 'styled-components';
import Box from '../../components/shared/Box';
import ContentWrapper from 'src/components/shared/ContentWrapper';
import Button from 'src/components/shared/Button';
import { Session } from 'src/models/Session';

interface TeamClicksProp {
  session: Session;
  handleClick: () => void;
}

export default class TeamClicks extends React.Component<TeamClicksProp> {
  render() {
    return (
      <ContentWrapper>
        <LargeButton onTouchStart={() => {}} onClick={this.props.handleClick}>
          Click!
        </LargeButton>
        <Box
          titleElement={<h3 />}
          title='Your clicks:'
          text={
            this.props.session.yourClicks &&
            this.props.session.yourClicks.toString()
          }
        />
        <Box
          titleElement={<h3 />}
          title='Team clicks:'
          text={
            this.props.session.teamClicks &&
            this.props.session.teamClicks.toString()
          }
        />
      </ContentWrapper>
    );
  }
}

const LargeButton = styledComponents(Button)`
  width: 100%;
  line-height: 64px;
`;
