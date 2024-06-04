import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProfileTitle } from "../profile/ProfileTitle";

export const CompanyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="industry" source="industry" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="profiles"
          reference="Profile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProfileTitle} />
        </ReferenceArrayInput>
        <TextInput label="website" source="website" />
      </SimpleForm>
    </Edit>
  );
};
