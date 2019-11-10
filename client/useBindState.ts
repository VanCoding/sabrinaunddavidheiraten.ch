import {useState} from "react"

export default function<T>(initialValue:T, sideEffect?:(value:T)=>void){
	let [value,onChange] = useState(initialValue)
	return {
		value,
		onChange:(value:T)=>{
			onChange(value);
			if(sideEffect){
				sideEffect(value)
			}
		}
	}
}
