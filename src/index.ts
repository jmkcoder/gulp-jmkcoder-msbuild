import msbuild from "./msbuild/msbuild";
import { MSBuildOptions } from "./msbuild/msbuild-options";

(Window as any).msbuild = msbuild;
(Window as any).msbuildoptions = MSBuildOptions;