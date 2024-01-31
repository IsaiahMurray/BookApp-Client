import axios, {  AxiosRequestConfig, AxiosResponse } from 'axios';

export const getToken = (): string | null => {
  const storedToken: string | null = localStorage.getItem("token");
  if (storedToken && storedToken !== null && storedToken !== "null") {
    return String(storedToken);
  } else {
    return null;
  }
}

export const updateToken = (newToken: string): void => {
  localStorage.setItem("token", newToken);
};

export const clearToken = (): void => {
  localStorage.removeItem("token");
  console.log("Token cleared from local storage")
};

export const headers: AxiosRequestConfig['headers'] = {
  "Authorization": getToken(),
  "Content-Type": "application/json"
}

export const postData = async (url: string, bodyData: Record<string, unknown>) => {
   console.log(bodyData)
  try {
    const res: AxiosResponse = await axios.post(url, bodyData, {headers});
     console.log(res.data)
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
    } else {
      console.error("General error:", error);
    }
  }
};

export const getData = async (url: string, query?: number[]) => {
  try {
    if(query){
      const queryParams = {
        numbers: query.join(','), // Convert array to comma-separated string
      };
      const res = await axios.get(url, {params: queryParams, headers: {...headers}} );
      console.log(res);
      return res;
    }

    const res: AxiosResponse = await axios.get(url, {headers: {...headers}});

     console.log(res.data);
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
    } else {
      console.error("General error:", error);
    }
  }
};

export const updateData = async (url: string, bodyData?: Record<string, unknown>) => {
  try {
    console.log(url, bodyData)
    const res = await axios.put(url, bodyData, {headers: {...headers}});
    console.log(res);
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Axios error:", error);
    } else {
      console.error("General error:", error);
    }
  }
}

export const patchData = async(url: string, bodyData?: Record<string, unknown>) => {
  try {
    const res = await axios.patch(url, bodyData, {headers: {...headers}});
    console.log(res);
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
    } else {
      console.error("General error:", error);
    }
  }
}

export const deleteData = async (url: string) => {
  try {
    const res: AxiosResponse = await axios.delete(url, { headers });
     console.log(res.data)
    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error);
    } else {
      console.error("General error:", error);
    }
  }
}