// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import ShowCourse from './components/courses/ShowCourse'
import CreateCourse from './components/courses/CreateCourse'
import MineCourses from './components/courses/MineCourses'
//subjects
import Art from './components/subjects/Art'
import Business from './components/subjects/Business'
import DataAnalysis from './components/subjects/DataAnalysis'
import Design from './components/subjects/Design'
import Education from './components/subjects/Education'
import Engineering from './components/subjects/Engineering'
import Healthcare from './components/subjects/Healthcare'
import History from './components/subjects/History'
import Language from './components/subjects/Language'
import Law from './components/subjects/Law'
import Literature from './components/subjects/Literature'
import Math from './components/subjects/Math'
import Medicine from './components/subjects/Medicine'
import Programming from './components/subjects/Programming'
import Science from './components/subjects/Science'
import SocialScience from './components/subjects/SocialScience'



const App = () => {

  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  console.log('user in app', user)
  console.log('message alerts', msgAlerts)
  const clearUser = () => {
    console.log('clear user ran')
    setUser(null)
  }

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}

		return (
			<Fragment>
				<Header user={user} />
				<Routes>
					<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
					<Route
						path='/sign-up'
						element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
					/>
					<Route
						path='/sign-in'
						element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
					/>
          <Route
            path='/sign-out'
            element={
              <RequireAuth user={user}>
                <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
              </RequireAuth>
            }
          />
          <Route
            path='/change-password'
            element={
              <RequireAuth user={user}>
                <ChangePassword msgAlert={msgAlert} user={user} />
              </RequireAuth>}
          />
			<Route
				path='/addCourse'
				element={
				<RequireAuth user={user}>
					<CreateCourse msgAlert={msgAlert} user={user} />
				</RequireAuth>}
			/>
			<Route
				path='/courses/mine'
				element={
					<RequireAuth user={user}>
						<MineCourses msgAlert={msgAlert} user={user}/>
					</RequireAuth>
				}
			/>
{/* subjects */}
			<Route
				path='/courses/art'
				element={<Art msgAlert={msgAlert} user={user} />}
			/>

			<Route
				path='/courses/business'
				element={<Business msgAlert={msgAlert} user={user} />}
			/>

			<Route
				path='/courses/dataanalysis'
				element={<DataAnalysis msgAlert={msgAlert} user={user} />}
			/>			
			<Route
				path='/courses/design'
				element={<Design msgAlert={msgAlert} user={user} />}
			/>	
			<Route
				path='/courses/education'
				element={<Education msgAlert={msgAlert} user={user} />}
			/>	

			<Route
				path='/courses/engineering'
				element={<Engineering msgAlert={msgAlert} user={user} />}
			/>	
			<Route
				path='/courses/healthcare'
				element={<Healthcare msgAlert={msgAlert} user={user} />}
			/>	
			<Route
				path='/courses/history'
				element={<History msgAlert={msgAlert} user={user} />}
			/>	
			<Route
				path='/courses/language'
				element={<Language msgAlert={msgAlert} user={user} />}
			/>	
			<Route
				path='/courses/law'
				element={<Law msgAlert={msgAlert} user={user} />}
			/>	
			<Route
				path='/courses/literature'
				element={<Literature msgAlert={msgAlert} user={user} />}
			/>	
			<Route
				path='/courses/math'
				element={<Math msgAlert={msgAlert} user={user} />}
			/>	
			<Route
				path='/courses/medicine'
				element={<Medicine msgAlert={msgAlert} user={user} />}
			/>	
			<Route
				path='/courses/programming'
				element={<Programming msgAlert={msgAlert} user={user} />}
			/>	
			<Route
				path='/courses/science'
				element={<Science msgAlert={msgAlert} user={user} />}
			/>	
			<Route
				path='/courses/socialscience'
				element={<SocialScience msgAlert={msgAlert} user={user} />}
			/>	
			{/* end of subjects */}
			<Route
				path='/courses/:id'
				element={<ShowCourse msgAlert={msgAlert} user={user} />}
			/>
				</Routes>
				{msgAlerts.map((msgAlert) => (
					<AutoDismissAlert
						key={msgAlert.id}
						heading={msgAlert.heading}
						variant={msgAlert.variant}
						message={msgAlert.message}
						id={msgAlert.id}
						deleteAlert={deleteAlert}
					/>
				))}
			</Fragment>
		)
}

export default App
