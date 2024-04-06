const InfixContext = static("InfixContext")
//@AsahiPrefix(-name createBar -namespace common)
function testfun(lexer) {
    const quest = (function() {
        if(lexer.peek() == "[" || lexer.peek() == "{") return lexer.questTypeMap()
        return null
    })()
    return result(function (context){
        const empty = getOrDefault(quest.get(context).get("empty"), "&7|")
        const fill = getOrDefault(quest.get(context).get("fill"), "&a|")
        const length = getOrDefault(quest.get(context).get("length"), 20)
        const percent = getOrDefault(quest.get(context).get("percent"), 0.0)
        return createBar(empty,fill,length,percent)
    })
}
function getOrDefault(any,any1) {
    if(any == null){
        return any1
    }
    return any
}

function createBar(empty, fill, length, percent) {
    let result = ""
    for(let i = 1; i <= length; i++) {
        if(isNaN(percent) || percent === 0.0) {
            result += empty
        } else if (percent >= i / length){
            result += fill
        } else {
            result += empty
        }
    }
    return result
}