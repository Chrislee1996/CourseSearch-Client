import IndexCourses from "./courses/IndexCourses"

const Home = (props) => {
	// const { msgAlert, user } = props
	const {user, msgAlert} = props

	return (
		<>
			<IndexCourses user={user} msgAlert={msgAlert}/>
		</>
	)
}

export default Home
