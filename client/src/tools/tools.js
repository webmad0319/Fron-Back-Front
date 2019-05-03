
import axios from "axios";


class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL:`http://localhost:5000/`,
      withCredentials: true
    })
    
  }

  allMovies = () => {
    
    return this.service.get('/all')
    .then((response) => {
      return response.data})
  }

}
export default AuthService;