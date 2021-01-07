const urls = 'https://kinopoiskapiunofficial.tech';
const type = 'TOP_250_BEST_FILMS';
const page = 1;

 export const getRate = async () => {
    return await fetch(`${urls}/api/v2.2/films/top?type=${type}&page=${page}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-API-KEY': '0e5cd1cf-08cc-4a8d-85cd-d651fc2bf831',
        },
    }).then(res => res.json())
      .catch(error => console.log(error))
};

//getRate().then(res => console.log(res));
