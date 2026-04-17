export function validateFile(file, allowedTypes, maxSizeMB = 10){
    if(!file) throw new Error(" No File Uploaded")

        const sizeMB = file.size/(1024 * 1024)

        if(sizeMB > maxSizeMB){
            throw new Error("File too Large")
        }

        if(!allowedTypes.includes(file.type)){
            throw new Error("Invalid File Types ")
        }
}