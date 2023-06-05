export const fetchPoint = async (point) =>{
    const data = await fetch(`https://api.openrouteservice.org/geocode/autocomplete?api_key=5b3ce3597851110001cf6248dbd9f67bbb404526bf973d1230d6da6c&text=${point}`).then((res) => res.json()).catch((err) => console.log(err));
    
    return data;
}

export const fetchDirection = async (origin,destination) =>{
    const data = await fetch(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248dbd9f67bbb404526bf973d1230d6da6c&start=${origin[0]},${origin[1]}&end=${destination[0]},${destination[1]}`).then((res) => res.json()).catch((err) => console.log(err));
    console.log(data);
    return data;
}

