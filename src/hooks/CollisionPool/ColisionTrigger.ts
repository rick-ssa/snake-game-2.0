import { colidersName } from "../../enums/descriptions";
import IColider from "../../models/IColiders";
import { useFoodCollision, useSelfCollision } from "./CollisionFunctions";

const useCollisionTrigger = ()=> {
    const foodCollision = useFoodCollision()
    const selfCollision = useSelfCollision()

    return (colider:IColider) => {
        if(colider.name === colidersName.COLIDER_FOOD) {
            foodCollision()
        }

        if(new RegExp(colidersName.COLIDER_SNAKE_BODY).test(colider.name)) {
            selfCollision()
        }
    }
}

export default useCollisionTrigger