import {useState} from "react"

function useModal(initial: boolean) {
    const [modal, setModal] = useState(initial)

    function toggleModal() {
        setModal(previous => !previous)
    }
    
    return {modal, toggleModal}
}

export default useModal
