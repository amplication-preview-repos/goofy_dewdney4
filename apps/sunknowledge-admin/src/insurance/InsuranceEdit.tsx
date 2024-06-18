import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const InsuranceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="CoverageAmount" source="coverageAmount" />
        <TextInput label="InsuranceProvider" source="insuranceProvider" />
        <TextInput label="PolicyNumber" source="policyNumber" />
      </SimpleForm>
    </Edit>
  );
};
