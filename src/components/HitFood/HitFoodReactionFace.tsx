import {FaRegSmileBeam as Face} from 'react-icons/fa'
import "./styles.css"
import { selectFace, setFace } from '../../store/gamePartsSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { useEffect, useRef } from 'react'

const HitFoodReactFace = () => {
    const faceVisible = useAppSelector(selectFace)
    const timeRef = useRef<NodeJS.Timeout>()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(faceVisible) {
            clearTimeout(timeRef.current)

            timeRef.current = setTimeout(()=>{
                dispatch(setFace(false))
            }, 500)
        }

        return () => clearTimeout(timeRef.current)
    },[faceVisible])

    if(!faceVisible) {
        return <></>
    }

    
    return (
        <div className='face_react'>
            <Face size={152} color='rgba(0,0,0,0.1)'/>
        </div>
    )
}

export default HitFoodReactFace