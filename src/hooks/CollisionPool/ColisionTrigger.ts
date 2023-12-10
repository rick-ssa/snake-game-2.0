import { colidersName } from "../../enums/descriptions";
import IColider from "../../models/IColiders";
import { useFoodCollision } from "./CollisionFunctions";

const useCollisionTrigger = ()=> {
    const foodCollision = useFoodCollision()

    return (colider:IColider) => {
        if(colider.name === colidersName.COLIDER_FOOD) {
            foodCollision()
        }
    }
}

export default useCollisionTrigger