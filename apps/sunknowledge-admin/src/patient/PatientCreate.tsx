import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const PatientCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <TextInput label="ContactNumber" source="contactNumber" />
        <DateTimeInput label="DateOfBirth" source="dateOfBirth" />
        <TextInput label="FirstName" source="firstName" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="LastName" source="lastName" />
      </SimpleForm>
    </Create>
  );
};
