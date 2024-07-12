import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PlatformCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="platformName" source="platformName" />
        <TextInput label="apiUrl" source="apiUrl" />
        <TextInput label="apiKey" source="apiKey" />
      </SimpleForm>
    </Create>
  );
};
