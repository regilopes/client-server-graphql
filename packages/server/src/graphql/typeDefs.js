import { typeDefs as clientTypeDefs } from "./Client/Client";
import { typeDefs as demandTypeDefs } from "./Demand/Demand";
import { typeDefs as nodeTypeDefs } from "./Node/Node";
import { gql } from "apollo-server-express";

const typeDefs = gql`
   type Query{
      _root: String
   }
   
   ${nodeTypeDefs}
   ${clientTypeDefs}
   ${demandTypeDefs}
`;

export default typeDefs;