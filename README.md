# gulp
为防止出现JS冲突，特别使用了babel转码，需要在页面根目录增加.babelrc文件，内容为：
{
    "presets": ["env"]
}
还需要注意html文件在打包带有版本号js文件的时候要先引入manifest.json文件后再打包输出
