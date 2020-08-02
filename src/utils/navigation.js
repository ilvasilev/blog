const getNavigation = (user) => {

    const authLinks = [
      {
        title: "Publications",
        link: "/"
      },
      {
        title: "Create article",
        link: "/create"
      },
      {
        title: "Profile",
        link: `/profile/${user && user.id}`
      }
    ]
  
    const guestLinks = [
      {
        title: "Publications",
        link: "/"
      },
      {
        title: "Register",
        link: "/register"
      },
      {
        title: "Login",
        link: "/login"
      }
    ]
  
    const loggedIn = user && user.loggedIn
    return loggedIn ? authLinks : guestLinks
  }
  
  export default getNavigation