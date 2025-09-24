// tools 

export function stringFormated(string){
    /**
     * add security to inputs
     * avoid xss atacks
     */
    let arrStr = String(string.split(''))
    if(arrStr.includes('<') || arrStr.includes('>') || string.trim() === ' '){
        return '';
    }else{
        return string;
    }
}


export function formatData(data){
    /**
     * format data to use in localStorage
     * ex: "New Topic" => "NEW_TOPIC"
     */
    return data.trim().toUpperCase().split(' ').join('_')
}


export function titleCase(text){
    /**
     * ex: "NEW_TOPIC" => "New Topic"
     */
    if(!text)return '';
    let noSpaces = text.replaceAll('_',' ').split(' ')
    let title = noSpaces.map((e)=>{
        let charAt0 = String(e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
        return charAt0;
    })
    let strArr = title.join(' ')
    return stringFormated(strArr.toString())
}

