// let CLOUD_TYPE;
function getCloudType(d){
    if (d === 0){
        return "Cloudless. ";
    } else if (d === 100){
        return "Sky Obscured. "
    } else if (d>1 && d<13){
        return "Sunny"
    } else if (d>13 && d<26){
        return "Scattered Clouds. "
    } else if (d>26 && d<39){
        return "Slightly Cloudy. "
    } else if (d>39 && d<52){
        return "Partly Cloudy. "
    } else if (d>52 && d<65){
        return "Mostly Cloudy. "
    } else if (d>65 && d<78){
        return "Mostly Cloudy. "
    } else if (d>78 && d<91){
        return "Nearly Overcast. "
    }else if (d>91 && d<99){
        return "Overcast. "
    }
} 

export default getCloudType;