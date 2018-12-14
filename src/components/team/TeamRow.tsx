import * as React from 'react';
import { Team } from '../../models/Team';
import TableDataRow from '../shared/Table/TableDataRow';
import TableData from '../shared/Table/TableData';

interface TeamRowProps {
  team?: Team;
  active?: boolean;
}

const initProps = {
  team: null,
  order: null,
  clicks: null
};

const TeamRow: React.SFC<TeamRowProps> = props => {
  const { order, team, clicks } = props.team || initProps;

  return (
    <TableDataRow active={props.active}>
      <TableData column='order'>{order}</TableData>
      <TableData column='team'>{team}</TableData>
      <TableData column='clicks'>
        {clicks && clicks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
      </TableData>
    </TableDataRow>
  );
};

export default TeamRow;
