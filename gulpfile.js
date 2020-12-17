const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    minifyHtml = require("gulp-minify-html"),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    babel = require('gulp-babel'),
    del = require('del');
//清空builder文件夹
function clean(cb) {
    const deletedPaths = del.sync(['builder/*']);
    console.log('Deleted files and directories:\n', deletedPaths.join('\n'));
    cb();
}
//压缩首页
function revCss() {
    gulp.src('static/css/*.css')
    .pipe(rev())
    .pipe(cleanCSS())
    .pipe(gulp.dest('builder/static/css')) 
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/index/css')) 
}
function revJs() {
    gulp.src('src/js/*.js')
    .pipe(babel())
    .pipe(rev())
    .pipe(uglify())
    .pipe(gulp.dest("builder/src/js"))
    .pipe(rev.manifest())
    .pipe(gulp.dest("rev/index/js"))
        
}
function revHtml() {
    gulp.src(['rev/index/**/*.json','./*.html'])
    .pipe(revCollector({
        replaceReved: true
    }))
    .pipe(minifyHtml())
    .pipe(gulp.dest('builder'))
}
function copy_static_img() {
    gulp.src('static/img/*')
        .pipe(gulp.dest("builder/static/img"))
}
//平移第三方插件
function copyPlugins() {
    gulp.src('bs/**/*')
    .pipe(gulp.dest("builder/bs"))
}
//平移配置文件
function copyJsonp() {
    gulp.src('./config.json')
    .pipe(gulp.dest("builder"))
}
// watch('src/js/*.js', async()=>{
//     gulp.src(['src/js/*.js'])
//     .pipe(gulp.dest("dist/src/js"))
// })
//shopAccount项目
function revCssShopAccount() {
    gulp.src('shopAccount/static/css/*.css')
    .pipe(rev())
    .pipe(cleanCSS())
    .pipe(gulp.dest('builder/shopAccount/static/css'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/shopAccount/css'))
}
function revJsShopAccount() {
    gulp.src('shopAccount/src/js/*.js')
    .pipe(babel())
    .pipe(rev())
    .pipe(uglify())
    .pipe(gulp.dest("builder/shopAccount/src/js"))
    .pipe(rev.manifest())
    .pipe(gulp.dest("rev/shopAccount/js"))
}
function copy_static_img_shopAccount() {
    gulp.src('shopAccount/static/img/*')
    .pipe(gulp.dest("builder/shopAccount/static/img"))
}
function revHtmlShopAccount(){
    gulp.src(['rev/shopAccount/**/*.json', 'shopAccount/*.html'])
    .pipe(revCollector({
        replaceReved: true
    }))
    .pipe(minifyHtml())
    .pipe(gulp.dest('builder/shopAccount'))
}
//feedback项目
function revCssFeedback() {
    gulp.src('feedback/static/css/*.css')
    .pipe(rev())
    .pipe(cleanCSS())
    .pipe(gulp.dest('builder/feedback/static/css'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/feedback/css'))
}
function revJsFeedback() {
    gulp.src('feedback/src/js/*.js')
    .pipe(babel())
    .pipe(rev())
    .pipe(uglify())
    .pipe(gulp.dest("builder/feedback/src/js"))
    .pipe(rev.manifest())
    .pipe(gulp.dest("rev/feedback/js"))
}
function copy_static_img_feedback() {
    gulp.src('feedback/static/img/*')
    .pipe(gulp.dest("builder/feedback/static/img"))
}
function revHtmlFeedback(){
    gulp.src(['rev/feedback/**/*.json', 'feedback/*.html'])
    .pipe(revCollector({
        replaceReved: true
    }))
    .pipe(minifyHtml())
    .pipe(gulp.dest('builder/feedback'))
}
//integration项目
function revCssIntegration() {
    gulp.src('integration/static/css/*.css')
    .pipe(rev())
    .pipe(cleanCSS())
    .pipe(gulp.dest('builder/integration/static/css'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('rev/integration/css'))
}
function revJsIntegration() {
    gulp.src('integration/src/js/*.js')
    .pipe(babel())
    .pipe(rev())
    .pipe(uglify())
    .pipe(gulp.dest("builder/integration/src/js"))
    .pipe(rev.manifest())
    .pipe(gulp.dest("rev/integration/js"))
}
function copy_static_img_integration() {
    gulp.src('integration/static/img/*')
    .pipe(gulp.dest("builder/integration/static/img"))
}
function revHtmlIntegration(){
    gulp.src(['rev/integration/**/*.json', 'integration/*.html'])
    .pipe(revCollector({
        replaceReved: true
    }))
    .pipe(minifyHtml())
    .pipe(gulp.dest('builder/integration'))
}


//构建打包
function build(cb) {
    revCss();
    revJs();
    revHtml();
    copyPlugins();
    copyJsonp();
    copy_static_img();

    revCssShopAccount();
    revJsShopAccount();
    copy_static_img_shopAccount();
    revHtmlShopAccount();

    revCssFeedback();
    revJsFeedback();
    copy_static_img_feedback();
    revHtmlFeedback();

    revCssIntegration();
    revJsIntegration();
    copy_static_img_integration();
    revHtmlIntegration();

    cb();
}

exports.clean = clean;
exports.default = build;

    