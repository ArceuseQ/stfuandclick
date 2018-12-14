import * as React from 'react';
import styledComponents from 'styled-components';
import TableHeader from '../shared/Table/TableHeader';
import Table from '../shared/Table';
import Loader from '../shared/Loader';
import Error from '../shared/Error';

interface TeamListProps {
  rows: JSX.Element[];
  isFetching: boolean;
  errorMessage?: string;
}

const TeamList: React.SFC<TeamListProps> = props => {
  return (
    <TeamListWrapper>
      {props.isFetching && (
        <CenterWrapper>
          <Loader />
        </CenterWrapper>
      )}
      {props.errorMessage && (
        <CenterWrapper>
          <Error>{props.errorMessage}</Error>
        </CenterWrapper>
      )}
      <Table>
        <thead>
          <tr>
            <TableHeader column='order' />
            <TableHeader column='name'>Team</TableHeader>
            <TableHeader column='clicks'>Clicks</TableHeader>
          </tr>
        </thead>
        <tbody>{props.rows}</tbody>
      </Table>
    </TeamListWrapper>
  );
};

export default TeamList;

const TeamListWrapper = styledComponents.div`
  position: relative;
`;

const CenterWrapper = styledComponents.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
