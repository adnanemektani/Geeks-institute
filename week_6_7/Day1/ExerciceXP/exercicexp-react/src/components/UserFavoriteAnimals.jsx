function UserFavoriteAnimals(props){
    props.favAnimals 




    return(
        <ul>{props.favAnimals.map((animal, index) => <li key={index}>{animal} </li>)}</ul>
    )
}
export default UserFavoriteAnimals
