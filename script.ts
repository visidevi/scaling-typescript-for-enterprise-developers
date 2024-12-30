const city = {
    name: 'Tokyo',
    country: 'Japan'
}
type CityWithInfo = typeof city;

// All of the types are inferred from the City object
const city2: CityWithInfo = {
    name: 'Amsterdam',
    country: 'Netherlands'
}

type CityWithNickName = CityWithInfo & { nickName: string };

const cityWithNickName: CityWithNickName = {
    name: 'Amsterdam',
    country: 'Netherlands',
    nickName: 'Venice of the North'
}