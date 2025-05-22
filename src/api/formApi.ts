import axios from "axios";
import { parseGraph } from "../utlis/parseGraph";
import type { FormNode , FormGraphRaw } from "../types";

const API_URL = "http://localhost:3001/api/v1/anyAppId/actions/blueprints/anyFlowId/graph";

export const fetchFormGraph = async():
Promise<FormNode[]> =>{
  const response = await axios.get<FormGraphRaw>(API_URL);
  return parseGraph(response.data)
}