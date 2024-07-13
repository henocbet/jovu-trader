import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TradeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="tradeId" source="tradeId" />
        <TextField label="tradeDetails" source="tradeDetails" />
        <TextField label="status" source="status" />
      </SimpleShowLayout>
    </Show>
  );
};
