//@AsahiPrefix(-name getClass -namespace common)
function getClass(lexer) {
    const Any = lexer.questAny()
    return result(function (context){
        return Any.get(context).getClass()
    })
}