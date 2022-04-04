import {Outlet} from "react-router-dom"
import withlayout from "../withLayout"

function Blog(){
  return<Outlet/>;
}
export default withlayout(Blog);
