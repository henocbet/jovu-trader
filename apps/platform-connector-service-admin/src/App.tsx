import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ConnectionList } from "./connection/ConnectionList";
import { ConnectionCreate } from "./connection/ConnectionCreate";
import { ConnectionEdit } from "./connection/ConnectionEdit";
import { ConnectionShow } from "./connection/ConnectionShow";
import { PlatformList } from "./platform/PlatformList";
import { PlatformCreate } from "./platform/PlatformCreate";
import { PlatformEdit } from "./platform/PlatformEdit";
import { PlatformShow } from "./platform/PlatformShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Platform Connector Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Connection"
          list={ConnectionList}
          edit={ConnectionEdit}
          create={ConnectionCreate}
          show={ConnectionShow}
        />
        <Resource
          name="Platform"
          list={PlatformList}
          edit={PlatformEdit}
          create={PlatformCreate}
          show={PlatformShow}
        />
      </Admin>
    </div>
  );
};

export default App;
