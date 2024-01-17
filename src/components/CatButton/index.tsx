import api from "@/services/api";
import { Button, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";


export default function CatButton() {

    const [cat, setCat] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                api.get('').then((response) => {
                    setCat(response.data[0].url)
                })

            } catch (error) {
                console.log('erro!')
            }
        }
        fetchData();
    }, [])

    function getCat() {
        api.get('').then((response) => {
            setCat(response.data[0].url)
            console.log(response.data[0].url)
        })

    }

    return (
        <>
            <Button onClick={getCat}>Gerar Gato</Button>
            <Image src={cat} w="500px" h="500px"></Image>
        </>
    )
}