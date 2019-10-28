let gulp = require("gulp");
let fs = require("fs-extra");
let browserify = require("browserify");
let watchify = require("watchify");
let tsify = require("tsify");
let gulpTypescript = require("gulp-typescript");
let promisepipe = require("promisepipe");
let cp = require("child_process");

async function clean(){
	await fs.remove("./build");
}

async function buildClient(watch){
	await fs.ensureDir("./build/public");
	let bundle = browserify({cache:{},packageCache:{}});
	bundle.plugin(tsify);
	if(watch){
		bundle.plugin(watchify)
	}
	bundle.add(require.resolve("./client/index.tsx"))
	async function build(){
		await promisepipe(bundle.bundle(),fs.createWriteStream("./build/public/client.js"));
	}
	await build();
	bundle.on("update",build)
}

let compileProject = gulpTypescript.createProject("./tsconfig.json")

function compile(){
	fs.ensureDirSync("./build");
	return gulp.src("./server/**")
		.pipe(compileProject())
		.pipe(gulp.dest("./build"))
}

let serverProcess;

async function start(){
	serverProcess = cp.fork(require.resolve("./build"),{cwd:"./data"})
}

async function stop(){
	serverProcess.kill();
}

let build = gulp.series(
	clean,
	gulp.parallel(
		compile,
		buildClient.bind(null,false),
		copyResources
	)
)

async function copyResources(){
	await fs.copy("./resources","./build")
}

gulp.task("build",build)
gulp.task("watch",gulp.parallel(
	gulp.series(
		compile,
		start,
		function(){
			gulp.watch("./server/**",gulp.series(
				stop,
				compile,
				start
			))
			gulp.watch("./resources/**",gulp.dest("./build"))
		}
	),
	buildClient.bind(null,true),
	copyResources
))
