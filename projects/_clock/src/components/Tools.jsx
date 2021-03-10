import React from "react";
import { useRoutes, A , usePath} from "hookrouter";

import Clock from "./Clock";
import Cronometer from "./Cronometer";

const Tools = () => {
  const routes = {
    "/clock": () => <Clock />,
    "/crono": () => <Cronometer />,
  };

  const components = useRoutes(routes);
  const path = usePath();

  return <div>
      <h1>Tools</h1>
      {components}

      <A href={path+"/clock"}>Clock</A>
  </div>;
};

export default Tools;
