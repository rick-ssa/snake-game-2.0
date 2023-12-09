import IColider from "../models/IColiders";

type Coordinates = Omit<IColider,'name'>
const detectColision = (object1:Coordinates, object2:Coordinates) => {
    return object1.left === object2.left && object1.top === object2.top
}

export default detectColision

