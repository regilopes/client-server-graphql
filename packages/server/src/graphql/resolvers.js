import { resolvers as nodeResolvers } from "./Node/Node";
import { resolvers as demandResolvers } from "./Demand/Demand";
import { resolvers as clientResolvers } from "./Client/Client";

const resolvers = {
   ...nodeResolvers,
   ...demandResolvers,
   ...clientResolvers,

   Query: {
      ...demandResolvers.Query,
      ...clientResolvers.Query,
   },
};

export default resolvers;