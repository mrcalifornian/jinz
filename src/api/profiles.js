const axios = require("axios");

const getProfiles = async (query) => {
  const options = {
    method: "POST",
    url: "https://linkedin-profiles-and-company-data.p.rapidapi.com/linkedin-search",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "38bb8396abmsh1a750bf58a06396p1f40c8jsne48c89c62a25",
      "X-RapidAPI-Host": "linkedin-profiles-and-company-data.p.rapidapi.com",
    },
    data: {
      keyword: query,
      search_type: "people",
      location: "",
      size: "1-50",
      per_page: 50,
      offset: 0,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
