import { useSelector } from "react-redux"



const ActivityCard = (props) => {

    const createActivities = useSelector(state => state.createActivities);
    return (
        <>
            {createActivities?.map(activity => {
                return (
                    <div key={activity.name}>
                        <h3>{activity.name}</h3>
                        <p>{activity.difficulty}</p>
                        <p>{activity.duration}</p>
                        <p>{activity.season}</p>
                        <ul>
                            {activity.countries.map(country => <li key={country}>{country}</li>)}
                        </ul>
                    </div>
                )
            })}
        </>
    )
}

export default ActivityCard;