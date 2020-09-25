import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getEmployees: function() {
    return axios.get("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole");
  }
//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }
};
