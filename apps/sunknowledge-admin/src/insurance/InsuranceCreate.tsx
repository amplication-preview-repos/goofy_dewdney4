import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const InsuranceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="CoverageAmount" source="coverageAmount" />
        <TextInput label="InsuranceProvider" source="insuranceProvider" />
        <TextInput label="PolicyNumber" source="policyNumber" />
      </SimpleForm>
    </Create>
  );
};
