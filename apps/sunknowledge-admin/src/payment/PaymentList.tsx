import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Payments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="PaymentAmount" source="paymentAmount" />
        <TextField label="PaymentDate" source="paymentDate" />
        <TextField label="PaymentMethod" source="paymentMethod" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
