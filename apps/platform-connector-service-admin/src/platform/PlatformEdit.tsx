import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PlatformEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="platformName" source="platformName" />
        <TextInput label="apiUrl" source="apiUrl" />
        <TextInput label="apiKey" source="apiKey" />
      </SimpleForm>
    </Edit>
  );
};
