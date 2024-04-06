function file() {
}
//为什么要这么设计，是为了实现JavaScript的file类，为了完美的代码提示，而不直接使用object，未来会改为类
file.copyFolder = function(srcDirPath, destDirPath) {
    const File = java.io.File
    const srcDir = new File(srcDirPath)
    const destDir = new File(destDirPath)
    const Files = java.nio.file.Files

    if (!destDir.exists()) {
        destDir.mkdir()
    }

    const files = Java.from(srcDir.listFiles())
    files.forEach(function(file) {

        const srcFile = new File(srcDir, file.getName())
        const destFile = new File(destDir, file.getName())

        if(file.isDirectory()) {

            this.copyFolder(srcFile.getAbsolutePath(), destFile.getAbsolutePath())

        } else {
            if(!destFile.exists()) {

                Files.copy(srcFile.toPath(), destFile.toPath())

            }
        }
    })
}