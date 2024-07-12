import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PlatformShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="platformName" source="platformName" />
        <TextField label="apiUrl" source="apiUrl" />
        <TextField label="apiKey" source="apiKey" />
      </SimpleShowLayout>
    </Show>
  );
};
