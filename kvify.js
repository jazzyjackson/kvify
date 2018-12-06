module.exports = function kvify(fileContents){
    try {
        return JSON.parse(fileContents)
    } catch(e){
        return fileContents.split('\n').filter(line => {
            return line[0] != '#' && line.includes('=')
        }).map(line => {
            var key = line.slice(0, line.indexOf('=')).trim()
            var val = line.slice(line.indexOf('=') + 1).trim()
            return {[key]: val}
        }).reduce((a,b) => Object.assign(a,b), {})
    }
}
