import { MSBuildOptions } from "./msbuild-options";
import through from 'through2';
import { MSBuildRunner } from "./msbuild-runner";

export default function(options: MSBuildOptions) {
    const stream = through.obj(function (file: any, enc: BufferEncoding, callback: through.TransformCallback) {
        const self = this;
        if (!file || !file.path) {
        self.push(file);
        return callback();
        }

        return MSBuildRunner.startMsBuildTask(options, file, self, function (err: Error | null) {
        if (err) {
            return callback(err);
        }
        if (options.emitEndEvent) {
            self.emit("end");
        }
        return callback();
        });
    });

    return stream;
}

