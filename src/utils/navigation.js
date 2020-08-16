const getNavigation = (user) => {

    const authLinks = [
      {
        title: "Publications",
        link: "/publications"
      },
      {
        title: "Create article",
        link: "/create"
      },
      {
        title: "Profile",
        link: `/profile/${user && user.id}`
      },
      {
        title: 'Users',
        link: '/users'
      },
      {
        title: 'Home',
        link: '/'
      }    
    ]
  
    const guestLinks = [
      {
        title: "Publications",
        link: "/publications"
      },
      {
        title: "Register",
        link: "/register"
      },
      {
        title: "Login",
        link: "/login"
      },
      {
        title: 'Users',
        link: '/users'
      },
      {
        title: 'Home',
        link: '/'
      } 
    ]
  
    const loggedIn = user && user.loggedIn
    return loggedIn ? authLinks : guestLinks
  }
  
  export default getNavigation