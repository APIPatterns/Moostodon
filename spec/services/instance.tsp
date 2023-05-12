import "./common.tsp";
import "../models/instance.tsp";

using Mastodon;
using TypeSpec.Http;

interface InstanceService {
  @get getInstance(): Instance;
}
