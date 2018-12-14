import * as React from 'react';
import styledComponents from 'styled-components';
import Button from '../shared/Button';
import FormGroup from '../shared/Form/FormGroup';
import Input from '../shared/Form/Input';

interface TeamFormProps {
  name: string;
  onSubmit: (event: React.FormEvent<HTMLInputElement>) => void;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  validate: (event: React.FormEvent<HTMLInputElement>) => boolean;
}

const TeamForm: React.SFC<TeamFormProps> = ({
  name,
  onSubmit,
  onChange,
  validate
}) => (
  <Form onSubmit={onSubmit}>
    <FlexFormGroup>
      <label htmlFor='name'>Enter your team name:</label>
      <FormInput
        type='text'
        id='name'
        required
        placeholder='Your mom'
        onChange={onChange}
        value={name}
        onBlur={validate}
      />
    </FlexFormGroup>

    <FlexButton type='submit'>Click!</FlexButton>
  </Form>
);

export default TeamForm;

const FlexButton = styledComponents(Button)`
  flex: 1;

  @media screen and (min-width: 750px) {
    margin-left: 16px;
  }
`;

const FlexFormGroup = styledComponents(FormGroup)`
  flex-shrink: 0;
  width: 100%;
  margin-bottom: 16px;

  @media screen and (min-width: 750px) {
    flex-shrink: 1;
    width: auto;
    margin-bottom: 0;
  }
`;

const FormInput = styledComponents(Input)`
  width: 100%;
`;

const Form = styledComponents.form`
  display: flex;
  flex-flow: row wrap;
`;
