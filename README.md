# gulp-msbuild
[![REF](https://img.shields.io/npm/v/gulp-msbuild.svg?style=flat-square)]([https://www.npmjs.com/package/gulp-msbuild])
<br />
<br />
msbuild plugin for gulp. Inspired by gulp-msbuild by Davyd McColl.

# gulp-jmkcoder-msbuild
[![NPM](https://img.shields.io/npm/v/gulp-jmkcoder-msbuild.svg?style=flat-square)](https://www.npmjs.com/package/gulp-jmkcoder-msbuild)
[![NPM downloads](https://img.shields.io/npm/dm/gulp-jmkcoder-msbuild.svg?style=flat-square)](https://www.npmjs.com/package/gulp-jmkcoder-msbuild)
<br />
<br />
Contributions welcome.

## Usage

First, install `gulp-jmkcoder-msbuild` as a development dependency:

```shell
npm install --save-dev gulp-jmkcoder-msbuild
```

Then, add it to your `gulpfile.js`:

```javascript
var gulp = require("gulp");
var msbuild = require("gulp-jmkcoder-msbuild");

gulp.task("default", function() {
	return gulp.src("./project.sln")
		.pipe(msbuild());
});
```

### Options

> If you miss any options, feel free to open an issue.

__Example__

```javascript
var gulp = require("gulp");
var msbuild = require("gulp-jmkcoder-msbuild");

gulp.task("default", function() {
	return gulp.src("./project.sln")
		.pipe(msbuild({
			targets: ['Clean', 'Build'],
			toolsVersion: 3.5
			})
		);
});
```

#### stdout

> Show output of msbuild

**Default:** false

#### stderr

> Show errors of msbuild

**Default:** true

#### errorOnFail

> If the MSBuild job fails with an error, this will cause the gulp-msbuild stream to return an error thus causing the gulp task to fail. This is useful if using an automated build server such as [Jenkins](http://jenkins-ci.org/) where a failing MSBuild should also cause the overall build job to fail.

**Default:** false

#### logCommand

> Logs the msbuild command that will be executed.

**Default:** false

#### targets

> Specify Build Targets

**Default:**
```javascript
['Rebuild']
```

#### configuration

> Specify Build Configuration (Release or Debug)

**Default:** Release

**Hint:** You can also specify the Build Configuration using the *properties* option
```js
properties: { Configuration: 'Debug' }
```

#### solutionPlatform

> Specify the Solution Platform (e.g. x86, x64, AnyCPU)

**Hint:** You can also specify the Solution Platform using the *properties* option
```js
properties: { Platform: 'AnyCPU' }
```

#### toolsVersion

> Specify the .NET Tools-Version

**Default:** 4.0

**Possible Values:** 1.0, 1.1, 2.0, 3.5, 4.0, 12.0, 14.0, 15.0, 16.0, 17.0

#### architecture

> Specify the Architecture

**Default:** Auto-detected

**Possible Values:** x86, x64

**Example:**
```javascript
msbuild(new msbuildoptions.MSBuildOptions({ architecture: 'x86' }))
```

#### properties

> Specify Custom Build Properties

**Default:** none

**Example:**
```javascript
msbuild(new msbuildoptions.MSBuildOptions({ properties: { WarningLevel: 2 } }))
```

**Hint:** Property values can use ```lodash.template``` templates (e.g. ```"<%= file.path %>"```)

#### verbosity

> Specify the amount of information to display in the build output

**Default:** normal

**Possible Values:** quiet, minimal, normal, detailed, diagnostic

#### maxcpucount

> Specify Maximal CPU-Count to use

**Default:** 0 = Automatic selection

**Possible Values:** -1 (MSBuild Default), 0 (Automatic), > 0 (Concrete value)

#### nodeReuse

> Specify whether to enable or disable the re-use of MSBuild nodes

**Default:** true = Nodes remain after the build finishes so that subsequent builds can use them

**Possible Values:** true (MSBuild Default), false

#### nologo

> Suppress Startup Banner and Copyright Message of MSBuild

**Default:** false -> _Show Startup Banner and Copyright Message_


#### fileLoggerParameters

> Specify the parameters for the MSBuild File Logger.

**Default:** None

**Example:**
```javascript
msbuild(new msbuildoptions.MSBuildOptions({ fileLoggerParameters: 'LogFile=Build.log;Append;Verbosity=diagnostic' }))
```

**Hint:** Logger parameters options can use ```lodash.template``` templates (e.g. ```"<%= file.path %>"```)

#### consoleLoggerParameters

> Specify the parameters for the MSBuild Console Logger. (See fileLoggerParameters for a usage example)

**Default:** None

**Hint:** Logger parameters options can use ```lodash.template``` templates (e.g. ```"<%= file.path %>"```)

#### loggerParameters

> Specify the parameters for a custom MSBuild Logger.

**Default:** None

**Example:**
```javascript
msbuild(new msbuildoptions.MSBuildOptions({ loggerParameters: 'XMLLogger,./MyLogger.dll;OutputAsHTML' }))
```

**Hint:** Logger parameters options can use ```lodash.template``` templates (e.g. ```"<%= file.path %>"```)

#### customArgs

> Specify custom msbuild arguments, which don't have a own property in
> gulp-msbuild.

**Default:** None

**Example:**
```javascript
msbuild(new msbuildoptions.MSBuildOptions({ customArgs: ['/noautoresponse'] }))
```

#### emitEndEvent

> Specify if a gulp end-event should be emitted.

**Default:** false = No end event is emitted.

**Possible Values:** true, false


### MSBuild Command-Line Reference

For a more detailed description of each MSBuild Option see the [MSBuild Command-Line Reference](http://msdn.microsoft.com/en-us/library/ms164311.aspx)

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
