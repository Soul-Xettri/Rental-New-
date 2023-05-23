import axios from "axios";

export const PostQuery = async (route: any, data: any) => {
  try {
    return axios.post(route, data, {
      withCredentials: true,
    });
  } catch (e) {
    console.log(e, "errrrororor");
  }
};

export const DeleteQuery = async (route: any) => {
  try {
    return axios.delete(route, {
      withCredentials: true,
    });
  } catch (e) {
    console.log(e, "errrrororor");
  }
};

export const FetchQuery = async (route: any) => {
  try {
    return axios.get(route, {
      withCredentials: true,
    });
  } catch (e) {
    console.log(e, "errrrororor");
  }
};

export const PatchQuery = async (route: any, data: any) => {
  try {
    return axios.patch(route, data, {
      withCredentials: true,
    });
  } catch (e) {
    console.log(e, "errrrororor");
  }
};
