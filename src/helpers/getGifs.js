const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=KdFtCEHxR37ZjqSF6KPG3MTZfxC0dWA5`;

    try {
        const respuesta = await fetch(url);
        const { data } = await respuesta.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.original.url
            }
        })

        // console.log(gifs);
        return (gifs)


    } catch (error) {
        console.error(error)
    }


}


export default getGifs;